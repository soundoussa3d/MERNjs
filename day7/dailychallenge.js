// Fetch user data from the API
async function fetchData1() {
    try {
     const data = await fetch("https://dummyjson.com/users");
     const result = await data.json();
     console.log("RESULT: ", result)
     return result;
    } catch (error) {
       console.log('FATAL ERROR: ', error.message)
    }
}

/*const fetchUserData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
    }
};
fetchUserData();*/
const userData=fetchData1();
// Process user data
const processUserData = (userData) => {
    // Ensure userData is an array
    if (!Array.isArray(userData)) {
        console.error('userData is not an array');
        return [];
    }

    // Filter out users with gender "male" and map the remaining users
    const processedData = userData
        .filter(({ gender }) => gender !== 'male')
        .map(({ name, age }) => `Name: ${name}, Age: ${age}`);

    return processedData;
};

// Summarize age of male users
const summarizeAge = (userData) => {
    // Ensure userData is an array
    if (!Array.isArray(userData)) {
        console.error('userData is not an array');
        return 0;
    }

    // Calculate total age of male users
    const totalAge = userData
        .filter(({ gender }) => gender === 'male')
        .reduce((sum, { age }) => sum + age, 0);

    return totalAge;
};

processUserData(userData).processedData;
//console.log(result);
// Fetch user data, process it, summarize it, and display the results
(async () => {
    try {
        const userData = await fetchUserData();
        const processedData = processUserData(userData);
        const totalAge = summarizeAge(userData);

        console.log('Processed User Data:');
        console.log(processedData);
        console.log('Total Age of Male Users:', totalAge);
    } catch (error) {
        console.error('Error:', error);
    }
})();