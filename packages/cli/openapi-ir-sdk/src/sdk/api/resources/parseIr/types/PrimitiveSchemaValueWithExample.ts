/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export type PrimitiveSchemaValueWithExample =
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Int
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Int64
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint64
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Float
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Double
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.String
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Datetime
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Date_
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Base64
    | FernOpenapiIr.PrimitiveSchemaValueWithExample.Boolean;

export declare namespace PrimitiveSchemaValueWithExample {
    interface Int extends FernOpenapiIr.IntWithExample, _Utils {
        type: "int";
    }

    interface Int64 extends FernOpenapiIr.Int64WithExample, _Utils {
        type: "int64";
    }

    interface Uint extends FernOpenapiIr.UintWithExample, _Utils {
        type: "uint";
    }

    interface Uint64 extends FernOpenapiIr.Uint64WithExample, _Utils {
        type: "uint64";
    }

    interface Float extends FernOpenapiIr.FloatWithExample, _Utils {
        type: "float";
    }

    interface Double extends FernOpenapiIr.DoubleWithExample, _Utils {
        type: "double";
    }

    interface String extends FernOpenapiIr.StringSchemaWithExample, _Utils {
        type: "string";
    }

    interface Datetime extends FernOpenapiIr.DatetimeWithExample, _Utils {
        type: "datetime";
    }

    interface Date_ extends FernOpenapiIr.DateWithExample, _Utils {
        type: "date";
    }

    interface Base64 extends FernOpenapiIr.Base64WithExample, _Utils {
        type: "base64";
    }

    interface Boolean extends FernOpenapiIr.BooleanWithExample, _Utils {
        type: "boolean";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        int: (value: FernOpenapiIr.IntWithExample) => _Result;
        int64: (value: FernOpenapiIr.Int64WithExample) => _Result;
        uint: (value: FernOpenapiIr.UintWithExample) => _Result;
        uint64: (value: FernOpenapiIr.Uint64WithExample) => _Result;
        float: (value: FernOpenapiIr.FloatWithExample) => _Result;
        double: (value: FernOpenapiIr.DoubleWithExample) => _Result;
        string: (value: FernOpenapiIr.StringSchemaWithExample) => _Result;
        datetime: (value: FernOpenapiIr.DatetimeWithExample) => _Result;
        date: (value: FernOpenapiIr.DateWithExample) => _Result;
        base64: (value: FernOpenapiIr.Base64WithExample) => _Result;
        boolean: (value: FernOpenapiIr.BooleanWithExample) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const PrimitiveSchemaValueWithExample = {
    int: (value: FernOpenapiIr.IntWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Int => {
        return {
            ...value,
            type: "int",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Int,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    int64: (value: FernOpenapiIr.Int64WithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Int64 => {
        return {
            ...value,
            type: "int64",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Int64,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    uint: (value: FernOpenapiIr.UintWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint => {
        return {
            ...value,
            type: "uint",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    uint64: (value: FernOpenapiIr.Uint64WithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint64 => {
        return {
            ...value,
            type: "uint64",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Uint64,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    float: (value: FernOpenapiIr.FloatWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Float => {
        return {
            ...value,
            type: "float",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Float,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    double: (value: FernOpenapiIr.DoubleWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Double => {
        return {
            ...value,
            type: "double",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Double,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    string: (value: FernOpenapiIr.StringSchemaWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.String => {
        return {
            ...value,
            type: "string",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.String,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    datetime: (value: FernOpenapiIr.DatetimeWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Datetime => {
        return {
            ...value,
            type: "datetime",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Datetime,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    date: (value: FernOpenapiIr.DateWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Date_ => {
        return {
            ...value,
            type: "date",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Date_,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    base64: (value: FernOpenapiIr.Base64WithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Base64 => {
        return {
            ...value,
            type: "base64",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Base64,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    boolean: (value: FernOpenapiIr.BooleanWithExample): FernOpenapiIr.PrimitiveSchemaValueWithExample.Boolean => {
        return {
            ...value,
            type: "boolean",
            _visit: function <_Result>(
                this: FernOpenapiIr.PrimitiveSchemaValueWithExample.Boolean,
                visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
            ) {
                return FernOpenapiIr.PrimitiveSchemaValueWithExample._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.PrimitiveSchemaValueWithExample,
        visitor: FernOpenapiIr.PrimitiveSchemaValueWithExample._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "int":
                return visitor.int(value);
            case "int64":
                return visitor.int64(value);
            case "uint":
                return visitor.uint(value);
            case "uint64":
                return visitor.uint64(value);
            case "float":
                return visitor.float(value);
            case "double":
                return visitor.double(value);
            case "string":
                return visitor.string(value);
            case "datetime":
                return visitor.datetime(value);
            case "date":
                return visitor.date(value);
            case "base64":
                return visitor.base64(value);
            case "boolean":
                return visitor.boolean(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
