// Type definitions for event-emitter-es6 1.1
// Project: https://github.com/insane-jo/event-emitter#readme
// Definitions by: Anton Strömkvist <https://github.com/ahstro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "event-emitter-es6" {
    interface Options {
        emitDelay?: number;
        strictMode?: boolean;
    }

    type Listener = (...args: any[]) => void;

    class EventEmitter<Type = string> {
        constructor(options?: Options);
        on(type: Type, listener: Listener): void;
        once(type: Type, listener: Listener): void;
        off(type: Type, listener?: Listener): void;
        emit(type: Type, ...eventArgs: any[]): void;
        emitSync(type: Type, ...eventArgs: any[]): void;
        destroy(): void;
    }

    export = EventEmitter;
}
