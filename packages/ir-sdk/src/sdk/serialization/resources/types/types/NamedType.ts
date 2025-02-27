/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const NamedType: core.serialization.ObjectSchema<serializers.NamedType.Raw, FernIr.NamedType> =
    core.serialization.objectWithoutOptionalProperties({
        typeId: core.serialization.lazy(async () => (await import("../../..")).TypeId),
        fernFilepath: core.serialization.lazyObject(async () => (await import("../../..")).FernFilepath),
        name: core.serialization.lazyObject(async () => (await import("../../..")).Name),
        default: core.serialization.lazy(async () => (await import("../../..")).NamedTypeDefault).optional(),
        inline: core.serialization.boolean().optional(),
    });

export declare namespace NamedType {
    interface Raw {
        typeId: serializers.TypeId.Raw;
        fernFilepath: serializers.FernFilepath.Raw;
        name: serializers.Name.Raw;
        default?: serializers.NamedTypeDefault.Raw | null;
        inline?: boolean | null;
    }
}
