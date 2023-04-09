// this is how we can access the redux store from the outside the react component
import store from "./redux-practice2.js";

console.log('from taken store',store.getState())

store.dispatch({type:"Six"})
store.dispatch({type:"out"})