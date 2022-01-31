function swap(array) {
    if (array.length % 2 === 0) {
        let newEven = array.slice(array.length / 2, array.length);
        let newArrEnd = array.slice(0, array.length / 2);
        return newEven.concat(newArrEnd);
    } else {
        let arrOdd = array.slice(array.length / 2, array.length);
        let first = arrOdd.splice(0, 1);
        arrOdd.push(first[0]);
        let newArrEnd = array.slice(0, array.length / 2);
        return arrOdd.concat(newArrEnd);
    }
}
console.log(swap([1, 2, 3, 4, 5, 6]));
console.log(swap([1, 2, 3, 4, 5, 6, 7]));
