let arr = [ 2, 1, 5, 8, 4];

function selectSort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexmin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexmin]) {
                indexmin = j;
            }
        }
        if (indexmin !== i) {
            [arr[i], arr[indexmin]] = [arr[indexmin], arr[i]];
        }
    }
    return arr;
}
console.log(selectSort(arr));