// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here

}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
let sum = 0;
for (let i = 1; i <= n; i++) {
  let square = i * i;
  console.log(square);
  sum += square;
}
console.log("Final output is: " + sum);
