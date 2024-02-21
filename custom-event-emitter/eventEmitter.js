

function EventEmitter (){
    const events = new Map()

    function on (eventName, listener){
      if (!events.has(eventName)){
        events.set(eventName,[])
      }
      console.log("events",events)
      events.get(eventName).push(listener)
      console.log("events.get(eventName)",events.get(eventName))
    }

    function off(eventName, listener){
      if(!events.has(eventName)){
        return "event not exist"
      }
      const listeners = events.get(eventName) //get all the listener of eventname

      //find first listener from list
      const index = listeners.findIndex(ele=> ele==listener)
      if(index<0){
        return "please provide correct listener function"
      }

      listeners.splice(index,1)

    }

    function emit(eventName, ...args){
        if(!events.has(eventName)){
            return "event not registered"
          }
          events.get(eventName).forEach(event=>event(...args))
    }

    return {on, off, emit}
}

const emitter = new EventEmitter();
function addTwoNumbers(a, b) {
    console.log(`The sum is ${a + b}`);
  }
  emitter.on('foo', addTwoNumbers);
  emitter.emit('foo', 2, 5);
 
  
  emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
  emitter.emit('foo', 4, 5);

  
  emitter.off('foo', addTwoNumbers);
  emitter.emit('foo', -3, 9);