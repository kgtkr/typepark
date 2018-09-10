import { TypeEq, assertType, assertNotType } from "./test";

assertType<TypeEq<TypeEq<1, 1>, true>>();

assertType<TypeEq<TypeEq<{}, { x: 1 }>, false>>();
assertType<TypeEq<TypeEq<{ x: 1 }, {}>, false>>();

assertType<TypeEq<TypeEq<{ x: 1, y: 1 }, { x: 1 } & { y: 1 }>, true>>();

assertType<TypeEq<TypeEq<1, 2>, false>>();
assertType<TypeEq<TypeEq<2, 1>, false>>();

assertType<TypeEq<TypeEq<1 | 2, 1>, false>>();
assertType<TypeEq<TypeEq<1, 1 | 2>, false>>();

assertType<TypeEq<TypeEq<1, never>, false>>();
assertType<TypeEq<TypeEq<never, 1>, false>>();

assertType<TypeEq<TypeEq<never, never>, true>>();

assertType<TypeEq<TypeEq<1, any>, false>>();
assertType<TypeEq<TypeEq<any, 1>, false>>();

assertType<TypeEq<TypeEq<any, any>, true>>();

assertType<TypeEq<TypeEq<1, unknown>, false>>();
assertType<TypeEq<TypeEq<unknown, 1>, false>>();

assertType<TypeEq<TypeEq<unknown, unknown>, true>>();

assertNotType<false>();