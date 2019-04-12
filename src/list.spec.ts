import { assertType, TypeEq } from "./test";
import {
  Head,
  Tail,
  Last,
  Cons,
  Reverse,
  Concat,
  Zip,
  Take,
  Group,
  Drop,
  Flat,
  Repeat,
  Range
} from "./list";

assertType<TypeEq<Head<[1]>, 1>>();
assertType<TypeEq<Head<[1, 2, 3]>, 1>>();
assertType<TypeEq<Head<[1, 2, 3], null>, 1>>();
assertType<TypeEq<Head<[]>, never>>();
assertType<TypeEq<Head<[], null>, null>>();

assertType<TypeEq<Tail<[]>, []>>();
assertType<TypeEq<Tail<[1]>, []>>();
assertType<TypeEq<Tail<[1, 2, 3]>, [2, 3]>>();

assertType<TypeEq<Last<[1]>, 1>>();
assertType<TypeEq<Last<[1, 2, 3]>, 3>>();
assertType<TypeEq<Last<[1, 2, 3], null>, 3>>();
assertType<TypeEq<Last<[]>, never>>();
assertType<TypeEq<Last<[], null>, null>>();

assertType<TypeEq<Cons<1, []>, [1]>>();
assertType<TypeEq<Cons<1, [2, 3]>, [1, 2, 3]>>();

assertType<TypeEq<Reverse<[]>, []>>();
assertType<TypeEq<Reverse<[1]>, [1]>>();
assertType<TypeEq<Reverse<[1, 2, 3]>, [3, 2, 1]>>();

assertType<TypeEq<Concat<[], []>, []>>();
assertType<TypeEq<Concat<[], [1]>, [1]>>();
assertType<TypeEq<Concat<[1], []>, [1]>>();
assertType<TypeEq<Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>>();

assertType<TypeEq<Zip<[], []>, []>>();
assertType<TypeEq<Zip<[], [1]>, []>>();
assertType<TypeEq<Zip<[1], []>, []>>();
assertType<TypeEq<Zip<[1, 2], [4, 5]>, [[1, 4], [2, 5]]>>();
assertType<TypeEq<Zip<[1, 2, 3], [4, 5]>, [[1, 4], [2, 5]]>>();

assertType<TypeEq<Take<0, []>, []>>();
assertType<TypeEq<Take<0, [1]>, []>>();
assertType<TypeEq<Take<2, []>, []>>();
assertType<TypeEq<Take<2, [1, 2, 3]>, [1, 2]>>();
assertType<TypeEq<Take<3, [1, 2, 3]>, [1, 2, 3]>>();
assertType<TypeEq<Take<5, [1, 2, 3]>, [1, 2, 3]>>();

assertType<TypeEq<Group<2, []>, []>>();
assertType<TypeEq<Group<2, [1]>, [[1]]>>();
assertType<TypeEq<Group<2, [1, 2, 3, 4]>, [[1, 2], [3, 4]]>>();
assertType<TypeEq<Group<3, [1, 2, 3, 4]>, [[1, 2, 3], [4]]>>();

assertType<TypeEq<Drop<0, []>, []>>();
assertType<TypeEq<Drop<0, [1]>, [1]>>();
assertType<TypeEq<Drop<2, []>, []>>();
assertType<TypeEq<Drop<2, [1, 2, 3]>, [3]>>();
assertType<TypeEq<Drop<3, [1, 2, 3]>, []>>();
assertType<TypeEq<Drop<5, [1, 2, 3]>, []>>();

assertType<TypeEq<Flat<[]>, []>>();
assertType<TypeEq<Flat<[[]]>, []>>();
assertType<TypeEq<Flat<[[], [1]]>, [1]>>();
assertType<TypeEq<Flat<[[1], []]>, [1]>>();
assertType<TypeEq<Flat<[[1, 2, 3], [4, 5]]>, [1, 2, 3, 4, 5]>>();
assertType<TypeEq<Flat<[[1, 2], [3, 4]]>, [1, 2, 3, 4]>>();
assertType<TypeEq<Flat<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>();

assertType<TypeEq<Repeat<1, 0>, []>>();
assertType<TypeEq<Repeat<1, 1>, [1]>>();
assertType<TypeEq<Repeat<1, 5>, [1, 1, 1, 1, 1]>>();

assertType<TypeEq<Range<0, 0>, [0]>>();
assertType<TypeEq<Range<2, 5>, [2, 3, 4, 5]>>();