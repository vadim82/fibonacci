import { Fibonacci } from "./Fibonacci";
let colors = require("colors");

if (process.argv.length !== 3) {
    console.error("Usage: node index.js 10");
    process.exit();
}
let fib = new Fibonacci();
let n = parseInt(process.argv[2]);


console.log("Example running traditional Fibonacci sequence (recursion)")
let sequence = fib.sequence(n);
console.log(`Sequence to '${n}' is: `,colors.green(sequence));
console.log("\r\n\r\n");
console.log("Example running reactive/obserable Fibonacci sequence (rxjs)");
let sequence2 :number[] = [];
fib
    .observableSequence(n)
    .subscribe((n) => { 
        sequence2.push(n);
    }, 
    (error) => {}, 
    () => {
        console.log("the sequence is: ", colors.rainbow(sequence2.join(",")));
    } );