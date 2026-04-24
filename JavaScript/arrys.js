const arr = [5, 2, 9, 1, 5, 6];
        for(let i=0;i<arr.length;i++)
        {
            console.log(arr[i]);
        }
const ar = [{name:"John",age:30},{name:"Jane",age:25}];
for(i=0;i<ar.length;i++)
{
    console.log(ar[i]);
}
const ar1 = {name:"John",age:30};
for(const key in ar1)
{
    console.log(key + ": " + ar1[key]);
}