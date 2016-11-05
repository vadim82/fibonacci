import { Fibonacci } from "./Fibonacci";

if (process.argv.length !== 3){
    console.error("Usage: node index.js 10");
    process.exit();
}
let fib = new Fibonacci();
let n = parseInt(process.argv[2]);
let sequence = fib.sequence(n);
console.log(`Sequence to ${n} is \r\n [${sequence}]`);