let arr = [2, 5, 1, 8, 4];

function partition(arr, left, right) {
    let p = arr[Math.floor((right + left) / 2) - 1];
    while (left < right) {
        while (arr[left] < p) {
            left++;
        }
        while (arr[right] > p) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    return left;
}
function quickSort(arr, left, right) {
    if (arr.length > 1) {
        let index = partition(arr, left, right);
        if (left < index - 1) {
            partition(arr, left, index - 1);
        }
        if (index < right) {
            partition(arr, index, right);
        }
    }
    return arr;
}
console.log(quickSort(arr, 0, arr.length - 1));