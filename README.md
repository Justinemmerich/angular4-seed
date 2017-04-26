# angular4-seed

This is a Angular 4 seed project, featuring:
* [TypeScript](https://www.typescriptlang.org)
* [Sass](http://sass-lang.com)
* [Bootstrap](http://v4-alpha.getbootstrap.com)
* [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)
* [ngx-translate](https://github.com/ngx-translate)
* [webpack](https://webpack.github.io)
* [Karma](https://karma-runner.github.io)
* [Jasmine](http://jasmine.github.io)
* [Protractor](http://www.protractortest.org)

This seed follows the [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

## File Structure

```
angular4-seed/
 ├──config/                        * our configuration
 |   ├──helpers.js                 * helper functions for our configuration files
 |   ├──karma-shim.js            * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──protractor.conf.js         * protractor config for our end-to-end tests
 │   ├──webpack.dev.js             * our development webpack config
 │   ├──webpack.prod.js            * our production webpack config
 │   └──webpack.test.js            * our testing webpack config
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 │   │
 |   ├──index.html                 * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts               * our polyfills file
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 |   |   ├──app.module.ts          * a module declaraion
 |   |   ├──app.routing.ts         * a app routing component
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   └──assets/                    * static assets are served here
 │       ├──icon/                  * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js      * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt             * for search engines to crawl your website
 │       └──humans.txt             * for humans to know who the developers are
 │
 │
 ├──tslint.json                    * typescript lint config
 ├──typedoc.json                   * typescript documentation generator
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tsconfig.webpack.json          * config that webpack uses for typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──webpack.config.js              * webpack main configuration file

```


## How to use

### Install dependencies

```bash
npm install
```

### Run development server

Use the following command to start a local development server which will display the application at [http://localhost:3000](http://localhost:3000).

```bash
npm start
```

### Run Karma tests

The following command will run your unit tests with [Karma](https://karma-runner.github.io).

```bash
npm test
```

## Run End-to-End tests

The following command will run your e2e tests with [Protractor](http://www.protractortest.org).

```bash
npm run e2e
```

### Build for production

Build Production files in `dist` folder.

```bash
npm run build
```

### Clear production files

Remove `dist` folder & node_modules.
Run npm install after cleaning.

```bash
npm run clean
```

# License
[MIT](/LICENSE)
