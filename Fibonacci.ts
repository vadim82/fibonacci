import * as _ from "lodash";
import { Observable, Observer } from "rxjs";

export class Fibonacci {

    public compute(size: number): number {
        let result = this.fn(size);
        return result;

    }

    public sequence(size: number): number[] {
        return _
            .range(0, size)
            .map(i => this.fn(i));

    }


    private fn(n: number): number {
        if (n == 0)
            return 0
        if (n <= 2)
            return 1;
        return this.fn(n - 1) + this.fn(n - 2);
    }

    public observableSequence(n:number): Observable<number> {
        return Observable.create((observer : Observer<number>) => {
            let fn1 = 0;
            let fn2 = 0;
            for(let iter = 0; iter < n; iter++){
                let current = fn2;
                fn2 = fn1 == 0 ? 1 : fn1;
                fn1 = (fn1 == 0 ? 1 : fn1) + current;
                observer.next(current);
            }
            observer.complete();
        })
    }
}