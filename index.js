function triinser(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

    
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}


let tableau = [12, 8, 13, 5, 6, 9, 19, 27, 2];
console.log("Tableau trié : " + triinser(tableau));
