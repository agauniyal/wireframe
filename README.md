# wireframe

**WIP** - minimal wireframing css-framework. Example index.html is given.

## Setup

* Clone the repository
* Run `npm install`
* Run `npm start`. This runs the project locally and watches for all file changes, including Sass
* Add styles to `src/sass/` directory and not inside `public/`, or add them on a React component level
* Add components to `src/components`

![initial screenshot](https://cloud.githubusercontent.com/assets/7630575/15325956/cdb313d0-1c69-11e6-8275-fcb175c9df9f.png)

## NPM Commands
### Serve & Watch
```sh
npm start
```

### Build production-ready bundle in `/build`
```sh
npm run build
```

## TODO

* setup a [sass architecture](https://www.sitepoint.com/architecture-sass-project/)
* setup routes for different wireframe examples

## some example routes have been setup in index.js
* [http://localhost:8888/viewport/mobile](http://localhost:8888/viewport/mobile)
* [http://localhost:8888/viewport/phablet](http://localhost:8888/viewport/phablet)
* [http://localhost:8888/viewport/tablet](http://localhost:8888/viewport/tablet)
* [http://localhost:8888/viewport/desktop](http://localhost:8888/viewport/desktop)
