let expect = require('chai').expect;
let EventEmitter = require('../index');

describe('strict mode', () => {
    "use strict";

    it('strict mode has error if no listeners', () => {
        let ee = new EventEmitter({
            emitDelay: 0,
            strictMode: true
        });

        let error;
        try {
            ee.emit('test');
        } catch(e) {
            error = e;
        }

        expect(error).to.not.equal(void 0);
    });

    it('strict mode hasn\'t errors if listeners specified', () => {
        let ee = new EventEmitter({
            emitDelay: 0,
            strictMode: true
        });

        let error;

        ee.on('test', () => {

        });

        try {
            ee.emit('test');
        } catch(e) {
            error = e;
        }

        expect(error).to.equal(void 0);
    });

});