/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const PrimitiveSchemaValueWithExample: core.serialization.Schema<
    serializers.PrimitiveSchemaValueWithExample.Raw,
    FernOpenapiIr.PrimitiveSchemaValueWithExample
> = core.serialization
    .union("type", {
        int: core.serialization.lazyObject(async () => (await import("../../..")).IntWithExample),
        int64: core.serialization.lazyObject(async () => (await import("../../..")).Int64WithExample),
        uint: core.serialization.lazyObject(async () => (await import("../../..")).UintWithExample),
        uint64: core.serialization.lazyObject(async () => (await import("../../..")).Uint64WithExample),
        float: core.serialization.lazyObject(async () => (await import("../../..")).FloatWithExample),
        double: core.serialization.lazyObject(async () => (await import("../../..")).DoubleWithExample),
        string: core.serialization.lazyObject(async () => (await import("../../..")).StringSchemaWithExample),
        datetime: core.serialization.lazyObject(async () => (await import("../../..")).DatetimeWithExample),
        date: core.serialization.lazyObject(async () => (await import("../../..")).DateWithExample),
        base64: core.serialization.lazyObject(async () => (await import("../../..")).Base64WithExample),
        boolean: core.serialization.lazyObject(async () => (await import("../../..")).BooleanWithExample),
    })
    .transform<FernOpenapiIr.PrimitiveSchemaValueWithExample>({
        transform: (value) => {
            switch (value.type) {
                case "int":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.int(value);
                case "int64":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.int64(value);
                case "uint":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.uint(value);
                case "uint64":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.uint64(value);
                case "float":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.float(value);
                case "double":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.double(value);
                case "string":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.string(value);
                case "datetime":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.datetime(value);
                case "date":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.date(value);
                case "base64":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.base64(value);
                case "boolean":
                    return FernOpenapiIr.PrimitiveSchemaValueWithExample.boolean(value);
                default:
                    return value as FernOpenapiIr.PrimitiveSchemaValueWithExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace PrimitiveSchemaValueWithExample {
    type Raw =
        | PrimitiveSchemaValueWithExample.Int
        | PrimitiveSchemaValueWithExample.Int64
        | PrimitiveSchemaValueWithExample.Uint
        | PrimitiveSchemaValueWithExample.Uint64
        | PrimitiveSchemaValueWithExample.Float
        | PrimitiveSchemaValueWithExample.Double
        | PrimitiveSchemaValueWithExample.String
        | PrimitiveSchemaValueWithExample.Datetime
        | PrimitiveSchemaValueWithExample.Date
        | PrimitiveSchemaValueWithExample.Base64
        | PrimitiveSchemaValueWithExample.Boolean;

    interface Int extends serializers.IntWithExample.Raw {
        type: "int";
    }

    interface Int64 extends serializers.Int64WithExample.Raw {
        type: "int64";
    }

    interface Uint extends serializers.UintWithExample.Raw {
        type: "uint";
    }

    interface Uint64 extends serializers.Uint64WithExample.Raw {
        type: "uint64";
    }

    interface Float extends serializers.FloatWithExample.Raw {
        type: "float";
    }

    interface Double extends serializers.DoubleWithExample.Raw {
        type: "double";
    }

    interface String extends serializers.StringSchemaWithExample.Raw {
        type: "string";
    }

    interface Datetime extends serializers.DatetimeWithExample.Raw {
        type: "datetime";
    }

    interface Date extends serializers.DateWithExample.Raw {
        type: "date";
    }

    interface Base64 extends serializers.Base64WithExample.Raw {
        type: "base64";
    }

    interface Boolean extends serializers.BooleanWithExample.Raw {
        type: "boolean";
    }
}
