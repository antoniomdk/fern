/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export interface ObjectTypeDeclaration {
    /** A list of other types to inherit from */
    extends: FernIr.DeclaredTypeName[];
    properties: FernIr.ObjectProperty[];
    /** A list of properties that all the parents of this object have. */
    extendedProperties: FernIr.ObjectProperty[] | undefined;
    /** Whether to allow extra properties on the object. */
    extraProperties: boolean;
}
