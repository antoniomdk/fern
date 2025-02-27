/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const OAuthRefreshTokenRequestProperties: core.serialization.ObjectSchema<
    serializers.OAuthRefreshTokenRequestProperties.Raw,
    FernIr.OAuthRefreshTokenRequestProperties
> = core.serialization.objectWithoutOptionalProperties({
    refreshToken: core.serialization.lazyObject(async () => (await import("../../..")).RequestProperty),
});

export declare namespace OAuthRefreshTokenRequestProperties {
    interface Raw {
        refreshToken: serializers.RequestProperty.Raw;
    }
}
