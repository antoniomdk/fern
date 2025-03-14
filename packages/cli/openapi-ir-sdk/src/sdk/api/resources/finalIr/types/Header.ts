/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export interface Header extends FernOpenapiIr.WithDescription, FernOpenapiIr.WithAvailability {
    name: string;
    schema: FernOpenapiIr.Schema;
    env: string | undefined;
    /** Populated by `x-fern-parameter-name` on a parameter object. */
    parameterNameOverride: string | undefined;
}
