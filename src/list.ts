export type Head<T extends any[], D=never> = T extends [infer X, ...any[]] ? X : D;
export type Tail<T extends any[]> = ((...x: T) => void) extends ((x: any, ...xs: infer XS) => void) ? XS : never
export type Last<T extends any[]> = {
  0: never,
  1: Head<T>,
  2: Last<Tail<T>>,
}[T extends [] ? 0 : T extends [any] ? 1 : 2];
export type Cons<X, XS extends any[]> = ((h: X, ...args: XS) => void) extends ((...args: infer R) => void) ? R : [];
export type Reverse<L extends any[], X extends any[]=[]> = {
  1: X, 0: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 1 : 0]
export type Concat<A extends any[], B extends any[], R extends any[]=[]> = {
  0: Reverse<R>,
  1: Concat<Tail<A>, B, Cons<Head<A>, R>>
  2: Concat<A, Tail<B>, Cons<Head<B>, R>>
}[A extends [] ? B extends [] ? 0 : 2 : 1];
export type Zip<A extends any[], B extends any[], R extends any[]=[]> = {
  0: Reverse<R>,
  1: Zip<Tail<A>, Tail<B>, Cons<[Head<A>, Head<B>], R>>
}[A extends [] ? 0 : B extends [] ? 0 : 1];
export type Take<N extends number, T extends any[], R extends any[]=[]> = {
  0: Reverse<R>,
  1: Take<N, Tail<T>, Cons<Head<T>, R>>
}[T extends [] ? 0 : R["length"] extends N ? 0 : 1];
export type Group<N extends number, T extends any[], R1 extends any[]=[], R2 extends any[]=[]> = {
  0: Reverse<R2>,
  1: Group<N, T, [], Cons<Reverse<R1>, R2>>,
  2: Group<N, Tail<T>, Cons<Head<T>, R1>, R2>
}[T extends [] ? R1 extends [] ? 0 : 1 : (R1["length"] extends N ? 1 : 2)];
export type Drop<N extends number, T extends any[], R extends any[]=[]> = {
  0: T,
  1: Drop<N, Tail<T>, Cons<Head<T>, R>>
}[T extends [] ? 0 : R["length"] extends N ? 0 : 1];
export type Flat<T extends any[][], R1 extends any[]=[], R2 extends any[]=[]> = {
  0: Reverse<R2>,
  1: Flat<Tail<T>, Head<T, []>, R2>,
  2: Flat<T, Tail<R1>, Cons<Head<R1>, R2>>
}[T extends [] ? R1 extends [] ? 0 : 2 : (R1 extends [] ? 1 : 2)];
export type Repeat<T, N extends number, R extends any[]=[]> = {
  0: R,
  1: Repeat<T, N, Cons<T, R>>
}[R["length"] extends N ? 0 : 1];
