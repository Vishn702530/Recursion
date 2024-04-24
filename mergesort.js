function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let mid = Math.floor(array.length / 2);
        let leftArr = array.slice(0, mid);
        let rightArr = array.slice(mid, array.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;

}
console.log(mergeSort([105, 79, 100, 110]));