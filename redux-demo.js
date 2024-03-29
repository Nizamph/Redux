const redux = require('redux')



const counterReducer = (state = { counter: 0 }, action) => {
 if(action.type === "decrement") {
    return {
      counter: state.counter - 5
    }
  }

  if(action.type === "increment") {
    return {
      counter: state.counter + 5
    }
  }
  
  if(action.type === "incrementBy2") {
    return {
      counter: state.counter + 2
    }
  }

  if(action.type === "decrementBy2") {
    return {
      counter: state.counter -2   
    }
  }
 return state;
}



const store = redux.createStore(counterReducer)

console.log(store.getState())//gives initial state
const counterSubscriber = () => {
 const latestState =  store.getState();
  console.log(latestState)
}; 




store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })

store.dispatch({ type: "decrement" })
store.dispatch({ type: "abcdef" })
store.dispatch({ type: "decrementBy2"})
store.dispatch({ type: "incrementBy2"})