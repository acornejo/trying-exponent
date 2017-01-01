# What you get out of the box with this package
- **[React Native](http://facebook.github.io/react-native/releases/0.37/) (0.37)**, lets you build mobile apps using only JavaScript. It uses the same design as [React](https://facebook.github.io/react/), letting you compose a rich mobile UI from declarative components.
- **[Exponent](https://getexponent.com)** ([SDK 12](https://docs.getexponent.com/versions/v12.0.0/index.html)), a mobile app development tool that enables you to build high quality native iOS and Android applications using JavaScript and deploy them effortlessly.
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
[Download](https://github.com/sonaye/create-exponent-app/archive/master.zip) the repository and `yarn` or `npm install` in the root directory. Yarn can be used for a much faster delivery.

## Setup (if needed)
- [Homebrew](http://brew.sh), a package manager for macOS.
- [Node.js](https://nodejs.org), a server-side JavaScript environment based on V8 engine.
- [Watchman](https://facebook.github.io/watchman/), a file watching service.
- [Yarn](https://yarnpkg.com) *(recommended)*, a dependency manager.
- [Exponent CLI](https://github.com/exponentjs/exp), a command line interface for Exponent.

All of these packages are to be installed globally.

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

`brew install node watchman yarn`

`npm install exp -g`

# Update
This repository is maintained and updated regularly every two weeks.

# Usage
### Initialize (one-time)
- `exp signup` if you don't have an Exponent account.
- `exp login` sign in to your Exponent account.

### Develop
- `yarn start` starts a local server for your app and run it in the IOS simulator.
- `yarn run a` starts a local server for your app and run it in the Android simulator. Modify your simulator ID in `package.json`, which you can retrieve through `VBoxManage list vms`. You might need to run `yarn run a` again once the Android simuator has fully launched. Also, `yarn start` should be executed first before using this command.
- `exp stop --all` stops all running Exponent services.

### Test
- `yarn test` starts Jest as a test runner.
- `yarn run lint` starts ESLint error checking.
- `yarn run flow` starts Flow type checking.

### Deploy
- `exp build:ios` builds a standalone IPA for your project, signed and ready for store submission.
- `exp build:android` builds a standalone APK for your project, signed and ready for store submission.
- `exp publish` publishes your app to the Exponent platform.

#### Common Commands
- `yarn run outdated`, checks and lists dependencies updates, for your project "and" globally.
- `yarn run brew`, checks and installs Brew, Node, Watchman and Yarn updates.
- `yarn run clean`, kills all DS_Stores.

## Getting started
- Go through the installation/setup process.
- Update `package.json` with your project information (detailed configuration [here](https://docs.npmjs.com/files/package.json)).
- Update `exp.json` with your project information (detailed configuration [here](https://docs.getexponent.com/versions/v12.0.0/guides/configuration.html)).
- Start working on your app in `./src`.
- Run your app with `yarn start`.

### Quickly
Run `yarn && yarn start`.

## GUI
As an alternative to the Exponent CLI, you can use the [XDE](https://docs.getexponent.com/versions/v12.0.0/introduction/xde-tour.html). The XDE doesn't provide access to the `test`, `exp build`, `lint` and `flow` commands.

### Running on simulators
- [Xcode](https://developer.apple.com/xcode/), for IOS emulation.
- [GenyMotion](https://www.genymotion.com), for Android emulation.

#### GenyMotion configuration
- [Guide](https://docs.getexponent.com/versions/v12.0.0/guides/genymotion.html).
- Make sure that you have the line `export PATH=$PATH:/Applications/Genymotion.app/Contents/MacOS/tools/` in your `~/.bash_profile`.
- [Installing Google Play services](https://www.genymotion.com/help/desktop/faq/#google-play-services).

### Running on mobile devices
- [The Exponent IOS client](https://itunes.com/apps/exponent).
- [The Exponent Android client](https://play.google.com/store/apps/details?id=host.exp.exponent).
- As a standalone app ([guide](https://docs.getexponent.com/versions/v12.0.0/guides/building-standalone-apps.html)).

### Demo App
Try it [here](https://exp.host/@sonaye/create-exponent-app).

![Screenshot](https://i.imgur.com/DD4MI1I.png)

```javascript
class Store {
  @observable list: Array<string> = [
    'Hello World!',
    'Hello React Native!',
    'Hello Exponent!'
  ];

  @action add = (item: string) => this.list.push(item);
}
```

```javascript
@observer
class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ color: '#1b73b4', fontSize: 24 }}>
          My Hellos ({store.list.length})
        </Text>

        {store.list.map((item, key) => (
          <Text key={`item-${key}`} style={{ color: '#444' }}>
            {item}
          </Text>
        ))}

        <TouchableOpacity onPress={() => store.add('Hello!')}>
          <Text style={{ color: '#1b73b4' }}>
            sayHello()
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
```

## Working with [SublimeText](https://www.sublimetext.com)
Install the following packages through [Package Control](https://packagecontrol.io/installation):
- [Babel-sublime](https://github.com/babel/babel-sublime)
- [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter3)
- [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)
- [SublimeLinter-flow](https://github.com/SublimeLinter/SublimeLinter-flow)

### Additional SublimeText packages for a better workspace
- [All Autocomplete](https://packagecontrol.io/packages/All%20Autocomplete)
- [Color Highlighter](https://packagecontrol.io/packages/Color%20Highlighter)
- [GitGutter](https://packagecontrol.io/packages/GitGutter)
- [SublimeCodeIntel](https://packagecontrol.io/packages/SublimeCodeIntel)
- [Terminal](https://packagecontrol.io/packages/Terminal)
- [Boxy Theme](https://packagecontrol.io/packages/Boxy%20Theme)
- [zz File Icons](https://packagecontrol.io/packages/zz%20File%20Icons)

## Working with [Atom](https://atom.io)
Install the following packages:
- [language-babel](https://atom.io/packages/language-babel)
- [Linter](https://atom.io/packages/linter)
- [linter-eslint](https://atom.io/packages/linter-eslint)
- [linter-flow](https://atom.io/packages/linter-flow)

### Additional Atom packages for a better workspace
- [atom-ternjs](https://atom.io/packages/atom-ternjs)
- [file-icons](https://atom.io/packages/file-icons)
- [Git-Plus](https://atom.io/packages/git-plus)
- [Highlight Line](https://atom.io/packages/highlight-line)
- [Highlight Selected](https://atom.io/packages/highlight-selected)
- [Open Recent](https://atom.io/packages/open-recent)
- [Pigments](https://atom.io/packages/pigments)
- [PlatformIO IDE Terminal](https://atom.io/packages/platformio-ide-terminal)
- [simple-drag-drop-text](https://atom.io/packages/simple-drag-drop-text)
- [Sort Lines](https://atom.io/packages/sort-lines)
- [Monokai theme](https://atom.io/themes/monokai)
