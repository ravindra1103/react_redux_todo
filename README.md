React Redux Todo App


Redux is explained from three principles

-->Single source of truth
	A single state makes it easier to debug and introspect
	Enables to persist entire app's state in development which helps in faster development
	Undo/Redo becomes trivial to implement
-->State is read only
	This will make sure no views or the call network callbacks will change the state directly
	The only way to change the state is to emit an action and an object describing what happened
	All the actions fired will be executed one after the other so no subtle race conditions
-->Changes are made with pure functions
	We write reducers to specify how state is changed by actions
	Reducers are pure function which takes the previous state and return the next state

To run the application

1) Clone or download the application
2) cd react_redux_todo
3) npm install
4) npm run dev or webpack
5) Open the index.html from the browser


Documentation source taken http://redux.js.org
