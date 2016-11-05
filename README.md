# Fibonacci Sequence

Code sample is written in Typescript and transpiled via webpack. 

## Setup

You must have nodejs in order to run this sample.

1. Install the required node modules 
    ```
    npm install
    ```
1. Transpile the typescript application.
    ```
    npm run webpack
    ```
    Output will go into the bin folder.

2. Run the application from the root folder. The first argument is the number untill which to compute the Fibonacci sequence.
    ```
    .\fib.cmd 25
    ```


There are 2 versions of Fibonacci.
1. Standard recursive
2. Reactive Extensions version (just for fun).