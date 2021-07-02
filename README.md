# React Native Workshop

> This is the main repository for all the React Native related material

## System Requirements

Before starting please make sure that you have successfully installed the below dependencies on your development environment.

- [Node.js](https://nodejs.org/en/) - is a JavaScript runtime built on Chrome's V8 JavaScript engine. We will use the latest LTS version.
- [npm](https://www.npmjs.com/) - is the official Nodejs Package Manager (npm) which allows us to manage our dependencies and packages. It is automatically installed with nodejs, so you don't have to install it separately.
- [git](https://git-scm.com/) / [github account](https://github.com/) - is a version control system for source code and Github is a community site that allows easy creation and collaboration on git projects.

## Verifying installation

After installing node please verify that you have setup everything correctly by typing the below commands on your terminal:

- `node -v` ➡️ `v12.17.0` (any version >= 12 is fine, in my case the version is specifically v12.17.0)
- `npm -v` ➡️ `6.14.4` (any version >= 6 is fine, in my case the version is specifically 6.14.4)

## Code editor

Feel free to use any text editor / IDE you like. I personally recommend [VS Code](https://code.visualstudio.com/) since it is light-weight, has a tone of extensions / plugins and it is an industry standard. I'll be using VS Code with the below extensions:

- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Setting up the development environment

Throughout the workshop we are going to use [expo-cli](https://expo.io) in order to experiment with React Native. In order to install it we need to run:

```bash
$ npm install -g expo-cli
```

Now we are ready to create a simple React Native app by running:

```bash
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

You can read more about expo tools and services [here](https://docs.expo.io)

Expo CLI allows us to run our React Native app on a physical device without setting up a development environment. If you want to run your app on the iOS Simulator or an Android Virtual Device, please install Xcode or set up your Android development environment.

Once you've set these up, you can launch your app on an Android Virtual Device by running `npm run android`, or on the iOS Simulator by running `npm run ios` (macOS only).

### Xcode

The easiest way to install Xcode is via the Mac App Store. Installing [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

### Android Studio

Regarding android we need to download [Android Studio](https://developer.android.com/studio/index.html) which will install the latest Android SDK by default.

If you have already installed Android Studio on your system, make sure you have Android 10 SDK in particular.

You can read more details about setting up Xcode and Android Studio locally and troubleshooting in the [React Native official docs](https://reactnative.dev/docs/).
