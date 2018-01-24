# React Native Boilerplate
Description:
> There it is yet another boilerplate.
> What's different about this one is that
> it combines redux with thunk and statefull navigation 
> with the react-navigation lib

### The challenge:

Create a boilerplate for rapidly prototyping future projects:
* Features the most popular state container for React - Redux
* Feature a project structure outline which does not need to be compormised later on
* Feature statefull navigation with the react-navigator
* Feature redux-thunk for async/lasy state change
* Feature react-native-elements for ui changes
* Feature react Async Storage

### Tech Needed:

* [react-native-elements] - https://github.com/react-native-training/react-native-elements
* [react-native-vetor-icons] - https://github.com/oblador/react-native-vector-icons
* [react-navigation] - https://github.com/react-navigation/react-navigation
* [react-redux] - https://github.com/reactjs/react-redux
* [redux-logger] - https://github.com/evgenyrodionov/redux-logger
* [redux-thunk] - https://github.com/gaearon/redux-thunk
* [redux] - https://github.com/reactjs/redux

### Introduction

The boilerplate follows classic patterns for combining actions/reducers/component and refering to the index for cleanliness. The redux Provider start the layout and is the imidiate parent of the App which is the imidiate parent of the AppNavigator(StackNavigator). In order to create navigation (according to https://reactnavigation.org/docs/guides/redux) we need to destroy the default navigator prop and take care that we allways pass the overiden one. This boilerplate does just that. Navigation state is handled by a reducer and only sub components(ones that are handle no clobal functionality) can be dumb.

Enjoy.
