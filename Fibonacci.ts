import * as _ from "lodash";


export class Fibonacci {

    public compute(size: number): number {
        let result = this.fn(size);
        return result;

    }

    public sequence(size: number): number[] {
        return _
            .range(0,size)
            .map( i => this.fn(i));

    }

    private fn(n: number): number {
        if (n == 0)
            return 0
        if (n <= 2)
            return 1;
        return this.fn(n - 1) + this.fn(n - 2);
    }
}