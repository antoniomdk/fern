/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const ReferencedSchema: core.serialization.ObjectSchema<
    serializers.ReferencedSchema.Raw,
    FernOpenapiIr.ReferencedSchema
> = core.serialization
    .objectWithoutOptionalProperties({
        schema: core.serialization.lazy(async () => (await import("../../..")).SchemaId),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithDescription))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithSdkGroupName))
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).WithAvailability));

export declare namespace ReferencedSchema {
    interface Raw
        extends serializers.WithDescription.Raw,
            serializers.WithName.Raw,
            serializers.WithSdkGroupName.Raw,
            serializers.WithAvailability.Raw {
        schema: serializers.SchemaId.Raw;
    }
}
