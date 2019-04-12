import { Hyper } from "./hyper";
import { Tail, Repeat } from "./list";
import { Cast } from "./util";

export type Add<A extends number, B extends number>
  = A extends 0 ? B
  : B extends 0 ? A
  : Hyper<1, A, B>;

export type Mul<A extends number, B extends number>
  = A extends 0 ? 0
  : B extends 0 ? 0
  : Hyper<2, A, B>;

export type Pow<A extends number, B extends number>
  = B extends 0 ? 1
  : A extends 0 ? 0
  : Hyper<3, A, B>;

type _Sub<A extends any[], B extends any[]> = {
  0: A,
  1: _Sub<Tail<A>, Tail<B>>
}[B extends [] ? 0 : 1];

export type Sub<A extends number, B extends number>
  = _Sub<Repeat<any, A> extends infer X ? Cast<X, any[]> : never, Repeat<any, B> extends infer X ? Cast<X, any[]> : never> extends infer X ? Cast<X, any[]>["length"] : never;

export type Inc<X extends number> = Add<X, 1>;
export type Dec<X extends number> = Sub<X, 1>;