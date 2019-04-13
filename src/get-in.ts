import { Concat, Tail, Head } from "./list";
import { Cast } from "./util";

type GetIn<T> = <K extends _CursorEnum<T>>(path: K) => CursorResult<T, Cast<K, any[]>>;

type Test = _CursorEnum<Foo>;
type Y = CursorResult<Foo, ["foo", "x"]>;

type _CursorEnum<T> = CursorEnum<T> extends infer X ? Cast<X, any[]> : never;

type CursorEnum<T, R extends any[] = [], Key = keyof T> = {
  0: R | (Key extends infer P ? CursorEnum<T[Cast<P, keyof T>], Concat<R, [P]> extends infer X ? Cast<X, any[]> : X> : never),
  1: R
}[T extends object ? 0 : 1];

type CursorResult<T, C extends any[]> = {
  0: T,
  1: CursorResult<T[Cast<Head<C>, keyof T>], Tail<C>>
}[C extends [] ? 0 : 1];

interface Foo {
  foo: {
    bar: {
      baz: {
        yay: number
      }
    },
    x: string
  }
}
