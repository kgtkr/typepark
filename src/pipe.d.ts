import { Zip, Tail, Head, Last } from "./list";
import { Cast } from "./util";
declare type ShiftZip<T extends any[]> = Zip<T, Tail<T>>;
declare type Tuple2Fn<T> = T extends [infer A, infer B] ? (x: A) => B : never;
declare type _Pipe<T extends any[]> = {
    [P in keyof T]: Tuple2Fn<T[P]>;
};
export declare type PipeParams<T extends [any, any, ...any[]]> = Cast<_Pipe<Cast<ShiftZip<T>, any[], []>>, any[], []>;
export declare type PipeResult<T extends [any, any, ...any[]]> = (x: Head<T>) => Last<T>;
export declare type Pipe<T extends [any, any, ...any[]]> = (...f: PipeParams<T>) => PipeResult<T>;
export {};
