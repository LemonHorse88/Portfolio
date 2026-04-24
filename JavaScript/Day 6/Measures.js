const arr=[10,30,25,24,64,63,64,12,39,45,67,89,90,100,120,150,97,76,];
let len=arr.length;
let sum=arr.reduce((acc,val)=>acc+val,0);
let mean=sum/len;
console.log("Mean is ",mean);
let median=arr.sort(function(a,b){
    return a-b;
});
if(len%2==0){
    median=(median[len/2]+median[len/2-1])/2;
}
else{
    median=median[Math.floor(len/2)];
}
console.log("Median is ",median);
