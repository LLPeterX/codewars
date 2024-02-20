/* 
5kyu - Memoized Fibonacci

*/

function fibonacci(n, cache = new Map()) {
  if (cache.has(n)) return cache.get(n);
  if (n < 1) return 0;
  if (n < 3) return 1;
  cache.set(n, fibonacci(n - 1, cache) + fibonacci(n - 2, cache));
  return cache.get(n);
}

// best

/* 
fibonacci=(a,b={})=>b[a]?b[a]:b[a]=a<2?a:fibonacci(--a,b)+fibonacci(--a,b)
*/

