type ComparableType<T> = [T];
export type TypeEq<A, B> = ComparableType<A> extends ComparableType<B> ? ComparableType<B> extends ComparableType<A> ? true : false : false;