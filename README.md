# MyPromise issue

I am trying to extend native Promises and change the signature of `then` sadly without success. The current version works with `reject` but there is no `catch` function when calling `then` because `then` doesn't return anything. If I return the promise inside of `then` the first test fails.
