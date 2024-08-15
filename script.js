const vegetableData = {
    carrot: {
        nutrients: "Carrots are rich in Vitamin A, Vitamin K1, potassium, and antioxidants.",
        growth: "Carrots should be grown in loose, well-drained soil with full sunlight. Space seeds about 2-3 inches apart.",
        manure: "Use well-rotted compost or manure to enrich the soil before planting.",
        time: "Carrots typically take 70-80 days to mature.",
        price: "₹120 per kg"
    },
    tomato: {
        nutrients: "Tomatoes are high in Vitamin C, potassium, folate, and Vitamin K.",
        growth: "Tomatoes need a sunny location, well-drained soil, and regular watering. Stake or cage the plants for support.",
        manure: "Use compost or aged manure to enhance soil fertility.",
        time: "Tomatoes usually take 60-85 days from transplanting to harvest.",
        price: "₹80 per kg"
    },
    potato: {
        nutrients: "Potatoes are a good source of Vitamin C, Vitamin B6, potassium, and fiber.",
        growth: "Potatoes grow best in loose, well-drained soil. Space tubers 12 inches apart.",
        manure: "Add compost or well-rotted manure before planting.",
        time: "Potatoes typically take 70-120 days to mature.",
        price: "₹50 per kg"
    },
    onion: {
        nutrients: "Onions are rich in Vitamin C, Vitamin B6, folate, and antioxidants.",
        growth: "Onions need full sun and well-drained soil. Space bulbs 4-6 inches apart.",
        manure: "Use compost or well-rotted manure to improve soil fertility.",
        time: "Onions usually take 90-120 days to mature.",
        price: "₹60 per kg"
    },
    cucumber: {
        nutrients: "Cucumbers are high in Vitamin K and provide some Vitamin C and potassium.",
        growth: "Cucumbers need a sunny location and well-drained soil. Space plants 36 inches apart.",
        manure: "Add compost or well-rotted manure to the soil before planting.",
        time: "Cucumbers typically take 50-70 days to mature.",
        price: "₹70 per kg"
    },
    spinach: {
        nutrients: "Spinach is rich in Vitamin A, Vitamin C, Vitamin K, and iron.",
        growth: "Spinach grows best in cooler temperatures and well-drained soil.",
        manure: "Use compost or well-rotted manure to enrich the soil.",
        time: "Spinach usually takes 30-45 days to mature.",
        price: "₹90 per kg"
    },
    lettuce: {
        nutrients: "Lettuce provides Vitamin A, Vitamin K, folate, and fiber.",
        growth: "Lettuce grows well in cool weather and well-drained soil. Space plants 6-12 inches apart.",
        manure: "Use compost or well-rotted manure to enhance soil fertility.",
        time: "Lettuce typically takes 30-60 days to mature.",
        price: "₹100 per kg"
    },
    bellPepper: {
        nutrients: "Bell peppers are high in Vitamin C, Vitamin A, and antioxidants.",
        growth: "Bell peppers need full sun and well-drained soil. Space plants 18-24 inches apart.",
        manure: "Add compost or aged manure to the soil before planting.",
        time: "Bell peppers usually take 70-90 days to mature.",
        price: "₹150 per kg"
    },
    zucchini: {
        nutrients: "Zucchini is rich in Vitamin C, Vitamin A, and manganese.",
        growth: "Zucchini grows best in full sun and well-drained soil. Space plants 24 inches apart.",
        manure: "Use compost or well-rotted manure to improve soil fertility.",
        time: "Zucchini typically takes 40-50 days to mature.",
        price: "₹80 per kg"
    },
    radish: {
        nutrients: "Radishes are a good source of Vitamin C, potassium, and fiber.",
        growth: "Radishes grow best in cooler weather and well-drained soil.",
        manure: "Add compost or well-rotted manure to the soil before planting.",
        time: "Radishes usually take 25-30 days to mature.",
        price: "₹60 per kg"
    },
    beetroot: {
        nutrients: "Beetroots are rich in Vitamin C, fiber, and antioxidants.",
        growth: "Beetroot grows well in well-drained soil and full sun. Space plants 3-4 inches apart.",
        manure: "Use compost or well-rotted manure to enhance soil fertility.",
        time: "Beetroot typically takes 50-70 days to mature.",
        price: "₹90 per kg"
    },
    cabbage: {
        nutrients: "Cabbage is high in Vitamin C, Vitamin K, and fiber.",
        growth: "Cabbage grows best in cool weather and well-drained soil. Space plants 12-18 inches apart.",
        manure: "Add compost or aged manure to the soil before planting.",
        time: "Cabbage usually takes 80-90 days to mature.",
        price: "₹70 per kg"
    },
    cauliflower: {
        nutrients: "Cauliflower provides Vitamin C, Vitamin K, and fiber.",
        growth: "Cauliflower needs cool temperatures and well-drained soil. Space plants 18-24 inches apart.",
        manure: "Use compost or well-rotted manure to improve soil fertility.",
        time: "Cauliflower typically takes 55-100 days to mature.",
        price: "₹120 per kg"
    },
    broccoli: {
        nutrients: "Broccoli is rich in Vitamin C, Vitamin K, and fiber.",
        growth: "Broccoli grows well in cool weather and well-drained soil. Space plants 18-24 inches apart.",
        manure: "Add compost or aged manure to the soil before planting.",
        time: "Broccoli usually takes 60-90 days to mature.",
        price: "₹130 per kg"
    },
    greenBean: {
        nutrients: "Green beans are high in Vitamin C, Vitamin K, and fiber.",
        growth: "Green beans need full sun and well-drained soil. Space plants 2-4 inches apart.",
        manure: "Use compost or well-rotted manure to enhance soil fertility.",
        time: "Green beans typically take 50-60 days to mature.",
        price: "₹90 per kg"
    },
    eggplant: {
        nutrients: "Eggplant is a good source of Vitamin B1, Vitamin B6, and potassium.",
        growth: "Eggplant needs full sun and well-drained soil. Space plants 18-24 inches apart.",
        manure: "Add compost or aged manure to the soil before planting.",
        time: "Eggplant usually takes 70-85 days to mature.",
        price: "₹120 per kg"
    },
    pumpkin: {
        nutrients: "Pumpkins are rich in Vitamin A, Vitamin C, and fiber.",
        growth: "Pumpkins grow best in full sun and well-drained soil. Space plants 36-48 inches apart.",
        manure: "Use compost or well-rotted manure to improve soil fertility.",
        time: "Pumpkins typically take 90-120 days to mature.",
        price: "₹100 per kg"
    },
    squash: {
        nutrients: "Squash provides Vitamin A, Vitamin C, and manganese.",
        growth: "Squash grows well in full sun and well-drained soil. Space plants 24 inches apart.",
        manure: "Add compost or well-rotted manure to the soil before planting.",
        time: "Squash usually takes 50-60 days to mature.",
        price: "₹90 per kg"
    },
    sweetCorn: {
        nutrients: "Sweet corn is a good source of Vitamin C, Vitamin B6, and fiber.",
        growth: "Sweet corn needs full sun and well-drained soil. Space plants 12-18 inches apart.",
        manure: "Use compost or aged manure to enhance soil fertility.",
        time: "Sweet corn typically takes 60-90 days to mature.",
        price: "₹80 per kg"
    },
    peas: {
        nutrients: "Peas are high in Vitamin C, Vitamin K, and protein.",
        growth: "Peas grow best in cool weather and well-drained soil. Space plants 2-4 inches apart.",
        manure: "Add compost or well-rotted manure to the soil before planting.",
        time: "Peas usually take 60-70 days to mature.",
        price: "₹100 per kg"
    },
    kale: {
        nutrients: "Kale is rich in Vitamin A, Vitamin K, and calcium.",
        growth: "Kale grows well in cool temperatures and well-drained soil. Space plants 12-18 inches apart.",
        manure: "Use compost or well-rotted manure to enhance soil fertility.",
        time: "Kale typically takes 50-75 days to mature.",
        price: "₹130 per kg"
    },
    chard: {
        nutrients: "Chard provides Vitamin A, Vitamin K, and magnesium.",
        growth: "Chard grows best in full sun or partial shade and well-drained soil.",
        manure: "Add compost or well-rotted manure to the soil before planting.",
        time: "Chard usually takes 50-60 days to mature.",
        price: "₹120 per kg"
    },
    okra: {
        nutrients: "Okra is a good source of Vitamin C, Vitamin K, and fiber.",
        growth: "Okra needs full sun and well-drained soil. Space plants 12-18 inches apart.",
        manure: "Use compost or well-rotted manure to improve soil fertility.",
        time: "Okra typically takes 50-60 days to mature.",
        price: "₹140 per kg"
    },
    artichoke: {
        nutrients: "Artichokes are high in fiber, Vitamin C, and antioxidants.",
        growth: "Artichokes need full sun and well-drained soil. Space plants 36 inches apart.",
        manure: "Add compost or aged manure to the soil before planting.",
        time: "Artichokes usually take 120-150 days to mature.",
        price: "₹200 per kg"
    }
};

function getVegetableInfo() {
    const input = document.getElementById('vegetableInput').value.toLowerCase();
    const info = vegetableData[input];

    if (info) {
        document.getElementById('nutrients').innerText = `Nutrients: ${info.nutrients}`;
        document.getElementById('growth').innerText = `Growing Instructions: ${info.growth}`;
        document.getElementById('manure').innerText = `Recommended Manure: ${info.manure}`;
        document.getElementById('time').innerText = `Time to Grow: ${info.time}`;
        document.getElementById('price').innerText = `Price: ${info.price}`;
    } else {
        document.getElementById('nutrients').innerText = 'No information available for this vegetable.';
        document.getElementById('growth').innerText = '';
        document.getElementById('manure').innerText = '';
        document.getElementById('time').innerText = '';
        document.getElementById('price').innerText = '';
    }
}

