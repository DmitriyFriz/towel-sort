module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) return arr;
    matrix = matrix.map(function(string, index){
        if (index % 2) return string.reverse();
        return string;
    })
    for (let string of matrix) {
        arr.push(...string);
    }
    return arr;
}
