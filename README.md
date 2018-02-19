## React Material-Design Example

...using [**react-md**][2] and [**IndexedDB**][1] (for some reason).

---

Ok, I couldn't find a good reason to have this project here. I suppose, this serves as convenient example for using [**react-md**][2].

* Involves basic CRUD operations (or usage example) for IndexedDB

* Built using custom Webpack config (so, yeah... Webpack is fun!)

---

### Live Demo

[**Here**][3] is the live demo (will automatically create a `Company` IndexedDB with `Customers` collection, and batch load some test data, as soon as you open this)!

---

### How to run?

* Install Node modules:

  `npm install`

* For development/live-server:

  `npm run dev`

* For production:

  `npm run build`

* For deploying production:

  `npm run deploy`

* For building and deploying production:

  `npm run build:deploy`

#### Deployment notes:

Project will be hosted on port `8080`. If you require port flexibility, feel free to integrate the module [**Portfinder**][4].

The prod-server is defined in [**buid/prod-server.js**][5].

[1]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[2]: https://react-md.mlaursen.com/
[3]: https://jaskaranbir.github.io/React-MD_IndexedDB_Example/
[4]: https://www.npmjs.com/package/portfinder
[5]: https://github.com/Jaskaranbir/React-MD_IndexedDB_Example/blob/master/build/prod-server.js
