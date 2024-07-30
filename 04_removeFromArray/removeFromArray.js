const removeFromArray = function (array, ...numbers) {
    let newArray = [];

    for (let num of array) {
        if (!numbers.includes(num)) {
            newArray.push(num);
        }
    }
    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
