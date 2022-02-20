let arr = [1, 8, 0, 5, 3]
function merge(arr1, arr2) {
    let sorted = [];
    let i = (j = 0);
    while (i < arr1.length && j < arr2.length)
        sorted.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    return [...sorted, ...arr1.slice(i), ...arr2.slice(j)];
}

function merge_sort(arr) {
    if (!arr || !arr.length) return null;
    if (arr.length > 1) {
        const m = Math.floor(arr.length / 2);
        const left = arr.slice(0, m);
        const right = arr.slice(m);
        return merge(merge_sort(left), merge_sort(right));
    } else return arr;
}


console.log(merge_sort(arr));