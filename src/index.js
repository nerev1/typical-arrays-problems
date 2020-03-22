
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length == 0) return 0;
    let minItem = array[0];
    array.forEach( item => minItem = item < minItem ? item : minItem);
    return minItem;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length == 0) return 0;
    let maxItem = array[0];
    array.forEach( item => maxItem = item > maxItem ? item : maxItem);
    return maxItem;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length == 0) return 0;
    return array.reduce( (sum, currentItem) => sum + currentItem ) / array.length;
}
