### Let's break down each part of this implementation:

- **`createStore`:** This is the main function responsible for creating a Redux-like store. It takes two arguments: `reducer` and `initialState`.

- **`state`:** This variable holds the current state of the store. It's initialized with the `initialState`.

- **`listeners`:** This array holds all the listeners that have subscribed to the store. When the state changes, all these listeners will be notified.

- **`getState`:** This function returns the current state of the store. It's a simple getter method.

- **`dispatch`:** This function is used to dispatch actions to the store. It takes an action object, passes it to the reducer along with the current state, and updates the store's state with the new state returned by the reducer. After updating the state, it notifies all the listeners by calling each listener function.

- **`subscribe`:** This function is used to subscribe a listener to the store. Whenever the state changes, all subscribed listeners will be notified. It adds the listener to the `listeners` array and returns a function to unsubscribe this listener. The returned unsubscribe function removes the listener from the `listeners` array.

- **Initialization:** Immediately after the store is created, a dummy action `{ type: '@@INIT' }` is dispatched. This is a convention in Redux to initialize the store's state.

- **Return value:** The `createStore` function returns an object containing `getState`, `dispatch`, and `subscribe` functions. These are the only ways to interact with the store.
