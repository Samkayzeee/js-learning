const FizzBuzz = (n) => {
    for(let i = 1; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz');
        }
        else if(i%3 === 0){
            console.log('Fizz');
        }
        else if(i%5 === 0){
            console.log('Buzz');
        }
        else if(i%3 !== 0 || i%5 !== 0){
            console.log(i);
        }
    }
}

// FizzBuzz(15);


let Romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const romanToNumber  = (roman) => {
    let value  = 0;

    for (let i = value; i < roman.length; i++) {
        Romans[roman[i]] < Romans[roman[i + 1]] ? (value -= Romans[roman[i]]) : (value += Romans[roman[i]])
    }

    return value;
};

// console.log(romanToNumber('MX'));