import { TypeEq, assertType } from "./test";
import { StringToNumber } from "./string-to-number";

assertType<TypeEq<StringToNumber<"0">, 0>>();
assertType<TypeEq<StringToNumber<"10">, 10>>();
