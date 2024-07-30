// In this we learn about the variable, const and let.
let a =45;
let b= "Akash";
let c= null
let d=undefined
{
     let b= 'this'   
    console.log(b)
    // var is globally scoped while let and const are blocked scoped.
    // var can be updated and re-decleared within its scope.
    // let can be updated but not re-decleared.
    // const can neither be updated nor be re-decleared.
    // var variables are initilized with undefined whereas let and const variable are not initialized.
    // const must be initialized during declearation unlike let and var
    // NOTE: USE MOSTLY LET AND CONST .
}
console.log(b)