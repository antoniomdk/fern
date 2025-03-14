/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface Endpoint extends FernOpenapiIr.WithDescription, FernOpenapiIr.WithAvailability {
    authed: boolean;
    internal: boolean | undefined;
    idempotent: boolean | undefined;
    method: FernOpenapiIr.HttpMethod;
    audiences: string[];
    /**
     * This string includes templated path parameters.
     * For example, `/users/{userId}` is a valid value.
     */
    path: string;
    summary: string | undefined;
    operationId: string | undefined;
    tags: FernOpenapiIr.TagId[];
    pathParameters: FernOpenapiIr.PathParameter[];
    queryParameters: FernOpenapiIr.QueryParameter[];
    headers: FernOpenapiIr.Header[];
    sdkName: FernOpenapiIr.EndpointSdkName | undefined;
    /** Populated as ${operationId}Request */
    generatedRequestName: string;
    /** Populated by `x-request-name` on a path object. */
    requestNameOverride: string | undefined;
    request: FernOpenapiIr.Request | undefined;
    response: FernOpenapiIr.Response | undefined;
    /**
     * Expected error status codes for this endpoint, and their corresponding schema and examples.
     * SDK generators will only read the StatusCodes. Docs generators will read the HttpError schema.
     */
    errors: Record<FernOpenapiIr.StatusCode, FernOpenapiIr.HttpError>;
    server: FernOpenapiIr.Server[];
    examples: FernOpenapiIr.EndpointExample[];
    pagination: FernOpenapiIr.Pagination | undefined;
}
