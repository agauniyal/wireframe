# wireframe

**WIP** - minimal wireframing css-framework. Example index.html is given.

How to develop:

* clone the repo
* run `npm install`
* run `gulp`
* read the source files
* add styles to `lib/` directory and not inside `css/` or `min/`
* add corresponding html for styles introduced

![initial screenshot](https://cloud.githubusercontent.com/assets/7630575/15325956/cdb313d0-1c69-11e6-8275-fcb175c9df9f.png)

## using express to serve app

```sh
node index.js
```

### TODO

* setup nodemon to run app
* setup a [sass architecture](https://www.sitepoint.com/architecture-sass-project/)
* sass not compiling with express middleware
* setup routes for different wireframe examples

#### some example routes have been setup in index.js
* http://localhost:8888/viewport/mobile
* http://localhost:8888/viewport/phablet
* http://localhost:8888/viewport/tablet
* http://localhost:8888/viewport/desktop



