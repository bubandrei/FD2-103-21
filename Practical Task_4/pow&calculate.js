function pow(a) {
    return function (b) {
        var result = a;
        if (b == 0) {
            return console.log(`${a}^${b} = ${1}`);
        } else if (b > 0) {
            for (var i = 1; i < b; i++) {
                result *= a;
            }
            return console.log(`${a}^${b} = ${result}`);
        } else if (b < 0) {
            for (var i = 1; i < -b; i++) {
                result *= a;
            }
            return console.log(`${a}^(${b})=${1 / result}`);
        }
    };
}
let exponentiation = pow;
exponentiation(2)(0);

let calculate = function (x) {
    return function (operation) {
        return function (y) {
            if (operation === `+`) {
                return console.log(`${x}+${y} = ${x + y}`);
            } else if (operation === `-`) {
                return console.log(`${x}-${y} = ${x - y}`);
            } else if (operation === `*`) {
                return console.log(`${x}*${y} = ${x * y}`);
            } else if (operation === `/` && y != 0) {
                return console.log(`${x}/${y} = ${x / y}`);
            } else {
                return console.log(`${x}/${y} = Ошибка (на ноль делить нельзя)`);
            }
        };
    };
};
let output = calculate;
output(5)("/")(0);
