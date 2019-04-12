import { TypeEq, assertType } from "./test";
import { Add, Mul, Pow, Sub, Inc, Dec } from "./math";

assertType<TypeEq<Add<0, 0>, 0>>();
assertType<TypeEq<Add<0, 3>, 3>>();
assertType<TypeEq<Add<3, 0>, 3>>();
assertType<TypeEq<Add<3, 2>, 5>>();

assertType<TypeEq<Mul<0, 0>, 0>>();
assertType<TypeEq<Mul<0, 3>, 0>>();
assertType<TypeEq<Mul<3, 0>, 0>>();
assertType<TypeEq<Mul<3, 2>, 6>>();

assertType<TypeEq<Pow<0, 0>, 1>>();
assertType<TypeEq<Pow<0, 3>, 0>>();
assertType<TypeEq<Pow<3, 0>, 1>>();
assertType<TypeEq<Pow<3, 2>, 9>>();

assertType<TypeEq<Sub<0, 0>, 0>>();
assertType<TypeEq<Sub<3, 0>, 3>>();
assertType<TypeEq<Sub<3, 2>, 1>>();

assertType<TypeEq<Inc<0>, 1>>();
assertType<TypeEq<Inc<3>, 4>>();

assertType<TypeEq<Dec<1>, 0>>();
assertType<TypeEq<Dec<3>, 2>>();
