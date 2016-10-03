// Type definitions for through2 v 2.0.0
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



import stream = require('stream');

type TransformCallback = (err?: any, data?: any) => void;
type TransformFunction = (chunk: any, enc: string, callback: TransformCallback) => void;
type FlashCallback = (flushCallback: () => void) => void;

declare function through2(transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

declare function through2(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

declare namespace through2 {

    export function obj(transform?: TransformFunction, flush?: FlashCallback): NodeJS.ReadWriteStream;

    export function push(data: any): void;

}

export = through2;