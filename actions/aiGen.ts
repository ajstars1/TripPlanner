import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold
}from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
// const API_KEY = process.env.GOOGLE_API_KEY;
const API_KEY = "AIzaSyARCB8neNJ6htgesnCmEz2Zk6Sh8jVhveo";

export async function runChat({ userInput }: { userInput: string }) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "i want to travel from my live location which is jammu right now and i want to go to visit taj mahal for 4 days now tell me what precautions should i take while taking my clothes, money etc to go there",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Precautions for Clothing: Pack light, functional clothing that is breathable and comfortable in warm weather. Consider using packing cubes or suitcases with multiple compartments to organize your clothes. Bring a few layers of clothing, including a raincoat, as the weather can be unpredictable. Pack comfortable shoes for walking and exploring. Avoid packing expensive or delicate clothing items.Precautions for Money: Bring a mix of cash in small denominations and a debit or credit card for emergencies. Keep your cash and credit cards in separate locations and carry them securely. Notify your bank before traveling to avoid any issues with card usage. Consider using a travel money belt or RFID-blocking wallet to protect your valuables.Additional Precautions:Health: Bring necessary medications and any prescriptions you need. Pack a small first-aid kit with essential items. Stay hydrated by bringing a reusable water bottle.Safety: Be aware of your surroundings and take precautions against pickpocketing and theft. Keep your passport and other important documents in a secure location. Make copies of your important documents and store them separately.Luggage: Pack your luggage carefully and securely. Use a sturdy suitcase or backpack that can withstand rough handling. Consider using TSA-approved locks for checked baggage.Other: Bring a power bank and charging cables for your electronic devices. Pack a small towel and toiletries in case hotel amenities are limited. Bring a hat and sunglasses to protect yourself from the sun. Familiarize yourself with local customs and dress codes to avoid any cultural misunderstandings.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "which weather conditions is best for me to travel their" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "The best weather conditions to travel to the Taj USER are during the shoulder seasons, which run from October to November and February to March. During these months, the weather is generally mild and pleasant, with average temperatures ranging from 15 to 30 degrees Celsius (59 to 86 degrees Fahrenheit).October to November: This is the post-monsoon season, so the weather is typically clear and dry. The air is less humid, making it more comfortable to explore outdoors. The foliage is changing color, creating beautiful秋の景色.February to March: This is the pre-monsoon season, so the weather is generally warm and sunny. The flowers are in fullbloom, adding a pop of color to the gardens and parks. The days are longer, allowing for more time to explore the area.Note: The Taj محل is open 24 hours a day, but the best time to visit is during sunrise or sunset when the light is at its most beautiful. Avoid visiting during the peak summer months (April to June) when temperatures can soar up to 40 degrees Celsius (104 degrees Fahrenheit) and the air is very humid. It can also be very cold during the winter months (December to January), so bring warm clothing if you are visiting during this time.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: "i want to go solo there now tell me how much money should i take ",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "The amount of money you need for a solo trip to the Taj Mahal will depend on your travel style, budget, and the length of your stay. However, here is a rough estimate of how much you might need:Flights: Round-trip flights from major cities in India to Agra (the closest airport to the Taj Mahal) can range from ₹3,000 to ₹10,000 ($40 to $130).Accommodation: There are a variety of hotels and guesthouses to choose from in Agra, ranging from budget options to luxury hotels. A budget hotel room can cost around ₹1,000-₹2,000 ($13-$26) per night, while a mid-range hotel room can cost around ₹3,000-₹5,000 ($40-$65) per night.Food: Food in Agra is relatively inexpensive. You can expect to pay around ₹200-₹300 ($3-$4) for a meal at a local restaurant. If you are on a budget, you can save money by eating at street stalls or dhabas (local eateries).Entrance fees: The entrance fee for the Taj Mahal is ₹50 ($0.65) for Indian nationals and ₹1,100 ($14) for foreign nationals. There are additional fees for visiting other attractions in Agra, such as the Agra Fort and Fatehpur Sikri.Transportation: The most convenient way to get around Agra is by tuk-tuk (auto-rickshaw). Tuk-tuk rides typically cost around ₹100-₹200 ($1.30-$2.60) per ride. You can also hire a bicycle or a car if you prefer.Other expenses: You may also need to budget for other expenses, such as souvenirs, tips, and any other activities you plan to do in Agra.Total budget: Based on the above estimates, you can expect to spend around ₹10,000-₹20,000 ($130-$260) per day for a solo trip to the Taj Mahal. This includes accommodation, food, transportation, entrance fees, and other miscellaneous expenses.Tips for saving money: Travel during the shoulder seasons (October-November and February-March) to avoid peak season prices. Book your flights and accommodation in advance to get the best deals. Eat at local restaurants and street stalls to save money on food. Take advantage of free activities, such as walking tours and visiting local markets. Consider sharing a tuk-tuk or hiring a bicycle to save money on transportation.",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
    const response = result.response;
    console.log(response.text());
    return response;
}
