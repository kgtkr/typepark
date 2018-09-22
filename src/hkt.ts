export interface HKT<A> { }
export type ToType<K extends keyof HKT<any>, A> = HKT<A>[K];

export interface HKT2<A, B> { }
export type ToType2<K extends keyof HKT2<any, any>, A, B> = HKT2<A, B>[K];

export interface HKT3<A, B, C> { }
export type ToType3<K extends keyof HKT3<any, any, any>, A, B, C> = HKT3<A, B, C>[K];