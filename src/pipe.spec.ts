import { TypeEq, assertType } from "./test";
import { Pipe, PipeParams, PipeResult } from "./pipe";

assertType<TypeEq<Pipe<[1, 2, 3, 4]>, (a: (x: 1) => 2, b: (x: 2) => 3, c: (x: 3) => 4) => ((x: 1) => 4)>>();
assertType<TypeEq<PipeParams<[1, 2, 3, 4]>, [(x: 1) => 2, (x: 2) => 3, (x: 3) => 4]>>();
assertType<TypeEq<PipeResult<[1, 2, 3, 4]>, (x: 1) => 4>>();
