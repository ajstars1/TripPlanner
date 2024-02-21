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
            text: "*Precautions for Clothing:\n\n Pack light, functional clothing that is breathable and comfortable in warm weather.\n* Consider using packing cubes or suitcases with multiple compartments to organize your clothes.\n* Bring a few layers of clothing, including a raincoat, as the weather can be unpredictable.\n* Pack comfortable shoes for walking and exploring.\n* Avoid packing expensive or delicate clothing items.\n\n*Precautions for Money:\n\n Bring a mix of cash in small denominations and a debit or credit card for emergencies.\n* Keep your cash and credit cards in separate locations and carry them securely.\n* Notify your bank before traveling to avoid any issues with card usage.\n* Consider using a travel money belt or RFID-blocking wallet to protect your valuables.\n\n*Additional Precautions:\n\nHealth:\n\n Bring necessary medications and any prescriptions you need.\n* Pack a small first-aid kit with essential items.\n* Stay hydrated by bringing a reusable water bottle.\n\n*Safety:\n\n Be aware of your surroundings and take precautions against pickpocketing and theft.\n* Keep your passport and other important documents in a secure location.\n* Make copies of your important documents and store them separately.\n\n*Luggage:\n\n Pack your luggage carefully and securely.\n* Use a sturdy suitcase or backpack that can withstand rough handling.\n* Consider using TSA-approved locks for checked baggage.\n\n*Other:\n\n Bring a power bank and charging cables for your electronic devices.\n* Pack a small towel and toiletries in case hotel amenities are limited.\n* Bring a hat and sunglasses to protect yourself from the sun.\n* Familiarize yourself with local customs and dress codes to avoid any cultural misunderstandings.",
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
            text: "The best weather conditions to travel to the Taj USER are during the shoulder seasons, which run from *October to November* and *February to March. During these months, the weather is generally mild and pleasant, with average temperatures ranging from 15 to 30 degrees Celsius (59 to 86 degrees Fahrenheit).\n\nOctober to November:\n\n This is the post-monsoon season, so the weather is typically clear and dry.\n* The air is less humid, making it more comfortable to explore outdoors.\n* The foliage is changing color, creating beautiful秋の景色.\n\n*February to March:\n\n This is the pre-monsoon season, so the weather is generally warm and sunny.\n* The flowers are in fullbloom, adding a pop of color to the gardens and parks.\n* The days are longer, allowing for more time to explore the area.\n\n*Note:\n\n The Taj محل is open 24 hours a day, but the best time to visit is during sunrise or sunset when the light is at its most beautiful.\n* Avoid visiting during the peak summer months (April to June) when temperatures can soar up to 40 degrees Celsius (104 degrees Fahrenheit) and the air is very humid.\n* It can also be very cold during the winter months (December to January), so bring warm clothing if you are visiting during this time.",
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
            text: "The amount of money you need for a solo trip to the Taj Mahal will depend on your travel style, budget, and the length of your stay. However, here is a rough estimate of how much you might need:\n\n*Flights:\n\n Round-trip flights from major cities in India to Agra (the closest airport to the Taj Mahal) can range from ₹3,000 to ₹10,000 ($40 to $130).\n\n*Accommodation:\n\n There are a variety of hotels and guesthouses to choose from in Agra, ranging from budget options to luxury hotels.\n* A budget hotel room can cost around ₹1,000-₹2,000 ($13-$26) per night, while a mid-range hotel room can cost around ₹3,000-₹5,000 ($40-$65) per night.\n\n*Food:\n\n Food in Agra is relatively inexpensive.\n* You can expect to pay around ₹200-₹300 ($3-$4) for a meal at a local restaurant.\n* If you are on a budget, you can save money by eating at street stalls or dhabas (local eateries).\n\n*Entrance fees:\n\n The entrance fee for the Taj Mahal is ₹50 ($0.65) for Indian nationals and ₹1,100 ($14) for foreign nationals.\n* There are additional fees for visiting other attractions in Agra, such as the Agra Fort and Fatehpur Sikri.\n\n*Transportation:\n\n The most convenient way to get around Agra is by tuk-tuk (auto-rickshaw).\n* Tuk-tuk rides typically cost around ₹100-₹200 ($1.30-$2.60) per ride.\n* You can also hire a bicycle or a car if you prefer.\n\n*Other expenses:\n\n You may also need to budget for other expenses, such as souvenirs, tips, and any other activities you plan to do in Agra.\n\n*Total budget:\n\n Based on the above estimates, you can expect to spend around ₹10,000-₹20,000 ($130-$260) per day for a solo trip to the Taj Mahal.\n* This includes accommodation, food, transportation, entrance fees, and other miscellaneous expenses.\n\n*Tips for saving money:\n\n Travel during the shoulder seasons (October-November and February-March) to avoid peak season prices.\n* Book your flights and accommodation in advance to get the best deals.\n* Eat at local restaurants and street stalls to save money on food.\n* Take advantage of free activities, such as walking tours and visiting local markets.\n* Consider sharing a tuk-tuk or hiring a bicycle to save money on transportation.",
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
