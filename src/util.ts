export type Cast<T, P, D = P> = T extends P ? T : D;
