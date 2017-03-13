
# webcube-example

Boilerplate code and a demo for web app projects based on webcube.

> * [webcube](https://github.com/dexteryy/webcube): Webcube is a batch of continuously updated base code and configurations for modern static/isomorphic web app. It simplifies the integration with the latest cutting-edge JS technology and tools, automatically provides the modern software engineering environment, architecture, workflow and best practices. It also can lower the barrier of starting a new web app project.
> * webcube-cli: TODO

## Structure

- **configs/** - Project-defined configuration files and build scripts
  - `env.sample.config` - Project-defined template file for [env.config](custom.env.sample.config)
- **app/** - All source code for web app (shared between client-side and server-side), including JS, CSS and assets
  - **components/** - [Presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3o294zvoz)
  - **entries/** - Multiple entry points, see [details](#multiple-entry-points-optional)
    - _**example-app/**_ - An entry point
      - **containers/** - [Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3o294zvoz)
      - **decorators/** - [Higher-order Components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)
      - **reducers/** - [Redux Reducers](http://redux.js.org/docs/basics/Reducers.html)
      - **actions/** - [Flux Standard Action](https://www.npmjs.com/package/redux-actions)
      - **constants/**
      <!-- @TODO react-router v4 -->
      - **routes/** - [React Router](https://github.com/reactjs/react-router/)
      - **styles/** - CSS/SCSS/CSSInJS shared between container components
      - **tests/** - See [Testing](https://github.com/dexteryy/webcube#how-to-test-the-web-app) section
      - `index.js`
    - _**page2/**_ - See ['entry' generator](https://github.com/dexteryy/webcube#how-to-generate-new-code)
    - _**demo-page2/**_ - See [.gitignore][gitignore] and ['demo' generator](https://github.com/dexteryy/webcube#how-to-generate-new-code)
    - ...
  - **utils/**
  - **data/** - Shared data files
  - **assets/** - Shared images, fonts, audio, etc.
  - **styles/** - CSS/SCSS/CSSInJS shared between entry points
  - **containers/** - Shared [container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.3o294zvoz)
    - `DevTools.jsx`
  - ...
  - **middleware/** - [Redux middleware](http://redux.js.org/docs/advanced/Middleware.html) shared between entry points
- **staticweb/** - For static web deployment or testing
  - _**example-app/**_ - For entry point
    - `index.html`, `deploy.js`, `deploy.scss`
  - _**page2/**_ - See ['entry' generator](https://github.com/dexteryy/webcube#how-to-generate-new-code)
  - _**demo-page2/**_ - See [.gitignore][gitignore] and ['demo' generator](https://github.com/dexteryy/webcube#how-to-generate-new-code)
  - ...
- **server/** - [TODO] A thin backend layer for universal web app and graphql-like api
- **runtime/** - [TODO] For Electron or Cordova
- **build/**
  - **public/** - Generated by Gulp and Webpack, do not manually modify
- ...
- `index.js` - For single entry point, imported by other projects
- `package.json` - dependencies and npm scripts based on [webcube](https://github.com/dexteryy/webcube)
<!-- - `yarn.lock` - [yarn](https://yarnpkg.com)'s lockfile -->
- `env.config` - Project-defined configuration options for webcube and custom scripts. See [Getting Started](#getting-started)

## Getting Started

#### Step 1
First of all, you must create an `env.config` file in the root directory. [`configs/env.sample.config`][custom.env.sample.config] is a complete template file for `env.config`

```
cp ./configs/env.sample.config env.config
```

> NOTE: webcube's [`src/configs/env.sample.config`][env.sample.config] is a template file for project-defined [`configs/env.sample.config`][custom.env.sample.config]

#### Step 2

Install dependencies:

```bash
npm install
```

> NOTE: Yarn is not recommended

<!-- or

```bash
yarn
``` -->

For users living in China:

Use `cnpm install`

```bash
alias cnpm="npm --registry=https://registry.npm.taobao.org \
--cache=$HOME/.npm/.cache/cnpm \
--disturl=https://npm.taobao.org/dist \
--userconfig=$HOME/.cnpmrc"
```

Use mirrors:

```bash
export NODEJS_ORG_MIRROR="http://npm.taobao.org/mirrors/node"
export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
export PHANTOMJS_CDNURL="http://npm.taobao.org/mirrors/phantomjs"
export ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
export CHROMEDRIVER_CDNURL="http://npm.taobao.org/mirrors/chromedriver"
```

#### Step 3

Follow [webcube's document](https://github.com/dexteryy/webcube#how-to-build-the-web-app) to install / build / test / deploy / ...

## Other Conventions

#### Code Style

Similiar to [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

More detail:

* [`.eslintrc.yml`](https://github.com/dexteryy/webcube-example/blob/master/.eslintrc.yml)
* [`.flowconfig`](https://github.com/dexteryy/webcube-example/blob/master/.flowconfig)
* [`.stylelintrc`](https://github.com/dexteryy/webcube-example/blob/master/.stylelintrc)
* [`.csscomb.json`](https://github.com/dexteryy/webcube-example/blob/master/.csscomb.json)
* [`.htmlhintrc`](https://github.com/dexteryy/webcube-example/blob/master/.htmlhintrc)

#### Recommended Editor/IDE

* [Atom](atom.io/) + following plugins:
  * [language-babel](https://atom.io/packages/language-babel)
  * [linter](https://atom.io/packages/linter) + [linter-eslint](https://atom.io/packages/linter-eslint) + [linter-flow](https://atom.io/packages/linter-flow) + [linter-htmlhint](https://atom.io/packages/linter-htmlhint)
  * [editorconfig](https://atom.io/packages/editorconfig)
  * [toggle-quotes](https://atom.io/packages/toggle-quotes) + [vim-surround](https://atom.io/packages/vim-surround)
  * [auto-detect-indentation](https://atom.io/packages/auto-detect-indentation) + [resize-indent](https://atom.io/packages/resize-indent)
  * [atom-css-comb](https://atom.io/packages/atom-css-comb)

Recommended Settings for Atom (config.cson):

```json
"linter":
  ignoreVCSIgnoredFiles: false
  lintOnFly: false
"linter-stylelint":
  disableWhenNoConfig: true
"language-babel":
  transpileOnSave: false
"atom-css-comb":
  projectConfigs: ".csscomb"
  readyMadeConfigs: "csscomb"
"whitespace":
  ignoreWhitespaceOnCurrentLine: false
"trailing-spaces":
  enableForCursorLines: true
```

#### Git Hooks

* pre-commit: `npm run lint`
* pre-push: `npm run build`

#### Committing Changes with [Commitizen](https://www.npmjs.com/package/commitizen)

> NOTE: Need `npm install commitizen -g`

```
git add .
git cz
```

[package.json]: https://github.com/dexteryy/webcube-example/blob/master/package.json
[env.sample.config]: https://github.com/dexteryy/webcube/blob/master/src/configs/env.sample.config
[custom.env.sample.config]: https://github.com/dexteryy/webcube-example/blob/master/configs/env.sample.config
[webpack.config]: https://github.com/dexteryy/webcube/blob/master/src/configs/webpack.default.config.babel.js
[custom.webpack.config]: https://github.com/dexteryy/webcube-example/blob/master/configs/webpack.config.babel.js
[gulpfile]: https://github.com/dexteryy/webcube/blob/master/src/configs/gulpfile.babel.js
[custom.gulpfile]: https://github.com/dexteryy/webcube-example/blob/master/configs/gulpfile.babel.js
[plopfile]: https://github.com/dexteryy/webcube/blob/master/src/configs/plopfile.babel.js
[custom.plopfile]: https://github.com/dexteryy/webcube-example/blob/master/configs/plopfile.babel.js
[karmaconf]: https://github.com/dexteryy/webcube/blob/master/src/configs/karma.conf.babel.js
[gitignore]: https://github.com/dexteryy/webcube-example/blob/master/.gitignore
