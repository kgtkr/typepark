import { ObjectAccessParam, ObjectAccessResult } from "./object-access";
import { assertType, TypeEq } from "./test";

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

assertType<TypeEq<ObjectAccessParam<number>, []>>();
assertType<TypeEq<ObjectAccessParam<Foo>, [] | ["foo"] | ["foo", "bar"] | ["foo", "bar", "baz"] | ["foo", "bar", "baz", "yay"] | ["foo", "x"]>>();

assertType<TypeEq<ObjectAccessResult<Foo, []>, Foo>>();
assertType<TypeEq<ObjectAccessResult<Foo, ["foo"]>, Foo["foo"]>>();
assertType<TypeEq<ObjectAccessResult<Foo, ["foo", "bar"]>, Foo["foo"]["bar"]>>();
