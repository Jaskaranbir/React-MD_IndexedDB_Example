## React Material-Design Example

...using [**react-md**][2] and [**IndexedDB**][1] (for some reason).

---

Ok, I couldn't find a good reason to have this project here. I suppose, this serves as convenient example for using [**react-md**][2].

* Involves basic CRUD operations (or usage example) for IndexedDB

* Built using custom Webpack config (so, yeah... Webpack is fun!)

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

Project will be hosted on port `8080`. If you require port flexibility, feel free to integrate the module [**Portfinder**][3].

The prod-server is defined in [**buid/prod-server.js**][4].

[1]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[2]: https://react-md.mlaursen.com/
[3]: https://www.npmjs.com/package/portfinder
[4]: https://github.com/Jaskaranbir/React-MD_IndexedDB_Example/blob/master/build/prod-server.js
