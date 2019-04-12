# Hyper Operation

## What is Hyper Operation
[Wikipedia](https://en.wikipedia.org/wiki/Hyperoperation)

```
hyper(1,a,b)=a+b
hyper(2,a,b)=a*b
hyper(3,a,b)=a^b
︙
```

```
hyper(1,a,b)=a+b
hyper(_,a,1)=a
hyper(i,a,1)=hyper(i-1,a,hyper(i,a,b-1))
```

## Example

```ts
Hyper<1, 1, 4>//5
Hyper<2, 5, 4>//20
Hyper<3, 2, 4>//16
Hyper<1, 100, 200>//Error(number is too large)
```

## Explanation
Internally treats numbers as tuple.
example:

```
1=[any]
2=[any,any]
3=[any,any,any]
︙
```

### Mutual conversion

```ts
// number to tuple:
Repeat<any, N>
```

```ts
// tuple to number
T["length"]
```

### It is possible to do this

```ts
// A+B
Concat<A,B>
```

```ts
// X-1
Tail<X>
```