const removeFromArray = function(array, ...arg){
    let newArray = [];
    array.forEach((num) => {
        if (!arg.includes(num)) {
            newArray.push(num);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
