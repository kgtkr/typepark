export type Cast<T, P, D extends P = P> = T extends P ? T : D;
