import { Zip, Tail, Head, Reverse, Cons, Last } from "./list";

type ShiftZip<T extends any[]> = Zip<T, Tail<T>>;

type Tuple2Fn<T> = T extends [infer A, infer B] ? (x: A) => B : never;

type _Pipe<T extends any[], R extends any[]=[]> = {
  0: Reverse<R>,
  1: _Pipe<Tail<T>, Cons<Tuple2Fn<Head<T>>, R>>
}[T extends [] ? 0 : 1];

type Pipe<T extends any[]> = _Pipe<Cast<ShiftZip<T>, any[], []>>;

type Cast<T, P, D> = T extends P ? T : D;

type PipeFunc<T extends [any, any, ...any[]]> = (...f: Cast<Pipe<T>, any[], []>) => ((x: Head<T>) => Last<T>);