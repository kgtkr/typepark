export interface HKT<A> {
}
export declare type ToType<K extends keyof HKT<any>, A> = HKT<A>[K];
export interface HKT2<A, B> {
}
export declare type ToType2<K extends keyof HKT2<any, any>, A, B> = HKT2<A, B>[K];
export interface HKT3<A, B, C> {
}
export declare type ToType3<K extends keyof HKT3<any, any, any>, A, B, C> = HKT3<A, B, C>[K];
