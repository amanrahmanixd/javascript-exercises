const repeatString = function(string, num) {
    if (num < 0){
        let arr = 'ERROR';
        return arr;
    }
    else {
        let a = string;
        string = '';
        for (let i = 0; i < num; i++){
            string = string + a;
        }
    return string;
    }
};
console.log(repeatString('aman', -5));

// Do not edit below this line
module.exports = repeatString;
