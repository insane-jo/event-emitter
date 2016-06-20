let expect = require('chai').expect;
let EventEmitter = require('../index');

describe('Passing arguments', () => {
    "use strict";

    it('multiple arguments (3)', () => {
        let ee = new EventEmitter({
            emitDelay: 50
        });

        ee.on('test', function (param1 ,param2, param3) {
            expect(arguments.length).equal(3);
        });

        ee.emit('test', 1, 2, 3);
    });

});