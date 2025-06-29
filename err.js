// Q1 ====================================

function extractNumbers(arr) {
    try{
        if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }
    const newArr = arr.filter(item =>typeof item === "number" && !isNaN(item));
        return newArr;
    }
    catch(err){
        console.log("Error: " + err.message);
        return [];
    }
}
console.log(extractNumbers([55, "hi", 66])); 

// Q2 ====================================

function sumNumbersSafe(arr) {
    try {
        const numbers = extractNumbers(arr);
        return numbers.reduce((sum, num) => sum + num, 0);
    } catch (err) {
        console.log(`Warning: ${err.message}`);
        return 0;
    }
}
console.log(sumNumbersSafe([2, 4, "bad"]));
console.log(sumNumbersSafe("fail")); 