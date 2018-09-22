import { ToType, ToType2, ToType3 } from "./hkt";
import { assertType, TypeEq } from "./test";

const sym = Symbol();

declare module "./hkt" {
  interface HKT<A> {
    [sym]: { a: A }
  }

  interface HKT2<A, B> {
    [sym]: { a: A, b: B }
  }

  interface HKT3<A, B, C> {
    [sym]: { a: A, b: B, c: C }
  }
}

assertType<TypeEq<ToType<typeof sym, 1>, { a: 1 }>>();
assertType<TypeEq<ToType2<typeof sym, 1, 2>, { a: 1, b: 2 }>>();
assertType<TypeEq<ToType3<typeof sym, 1, 2, 3>, { a: 1, b: 2, c: 3 }>>();