// Question 1
let txt ="I am a js Devloper";
let txtarr =txt.split(' ');
// console.log(txtarr)
let reverse =txtarr.reverse();
// console.log(reverse); 


arr=[]
reverse.forEach(res)
    function res(item){
        if (reverse[item]=" "){
        arr.push(item);
    }
        else{
            reverse[item]++;
        }
    }

    // console.log(arr);

 let strg = arr.join(" ") ;
 console.log(strg);



//Second Question
function perimeter(a,b,c){
    return a+b+c;
}
console.log(perimeter(12,52,65))



// Third Question
function factorial(a){
    if (a==0){
        a=1
        }
    else{
        a=a*factorial(a-1)
    }
    return a;
};
console.log(factorial(5));

// Fourth question
arr=[0,0,0,0,1,1,1,1,1,1,1];
let count=0;
arr.forEach(function(i){
    if(i==0){
        i++;
    }
    else{
    count=count+1;
}

})
console.log(count);
// let total =0;
// let iter =function(arr,x){
//     let start =0 ,end=arr.length-1;
//     while (start<=end){
//         let mid=Math.floor((start+end)/2);
//         if (arr[mid]==x){
//          total = total+1;
//         }else if(arr[mid]<x){
//          start = mid+1;
//           total = total+1;
//         }else {
//             end=mid-1;
//           total = total+1;
//         }
//         return total;
//     }
// }
// let x=1;
// let a =iter(arr,x);
// console.log(a);