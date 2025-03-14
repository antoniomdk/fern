/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Service } from "./api/resources/service/client/Client";

export declare namespace SeedAuthEnvironmentVariablesClient {
    interface Options {
        environment: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the X-Another-Header header */
        xAnotherHeader: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Another-Header header */
        xAnotherHeader?: string;
    }
}

export class SeedAuthEnvironmentVariablesClient {
    constructor(protected readonly _options: SeedAuthEnvironmentVariablesClient.Options) {}

    protected _service: Service | undefined;

    public get service(): Service {
        return (this._service ??= new Service(this._options));
    }
}
