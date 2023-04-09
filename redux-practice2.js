import redux from 'redux'
import testMiddle from './testMiddleware.js'
import { applyMiddleware } from 'redux'
const rcbVsMi = (state = {total:0,wickets:0},action) => {
    if(action.type==="four") {
      return {
        total:state.total+4,
        wickets:state.wickets
      }
    }
    if(action.type==="Six") {
      return {
        total:state.total+6,
        wickets:state.wickets
      }
    }
    if(action.type==="out") {
      return {
        total:state.total,
        wickets:state.wickets+1
      }
    }
    if(action.type==="single") {
      return {
        total:state.total+1,
        wickets:state.wickets
        
      }
    }
    if(action.type==="double") {
      return {
        total:state.total+2,
        wickets:state.wickets
      }
    }
    if(action.type==="trible") {
      return {
        total:state.total+3,
        wickets:state.wickets
      }
    }
    return state;
}

const store = redux.createStore(rcbVsMi,applyMiddleware(testMiddle))

console.log('initial state',store.getState())//runs and wickets before start the match

const matchSubscribe = () => {
  console.log(store.getState())
}

store.subscribe(matchSubscribe)

store.dispatch({type:"Six"})
// store.dispatch({type:"Six"})
store.dispatch({type:"out"})

export default store;