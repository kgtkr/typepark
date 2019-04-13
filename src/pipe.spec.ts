import { TypeEq, assertType } from "./test";
import { PipeParams, PipeResult } from "./pipe";

assertType<TypeEq<PipeParams<[1, 2, 3, 4]>, [(x: 1) => 2, (x: 2) => 3, (x: 3) => 4]>>();
assertType<TypeEq<PipeResult<[1, 2, 3, 4]>, (x: 1) => 4>>();
