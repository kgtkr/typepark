import { And, Or, Xor, Not } from "./logical";
import { TypeEq, assertType } from "./test";

assertType<TypeEq<And<true, true>, true>>();
assertType<TypeEq<And<true, false>, false>>();
assertType<TypeEq<And<false, true>, false>>();
assertType<TypeEq<And<false, false>, false>>();
assertType<TypeEq<And<true, boolean>, boolean>>();
assertType<TypeEq<And<boolean, true>, boolean>>();
assertType<TypeEq<And<false, boolean>, false>>();
assertType<TypeEq<And<boolean, false>, false>>();
assertType<TypeEq<And<boolean, boolean>, boolean>>();

assertType<TypeEq<Or<true, true>, true>>();
assertType<TypeEq<Or<true, false>, true>>();
assertType<TypeEq<Or<false, true>, true>>();
assertType<TypeEq<Or<false, false>, false>>();
assertType<TypeEq<Or<true, boolean>, true>>();
assertType<TypeEq<Or<boolean, true>, true>>();
assertType<TypeEq<Or<false, boolean>, boolean>>();
assertType<TypeEq<Or<boolean, false>, boolean>>();
assertType<TypeEq<Or<boolean, boolean>, boolean>>();

assertType<TypeEq<Xor<true, true>, false>>();
assertType<TypeEq<Xor<true, false>, true>>();
assertType<TypeEq<Xor<false, true>, true>>();
assertType<TypeEq<Xor<false, false>, false>>();
assertType<TypeEq<Xor<true, boolean>, boolean>>();
assertType<TypeEq<Xor<boolean, true>, boolean>>();
assertType<TypeEq<Xor<false, boolean>, boolean>>();
assertType<TypeEq<Xor<boolean, false>, boolean>>();
assertType<TypeEq<Xor<boolean, boolean>, boolean>>();

assertType<TypeEq<Not<true>, false>>();
assertType<TypeEq<Not<false>, true>>();
assertType<TypeEq<Not<boolean>, boolean>>();