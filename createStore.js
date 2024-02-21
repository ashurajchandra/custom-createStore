//Implementation of createStore 
function createStore(reducer, initialState){
    let state = initialState;
    const listeners = [] //store all the listeners that have subscribed to the store

    const getState = ()=>{
        return state;
    }

    const dispatch = (action)=>{
        //pass the action along with current state to reducer 
        // and update the state with latest value that will be returned by reducer
        state = reducer(state, action)
        // notify all the subscribed component
        listeners.forEach(listener=>listener())
    }
     
    //subscribe listener to the store, with state change all subscribed
    //listener will be notified
    const subscribe = (listener)=>{
         listeners.push(listener)      
         const unsubscribe =()=>{
                listeners.filter(listener=> listener != listener)
            }
            return unsubscribe
         
    }

    return {getState, dispatch, subscribe}
}


// Reducer function
function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }
  
  // Create a store
  const store = createStore(counterReducer, 0);
  
  // Subscribe to the store
  const unsubscribe = store.subscribe(() => {
    console.log('Current state:', store.getState());
  });
  
  // Dispatch actions
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'DECREMENT' });
  
  // Unsubscribe
  unsubscribe();
  