React Redux Todo App using redux-thunk<br/>
<br/>
<br/>
Redux is explained from three principles</br>
<br/>
-->Single source of truth<br/>
	A single state makes it easier to debug and introspect<br/>
	Enables to persist entire app's state in development which helps in faster development<br/>
	Undo/Redo becomes trivial to implement<br/>
-->State is read only<br/>
	This will make sure no views or the call network callbacks will change the state directly<br/>
	The only way to change the state is to emit an action and an object describing what happened<br/>
	All the actions fired will be executed one after the other so no subtle race conditions<br/>
-->Changes are made with pure functions<br/>
	We write reducers to specify how state is changed by actions<br/>
	Reducers are pure function which takes the previous state and return the next state<br/>
<br/>
To run the application<br/>
<br/>
1) Clone or download the application<br/>
2) cd react_redux_todo<br/>
3) npm install<br/>
4) npm run dev or webpack<br/>
5) Open the index.html from the browser<br/>
<br/>
<br/>
Documentation source taken http://redux.js.org<br/>
