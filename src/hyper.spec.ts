import { assertType, TypeEq } from "./test";
import {
  Hyper
} from "./hyper";

assertType<TypeEq<Hyper<1, 1, 4>, 5>>();
assertType<TypeEq<Hyper<2, 5, 4>, 20>>();
assertType<TypeEq<Hyper<3, 2, 4>, 16>>();