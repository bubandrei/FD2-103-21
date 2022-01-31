function getCounter(a = 0) {
    let value = a;
    function log() {
        console.log(this.value);
        return this;
    }
    function count(b) {
        this.value += b;
        return this;
    }
    function reset() {
        this.value = 0;
        return this;
    }
    return { log, count, reset, value };
}
var counter = getCounter(5);
counter.log().count(4).log().count(3).log().reset().log().count(8).log();
