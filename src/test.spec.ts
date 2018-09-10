import { TypeEq, assertType } from "./test";

assertType<TypeEq<TypeEq<{ x: number }, { x: number }>, true>>();
assertType<TypeEq<TypeEq<{ x: number, y: number }, { x: number }>, false>>();
assertType<TypeEq<TypeEq<{ x: number }, any>, false>>();
