# micro-frontend-iframe

A example of micro-frontends using iframes.
- The first iframe uses Vanilla JS, and the domain is a catalog of products.
- The second iframe uses Vue as JS framework, and the domain is a cart of products.

We can send messages between iframes using [targetWindow.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).
This simple system uses a EventBus concept to unify these contract.
