/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const OffsetPagination: core.serialization.ObjectSchema<
    serializers.OffsetPagination.Raw,
    FernOpenapiIr.OffsetPagination
> = core.serialization.objectWithoutOptionalProperties({
    offset: core.serialization.string(),
    results: core.serialization.string(),
    step: core.serialization.string().optional(),
});

export declare namespace OffsetPagination {
    interface Raw {
        offset: string;
        results: string;
        step?: string | null;
    }
}
