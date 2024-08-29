// let arr1 = [4 ,1, 2, 5, 8]
// let arr2 = [34 ,13, 32, 35, 38]
// let arr3 = [14 ,11, 21, 15, 18]
// arr1[0] =56;
// console.log(arr,typeof arr)
// // console.log(arr[3])
// console.log("tostring is give the all element of an array :" ,arr.toString())
// console.log("push synatax insert the element :",arr.push())
// console.log("pop syntax delete the last element of an array :",arr.pop())
// console.log("concat marge the multiple arrays :",arr1.concat(arr2,arr3))

let obj ={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
  const element = obj[key];
  console.log(key,obj)
    }
}