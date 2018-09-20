import { Concat, Tail, Head } from "./list";
import { Cast } from "./util";

type X = CursorEnum<Foo>;

type GetIn<T> = <K extends CursorEnum<T>>(path: K) => CursorResult<T, Cast<K, any[]>>;

type Y = CursorResult<Foo, ["foo", "x"]>;

type CursorEnum<T, R extends any[]=[], Key=keyof T> = {
  0: Key extends infer P ? R | CursorEnum<T[Cast<P, keyof T>], Cast<Concat<R, [P]>, any[]>> : never
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
