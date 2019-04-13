import { Concat, Tail, Head } from "./list";
import { Cast } from "./util";

export type ObjectAccessFunctionExample = <T, K extends ObjectAccessParam<T>>(path: K) => ObjectAccessResult<T, Cast<K, any[]>>;

export type ObjectAccessParam<T> = _ObjectAccessParam<T> extends infer X ? Cast<X, any[]> : never;

type _ObjectAccessParam<T, R extends any[] = [], Key = keyof T> = {
  0: R | (Key extends infer P ? _ObjectAccessParam<T[Cast<P, keyof T>], Concat<R, [P]> extends infer X ? Cast<X, any[]> : never> : never),
  1: R
}[T extends object ? 0 : 1];

export type ObjectAccessResult<T, C extends any[]> = {
  0: T,
  1: ObjectAccessResult<T[Cast<Head<C>, keyof T>], Tail<C>>
}[C extends [] ? 0 : 1];
