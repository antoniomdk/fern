/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedApi from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace User {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class User {
    constructor(protected readonly _options: User.Options) {}

    /**
     * @param {SeedApi.CreateRequest} request
     * @param {User.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.user.create()
     */
    public async create(
        request: SeedApi.CreateRequest = {},
        requestOptions?: User.RequestOptions
    ): Promise<SeedApi.CreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "users"),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/grpc-proto",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/grpc-proto/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedApiTimeoutError();
            case "unknown":
                throw new errors.SeedApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
