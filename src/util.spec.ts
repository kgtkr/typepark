import { TypeEq, assertType } from "./test";
import { Cast } from "./util";

assertType<TypeEq<Cast<1, number, 2>, 1>>();
assertType<TypeEq<Cast<1, string>, string>>();
assertType<TypeEq<Cast<1, string, "a">, "a">>();
