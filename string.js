// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str){
    console.log("Original String : " , str);
    console.log("Length" , str.length);
}
getLength("Hello Akash");

 // Or  
  let a = "Hello Akash";
  console.log(a.length);

// indexOf
function findIndexOf(str,target){
    console.log("Original String : ", str);
    console.log("IndexOf : ", str.indexOf(target));
    console.log("Last IndexOf : ", str.lastIndexOf(target));
}
findIndexOf("Hello Akash Akash Akash", "Akash");

// slice
function getSlice(str, start,end){
    console.log("Original String : ", str);
    console.log("After slice : ",str.slice(start, end))
}
getSlice("Hellooo Akash", 0, 5)

// OR
let b = "Akash Anuragi";
console.log(b.slice(0,4));


// substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 0, 5);
  
  // replace
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript");
  
  // split
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " ");
  
  // trim
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World ");
  
  // toUpperCase
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World");
  
  // toLowerCase
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World");


// parseInt 
console.log("parseInt :")
console.log(parseInt("434.3"))  
console.log(parseInt("434sd"))  
console.log(parseInt("434"))  


// parseFloat
console.log("parseFloat :")
console.log(parseFloat("434.3"))  
console.log(parseFloat("434sd"))  
console.log(parseFloat("434"))  