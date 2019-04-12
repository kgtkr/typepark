import { Tail, Repeat, Concat } from "./list";
import { Cast } from "./util";

type _Hyper<I extends any[], A extends any[], B extends any[]> = {
  0: Concat<A, B>,
  1: A,
  2: _Hyper<Tail<I>, A, _Hyper<I, A, Tail<B>> extends infer X ? Cast<X, any[]> : never>,
}[I extends [any] ? 0 : (B extends [any] ? 1 : 2)];

export type Hyper<I extends number, A extends number, B extends number>
  = _Hyper<Repeat<any, I> extends infer X ? Cast<X, any[]> : never, Repeat<any, A> extends infer X ? Cast<X, any[]> : never, Repeat<any, B> extends infer X ? Cast<X, any[]> : never> extends infer X ? Cast<X, any[]>["length"] : never;