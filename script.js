let n= parseInt(prompt("Enter a positive number : "))
const sumOfEvens = (n)=> {
    let sum = 0;
    for(let i=2;i<=n;i+=2){
        sum+=i}
    return sum;  
};
if (n>0){
let result = sumOfEvens(n);
  alert(`The sum of even numbers up to ${n} is ${result}.`);
  document.write(`The sum of even numbers up to ${n} is ${result}.`)

}

else {
    alert("Invalid number")
    document.write("Try Entering a positive number")
}
