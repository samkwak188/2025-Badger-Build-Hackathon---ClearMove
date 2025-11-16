// Quick test script to check which Gemini models are available with your API key
const { GoogleGenerativeAI } = require('@google/generative-ai');

const apiKey = 'AIzaSyD_UDWCBtnuNK5PffxQSnrgIpyzLQmwmJ4';

async function testGemini() {
  console.log('🔑 Testing API key...');
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Try to list available models
  try {
    console.log('\n📋 Attempting to list available models...');
    const models = await genAI.listModels();
    console.log('✅ Available models:');
    for (const model of models) {
      console.log(`  - ${model.name}`);
      console.log(`    Supports: ${model.supportedGenerationMethods.join(', ')}`);
    }
  } catch (err) {
    console.error('❌ Could not list models:', err.message);
  }
  
  // Try different model names
  const modelNamesToTry = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-pro',
    'gemini-pro-vision',
    'models/gemini-1.5-flash',
    'models/gemini-pro',
  ];
  
  console.log('\n🧪 Testing different model names...\n');
  
  for (const modelName of modelNamesToTry) {
    try {
      console.log(`Testing: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      // Try a simple text generation
      const result = await model.generateContent('Hello');
      const response = await result.response;
      const text = response.text();
      
      console.log(`✅ ${modelName} WORKS! Response: ${text.substring(0, 50)}...\n`);
      break; // Found a working model
    } catch (err) {
      console.log(`❌ ${modelName} failed: ${err.message}\n`);
    }
  }
}

testGemini().catch(console.error);

