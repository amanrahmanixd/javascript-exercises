const sumAll = function(a,b) {
    let total;
    let initial;
    if (a > b && typeof a === 'number' && typeof b === 'number'){
        let c = a;
        a = b;
        b = c;
        total = b; 
        initial = a;
        for (let i = 0; i < b - a; i++){
            total = total + initial;
            initial++;
        }
    }
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0){
        return 'ERROR';
    }
    if (a < b && typeof a === 'number' && typeof b === 'number') {
        total = b;
        initial = a;
        for (let i = 0; i < b - a; i++){
            total = total + initial;
            initial++;
    }}
    return total;
};
console.log(sumAll(1.6,986));

// Do not edit below this line
module.exports = sumAll;
