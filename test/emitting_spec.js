let expect = require('chai').expect;
let EventEmitter = require('../index');

describe('Emitting', () => {
    "use strict";

    it('async (emitDelay === 50)', () => {
        let ee = new EventEmitter({
            emitDelay: 50
        });

        let testValue;

        ee.on('test', function () {
            expect(testValue).equal('test-new-val');
        });

        ee.emit('test');

        testValue = 'test-new-val';
    });

    it('sync (emitDelay === 0)', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue;

        ee.on('test', function () {
            expect(testValue).equal(void 0);
        });

        ee.emit('test');

        testValue = 'test-new-val';
    });

    it('emitSync in async (emitDelay === 50) fires synchronously', () => {
        let ee = new EventEmitter({
            emitDelay: 50
        });

        let testValue;

        ee.on('test', function () {
            expect(testValue).equal(void 0);
        });

        ee.emitSync('test');

        testValue = 'test-new-val';
    });

    it('destroy() removes all event listeners ', () => {
        let ee = new EventEmitter({
            emitDelay: 50
        });

        let testValue;

        ee.on('test', function () {
            expect(testValue).equal(void 0);
        });
        
        ee.destroy();

        ee.emitSync('test');

        testValue = 'test-new-val';
    });

});