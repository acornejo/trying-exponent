# What you get out of the box with this package
- **[Exponent](https://getexponent.com) ([SDK](https://docs.getexponent.com/versions/v11.0.0/index.html)** and **[CLI](https://github.com/exponentjs/exp)**), a mobile app development tool that enables you to build high quality native iOS and Android applications using JavaScript and deploy them effortlessly.
- **[React Native](http://facebook.github.io/react-native/releases/0.36/)**, lets you build mobile apps using only JavaScript. It uses the same design as [React](https://facebook.github.io/react/), letting you compose a rich mobile UI from declarative components.
- **[Jest](https://facebook.github.io/jest/)**, a JavaScript testing framework to test all JavaScript code including React applications. Pre-configured to work with Exponent.
- **[Enzyme](https://github.com/airbnb/enzyme)**, a JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
- **[Flow](https://flowtype.org)**, adds static typing to JavaScript to improve developer productivity and code quality.
- **[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)**, a mostly reasonable approach to JavaScript.
- **[ESLint](http://eslint.org)**, provides a pluggable linting utility for JavaScript. Pre-configured to work with React and Airbnb JavaScript Style Guide.
- **[Babel](https://babeljs.io)**, a compiler for writing next generation JavaScript. Pre-configured to work with the [Stage 0 preset](https://babeljs.io/docs/plugins/preset-stage-0/) + [Decorators](https://github.com/wycats/javascript-decorators), Jest, Flow and ESLint.
- **[MobX](https://github.com/mobxjs/mobx)**, simple and scalable state management.

###But, why is MobX included?###
This is an opinionated suite, meaning that this is what I personally use when I start working on a fresh mobile application development project, I just clone this repository. You can easily remove any flavors that you wish not to have.

# Installation
[Download](https://github.com/sonaye/create-exponent-app/archive/master.zip) the repository and `npm install` or `yarn` in the root directory. Yarn can be used for a much faster delivery.

## Setup (if needed)
- [Homebrew](http://brew.sh), a package manager for macOS.
- [Node.js](https://nodejs.org), a server-side JavaScript environment based on V8 engine.
- [Yarn](https://yarnpkg.com) *(optional)*, a dependency manager.

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

`brew install node`

`brew install yarn`

## Working with [SublimeText](https://www.sublimetext.com)
Install the following packages through [Package Control](https://packagecontrol.io/installation):
- [Babel-sublime](https://github.com/babel/babel-sublime).
- [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3).
- [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint).
- [SublimeLinter-flow](https://github.com/SublimeLinter/SublimeLinter-flow).

# Usage
- `npm start` starts a local server for your app and run it in the simulator.
- `npm test` starts Jest as a test runner.
- `npm run build` builds a standalone IPA/APK for your project, signed and ready for store submission.
- `npm run lint` starts ESLint error checking.
- `npm run flow` starts Flow type checking.

## Getting started
- Update `package.json` with your project information.
- Update `exp.json` with your project information (detailed configuration [here](https://docs.getexponent.com/versions/v11.0.0/guides/configuration.html)).
- Start working on your app in `./src`.

### GUI
As alternative to the CLI, you can use the [XDE](https://docs.getexponent.com/versions/v11.0.0/introduction/xde-tour.html).

## Running on simulators
- [Xcode](https://developer.apple.com/xcode/), for IOS emulation.
- [GenyMotion](https://www.genymotion.com), for Android emulation.

## Running on mobile devices
- [The Exponent IOS client](https://itunes.com/apps/exponent).
- [The Exponent Android client](https://play.google.com/store/apps/details?id=host.exp.exponent).
- As a standalone app ([guide](https://docs.getexponent.com/versions/v11.0.0/guides/building-standalone-apps.html)).

### Additional SublimeText packages for a better workspace
*To be populated ..*

### Suggested React Native packages to utilize in Exponent
*To be populated ..*
