/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const ProtobufFile: core.serialization.ObjectSchema<serializers.ProtobufFile.Raw, FernIr.ProtobufFile> =
    core.serialization.objectWithoutOptionalProperties({
        filepath: core.serialization.string(),
        packageName: core.serialization.string().optional(),
        options: core.serialization.lazyObject(async () => (await import("../../..")).ProtobufFileOptions).optional(),
    });

export declare namespace ProtobufFile {
    interface Raw {
        filepath: string;
        packageName?: string | null;
        options?: serializers.ProtobufFileOptions.Raw | null;
    }
}
