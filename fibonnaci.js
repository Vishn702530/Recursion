//fibonnaci iteration

// function fibonnaci(num){
//     let arr=[0,1];
//     for(i=2;i<=num;i++){
//         arr[i]=arr[i-1]+arr[i-2];
//     }
//     console.log(arr);
// }
// fibonnaci(8);



//fibonnaci recursion

function fibonnacii(num) {
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return [0, 1];
    } else {
        let arr = fibonnacii(num - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}
console.log(fibonnacii(4));
