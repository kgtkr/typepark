import { Zip, Tail, Head, Reverse, Cons, Last } from "./list";
import { Cast } from "./util";

type ShiftZip<T extends any[]> = Zip<T, Tail<T>>;

type Tuple2Fn<T> = T extends [infer A, infer B] ? (x: A) => B : never;

type _Pipe<T extends any[]> = { [P in keyof T]: Tuple2Fn<T[P]> }

export type PipeParams<T extends [any, any, ...any[]]> = Cast<_Pipe<Cast<ShiftZip<T>, any[], []>>, any[], []>;
export type PipeResult<T extends [any, any, ...any[]]> = (x: Head<T>) => Last<T>;
export type Pipe<T extends [any, any, ...any[]]> = (...f: PipeParams<T>) => PipeResult<T>;