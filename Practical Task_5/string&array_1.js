const array = [2, 3, 5, 7, 11, 13, 17];
function currentSum(array) {
    let result = [];
    let newArr = [];
    let leftArr = [];
    array.reduce(function (sum, current, i) {
        newArr += current + "+";
        leftArr.push(newArr.slice(0, newArr.length - 1));
        return (result[i] = sum + current);
    }, 0);
    console.log(`${leftArr} = ${result}`);
}
currentSum(array);
