const array = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
array.sort(function (a, b) {
    if (a == 0 && b != 0) return 1;
    else if (b == 0 && a != 0) return -1;
    else return 0;
});
console.log(array);


