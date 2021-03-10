module.exports = function reverse (number) {
    let str = number < 0 ?
        String(number).substring(1) :
        String(number);
    return str.split('').reverse().join('');
}
