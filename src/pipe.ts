import { Zip, Tail, Head, Last } from "./list";
import { Cast } from "./util";
import { assertType, TypeEq } from "./test";

type ShiftZip<T extends any[]> = Zip<T, Tail<T>>;

assertType<TypeEq<ShiftZip<[1, 2, 3]>, [[1, 2], [2, 3]]>>();


type Tuple2Fn<T> = T extends [infer A, infer B] ? (x: A) => B : never;

assertType<TypeEq<Tuple2Fn<[1, 2]>, (x: 1) => 2>>();

type _Pipe<T extends any[]> = { [P in keyof T]: Tuple2Fn<T[P]> };

assertType<TypeEq<_Pipe<[[1, 2], [2, 3]]>, [(x: 1) => 2, (x: 2) => 3]>>();

export type PipeParams<T extends [any, any, ...any[]]> = Cast<_Pipe<ShiftZip<T> extends infer X ? Cast<X, any[], []> : never>, any[], []>;
export type PipeResult<T extends [any, any, ...any[]]> = (x: Head<T>) => Last<T>;
export type Pipe<T extends [any, any, ...any[]]> = (...f: PipeParams<T>) => PipeResult<T>;

assertType<TypeEq<Pipe<[1, 2, 3, 4]>, (a: (x: 1) => 2, b: (x: 2) => 3, c: (x: 3) => 4) => ((x: 1) => 4)>>();
