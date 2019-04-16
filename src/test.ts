export type TypeEq<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

export function assertType<_T extends true>() { }
export function assertNotType<_T extends false>() { }