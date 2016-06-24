# event-emitter-es6
 
A small event emitter library. Works in the browser and in Node. Can be used with es6 inheritance or as stand-alone lib.

Inspired by the [tiny-emitter package on npm](https://www.npmjs.com/package/tiny-emitter).

For more information you can see jsdoc info in `index.es6` file.

Very simply applies to express.

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

or apply via express

```javascript
var express = require('express');
var app = express();

<... your code here ...>

app.use( require('event-emitter-es6/router') );
```

```html
<script src="event-emitter-es6/event-emitter.min.js"></script>
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

### constructor([opts])

An option can be passed to constructor

* `opts` - settings object for create event emitter
* `opts.emitDelay` - delay in ms to emit event. If passed 0 - all events emits synchronously. By default = 10 
* `opts.strictMode` - when emit event with no listeners - fires error. By default = false

### destroy()

Completely destroys event emitter.

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

### emitSync(event[, ...arguments])

Trigger a named event immediate (even the emitter was created as async instance)

* `event` - the event name to emit
* `arguments...` - any number of arguments to pass to the event subscribers

## Build
 
Build (Browserifies, and minifies)

```
npm install
npm run build
```

## Test
 
Test

```
npm install
npm run test
```

## Change list

### Version 1.1.5

* destroy() method of class

### Version 1.1.4

* All code covered with tests