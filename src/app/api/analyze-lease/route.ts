import { NextRequest, NextResponse } from "next/server";
import { getGeminiApiKey } from "@/config";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided. Please upload a lease PDF." },
        { status: 400 }
      );
    }

    if (!file.type || !file.type.includes("pdf")) {
      return NextResponse.json(
        { error: "Unsupported file type. Please upload a PDF file." },
        { status: 400 }
      );
    }

    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Missing API key. Please set GOOGLE_GEMINI_API_KEY in your .env.local (for local dev) or hosting environment.",
        },
        { status: 500 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Pdf = buffer.toString("base64");

    const prompt = `
You are an expert tenant-rights assistant reviewing a residential LEASE AGREEMENT.

The user is a tenant (often a student or first-time renter). Read the lease carefully and return a JSON summary that highlights:
- Hidden or unusual fees
- Important deadlines and penalties
- Maintenance / repair obligations
- Move-in / move-out inspection rules
- Deposit rules and situations where the landlord can keep money
- Clauses that are risky or unusually strict for the tenant
- Clear recommendations for what the tenant should do or ask about

Return ONLY valid JSON in this structure (no extra commentary, no markdown):
{
  "summary": "short plain-language summary of the lease overall",
  "keyClauses": [
    "important clause in plain language",
    "another important clause"
  ],
  "hiddenFees": [
    "any non-obvious fees, charges, penalties or add-ons"
  ],
  "tenantRisks": [
    "concrete risks or one-sided terms against the tenant"
  ],
  "recommendations": [
    "specific actions the tenant should take or questions to ask the landlord"
  ],
  "questionsForLandlord": [
    "good clarifying question to ask before signing",
    "another question"
  ]
}
`.trim();

    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const body = {
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inline_data: {
                mime_type: file.type || "application/pdf",
                data: base64Pdf,
              },
            },
          ],
        },
      ],
    };

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Gemini lease API error:", res.status, errorText);
      return NextResponse.json(
        {
          error: `Gemini API error: ${res.status} ${res.statusText}`,
          details: errorText.slice(0, 500),
        },
        { status: 500 }
      );
    }

    const data = await res.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      data.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("\n");

    if (!text) {
      console.error("❌ Empty lease analysis response:", JSON.stringify(data));
      return NextResponse.json(
        { error: "Empty response from Gemini while analyzing lease." },
        { status: 500 }
      );
    }

    try {
      const clean = text.replace(/```json\n?|\n?```/g, "").trim();
      const parsed = JSON.parse(clean);
      return NextResponse.json(parsed);
    } catch (err: any) {
      console.error("❌ Failed to parse lease JSON:", err.message, text);
      return NextResponse.json(
        {
          error: "Failed to parse Gemini lease response as JSON.",
          details: text.slice(0, 1000),
          parseError: err.message,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("❌ Unexpected lease analysis error:", error);
    return NextResponse.json(
      {
        error: "Internal server error while analyzing lease.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}


