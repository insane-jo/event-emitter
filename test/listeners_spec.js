let expect = require('chai').expect;
let EventEmitter = require('../index');

describe('Listeners manipulations', () => {
    "use strict";

    it('Add listener', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        ee.on('test', function () {
            expect(1).equal(1);
        });

        ee.emit('test');
    });

    it('Remove listener', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue;

        function listener() {
            testValue = 'newVal';
        }

        ee.on('test', listener);

        ee.off('test', listener);

        ee.emit('test');

        expect(testValue).equal(void 0);
    });

    it('Remove all listeners', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue;

        function listener() {
            testValue = 'newVal';
        }

        ee.on('test', listener);

        ee.off('test');

        ee.emit('test');

        expect(testValue).equal(void 0);
    });

    it('Passing context to listener (this)', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testThisValue = {};

        function listener() {
            expect(this).equal(testThisValue);
        }

        ee.on('test', listener.bind(testThisValue));

        ee.emit('test');
    });

    it('Binded listeners can\'t be removed with prototype function', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue;

        function listener() {
            testValue = 'new-test-value';
        }

        let bindedFunction = listener.bind('test-this-value');

        ee.on('test', bindedFunction);
        ee.off('test', listener);

        ee.emit('test');

        expect(testValue).equal('new-test-value');
    });

    it('Binded listeners removes with proxied function', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue;

        function listener() {
            testValue = 'new-test-value';
        }

        let bindedFunction = listener.bind('test-this-value');

        ee.on('test', bindedFunction);
        ee.off('test', bindedFunction);

        ee.emit('test');

        expect(testValue).equal(void 0);
    });

    it('Once listeners fires only one time', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue = 0;

        function listener() {
            testValue++;
        }

        ee.once('test', listener);

        ee.emit('test');
        ee.emit('test');

        expect(testValue).equal(1);
    });

    it('Multiple listeners', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue = 0;

        ee.on('test', function () {
            testValue++;
        });

        ee.on('test', function () {
            testValue++;
        });

        ee.emit('test');

        expect(testValue).equal(2);
    });
    
    it('Multiple once listeners', () => {
        let ee = new EventEmitter({
            emitDelay: 0
        });

        let testValue = 0;

        ee.once('test', function () {
            testValue++;
        });

        ee.once('test', function () {
            testValue++;
        });

        ee.emit('test');
        ee.emit('test');

        expect(testValue).equal(2);
    });

});