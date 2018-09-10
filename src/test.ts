import { And, Not, Or } from "./logical";

type IsExtends<A, B> = A extends B ? true : false;
type TypeEqNotUnion<A, B> = And<IsExtends<A, B>, IsExtends<B, A>>;
type ComparableType<T> = [T];
type TypeEqNotAny<A, B> = TypeEqNotUnion<ComparableType<A>, ComparableType<B>>;
type IsAny<T> = And<TypeEqNotAny<T, 1>, TypeEqNotAny<T, 2>>;
export type TypeEq<A, B> = Or<And<IsAny<A>, IsAny<B>>, And<And<Not<IsAny<A>>, Not<IsAny<B>>>, TypeEqNotAny<A, B>>>

export function assertType<_T extends true>() { }