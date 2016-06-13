# event-emitter-es6
 
A small event emitter library. Works in the browser and in Node. Can be used with es6 inheritance or as stand-alone lib.

Inspired by the [https://www.npmjs.com/package/tiny-emitter](tiny-emitter package on npm)

## Install

Node

```
npm install event-emitter-es6 --save
```
 
Browser

```
bower install event-emitter-es6 --save
```
 
```html
<script src="bower_components/event-emitter-es6/dist/event-emitter.min.js"></script>
``` 

## Usage

Node

```javascript
var EventEmitter = require('event-emitter-es6');
var emitter = new Emitter();

emitter.on('some-event', function listener1 (param1, param2, param3) {
  console.info('listener1', param1, param2, param3);
});
emitter.on('some-event', function listener2 (param1, param2, param3) {
  console.info('listener2', param1, param2, param3);
});
emitter.emit('some-event', 'some-val1', 'some-val2', 'some-val3');
```

Browser

```js
var emitter = new EventEmitter();

emitter.on('some-event', function listener1 (param1, param2, param3) {
  console.info('listener1', param1, param2, param3);
});

emitter.on('some-event', function listener2 (param1, param2, param3) {
  console.info('listener2', param1, param2, param3);
});

emitter.emit('some-event', 'some-val1', 'some-val2', 'some-val3');
```

ES6

```js
class SomeEmittingClass extends EventEmitter {
  constructor() {
    super();
  }
  
  fireExampleEvent() {
    this.emit('some-event', 'some-val1', 'some-val2', 'some-val3');
  }
}

var emittingInstance = new SomeEmittingClass();

emittingInstance.on('some-event', function listener1 (param1, param2, param3) {
  console.info('listener1', param1, param2, param3);
});
emittingInstance.on('some-event', function listener2 (param1, param2, param3) {
  console.info('listener2', param1, param2, param3);
});
emittingInstance.fireExampleEvent();
```


## Instance Methods

### on(event, callback)

Subscribe to an event

* `event` - the name of the event to subscribe to
* `callback` - the function to call when event is emitted (for transfer context use __bind__ method of Function.prototype) 

### once(event, callback)

Subscribe to an event only **once**

* `event` - the name of the event to subscribe to
* `callback` - the function to call when event is emitted (for transfer context use __bind__ method of Function.prototype)

### off(event[, callback])

Unsubscribe from an event or all events. If no callback is provided, it unsubscribes you from all events.

* `event` - the name of the event to unsubscribe from
* `callback` - the function used when binding to the event. If you used function with __bind__ method - must be passed the same function, that was getted after binding.

### emit(event[, ...arguments])

Trigger a named event

* `event` - the event name to emit
* `arguments...` - any number of arguments to pass to the event subscribers

## Build
 
Build (Browserifies, and minifies)

```
npm install
npm run build
```