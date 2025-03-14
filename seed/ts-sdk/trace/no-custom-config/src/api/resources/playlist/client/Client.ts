/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Playlist {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-Random-Header header */
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
    }
}

export class Playlist {
    constructor(protected readonly _options: Playlist.Options = {}) {}

    /**
     * Create a new playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.CreatePlaylistRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.createPlaylist(1, {
     *         datetime: new Date("2024-01-15T09:30:00.000Z"),
     *         optionalDatetime: new Date("2024-01-15T09:30:00.000Z"),
     *         body: {
     *             name: "string",
     *             problems: ["string"]
     *         }
     *     })
     */
    public async createPlaylist(
        serviceParam: number,
        request: SeedTrace.CreatePlaylistRequest,
        requestOptions?: Playlist.RequestOptions
    ): Promise<SeedTrace.Playlist> {
        const { datetime, optionalDatetime, body: _body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["datetime"] = datetime.toISOString();
        if (optionalDatetime != null) {
            _queryParams["optionalDatetime"] = optionalDatetime.toISOString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/create`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.PlaylistCreateRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Playlist.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns the user's playlists
     *
     * @param {number} serviceParam
     * @param {SeedTrace.GetPlaylistsRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.getPlaylists(1, {
     *         limit: 1,
     *         otherField: "string",
     *         multiLineDocs: "string",
     *         optionalMultipleField: "string",
     *         multipleField: "string"
     *     })
     */
    public async getPlaylists(
        serviceParam: number,
        request: SeedTrace.GetPlaylistsRequest,
        requestOptions?: Playlist.RequestOptions
    ): Promise<SeedTrace.Playlist[]> {
        const { limit, otherField, multiLineDocs, optionalMultipleField, multipleField } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        _queryParams["otherField"] = otherField;
        _queryParams["multiLineDocs"] = multiLineDocs;
        if (optionalMultipleField != null) {
            if (Array.isArray(optionalMultipleField)) {
                _queryParams["optionalMultipleField"] = optionalMultipleField.map((item) => item);
            } else {
                _queryParams["optionalMultipleField"] = optionalMultipleField;
            }
        }

        if (Array.isArray(multipleField)) {
            _queryParams["multipleField"] = multipleField.map((item) => item);
        } else {
            _queryParams["multipleField"] = multipleField;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/all`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.playlist.getPlaylists.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SeedTrace.PlaylistIdNotFoundError}
     * @throws {@link SeedTrace.UnauthorizedError}
     *
     * @example
     *     await client.playlist.getPlaylist(1, "string")
     */
    public async getPlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        requestOptions?: Playlist.RequestOptions
    ): Promise<SeedTrace.Playlist> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(
                    serializers.PlaylistId.jsonOrThrow(playlistId)
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Playlist.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "PlaylistIdNotFoundError":
                    throw new SeedTrace.PlaylistIdNotFoundError(
                        serializers.PlaylistIdNotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "UnauthorizedError":
                    throw new SeedTrace.UnauthorizedError();
                default:
                    throw new errors.SeedTraceError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {SeedTrace.UpdatePlaylistRequest} request
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link SeedTrace.PlaylistIdNotFoundError}
     *
     * @example
     *     await client.playlist.updatePlaylist(1, "string", {
     *         name: "string",
     *         problems: ["string"]
     *     })
     */
    public async updatePlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        request?: SeedTrace.UpdatePlaylistRequest,
        requestOptions?: Playlist.RequestOptions
    ): Promise<SeedTrace.Playlist | undefined> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(
                    serializers.PlaylistId.jsonOrThrow(playlistId)
                )}`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body:
                request != null
                    ? serializers.playlist.updatePlaylist.Request.jsonOrThrow(request, {
                          unrecognizedObjectKeys: "strip",
                      })
                    : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.playlist.updatePlaylist.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "PlaylistIdNotFoundError":
                    throw new SeedTrace.PlaylistIdNotFoundError(
                        serializers.PlaylistIdNotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.SeedTraceError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Deletes a playlist
     *
     * @param {number} serviceParam
     * @param {SeedTrace.PlaylistId} playlistId
     * @param {Playlist.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.playlist.deletePlaylist(1, "string")
     */
    public async deletePlaylist(
        serviceParam: number,
        playlistId: SeedTrace.PlaylistId,
        requestOptions?: Playlist.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/v2/playlist/${encodeURIComponent(serviceParam)}/${encodeURIComponent(
                    serializers.PlaylistId.jsonOrThrow(playlistId)
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "User-Agent": "@fern/trace/0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
