# wireframe

**WIP** - minimal wireframing css-framework. Example index.html is given.

How to develop:

* Clone the repository.
* Run `npm install`
* Run `npm run watch` or `npm start`, the watch script uses nodemon to restart `index.js` when files are changed.
* Preview at [http://localhost:8888/](http://localhost:8888/)
* Add styles to `sass/` directory and not inside `public/`
* Add corresponding html to `server/views/` for styles introduced

![initial screenshot](https://cloud.githubusercontent.com/assets/7630575/15325956/cdb313d0-1c69-11e6-8275-fcb175c9df9f.png)

## Using express to serve app
### Serve
```sh
npm start
```
### Watch
```sh
npm run watch
```

## Using gulp
### Default
```sh
gulp
```

### Sass
```sh
gulp sass
```

## TODO

* setup a [sass architecture](https://www.sitepoint.com/architecture-sass-project/)
* setup routes for different wireframe examples

## some example routes have been setup in index.js
* [http://localhost:8888/viewport/mobile](http://localhost:8888/viewport/mobile)
* [http://localhost:8888/viewport/phablet](http://localhost:8888/viewport/phablet)
* [http://localhost:8888/viewport/tablet](http://localhost:8888/viewport/tablet)
* [http://localhost:8888/viewport/desktop](http://localhost:8888/viewport/desktop)
