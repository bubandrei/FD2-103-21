let startArray = [-1, 2, 3.5, -12, 4, 1.25, 16];
for (let i = 0; i < startArray.length; i++) {
    if (!Number.isInteger(startArray[i])) {
        startArray.splice(i, 1);
    }
}
startArray = startArray.filter((startArray) => startArray > 0);

console.log(startArray);