import { ExampleType, FernFilepath, Type, TypeDeclaration } from "@fern-api/ir-sdk";
import { FernWorkspace } from "@fern-api/workspace-loader";
import { isRawObjectDefinition, RawSchemas, visitRawTypeDeclaration } from "@fern-api/yaml-schema";
import { FernFileContext } from "../../FernFileContext";
import { AudienceId } from "../../filtered-ir/ids";
import { ExampleResolver } from "../../resolvers/ExampleResolver";
import { TypeResolver } from "../../resolvers/TypeResolver";
import { getPropertiesByAudience } from "../../utils/getPropertiesByAudience";
import { parseTypeName } from "../../utils/parseTypeName";
import { convertDeclaration } from "../convertDeclaration";
import { convertAliasTypeDeclaration } from "./convertAliasTypeDeclaration";
import { convertDiscriminatedUnionTypeDeclaration } from "./convertDiscriminatedUnionTypeDeclaration";
import { convertEnumTypeDeclaration } from "./convertEnumTypeDeclaration";
import { convertTypeExample } from "./convertExampleType";
import { convertObjectTypeDeclaration } from "./convertObjectTypeDeclaration";
import { convertUndiscriminatedUnionTypeDeclaration } from "./convertUndiscriminatedUnionTypeDeclaration";
import { getReferencedTypesFromRawDeclaration } from "./getReferencedTypesFromRawDeclaration";

export interface TypeDeclarationWithDescendantFilepaths {
    typeDeclaration: TypeDeclaration;
    descendantFilepaths: Set<FernFilepath>;
    propertiesByAudience: Record<AudienceId, Set<string>>;
}

export async function convertTypeDeclaration({
    typeName,
    typeDeclaration,
    file,
    typeResolver,
    exampleResolver,
    workspace
}: {
    typeName: string;
    typeDeclaration: RawSchemas.TypeDeclarationSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
    exampleResolver: ExampleResolver;
    workspace: FernWorkspace;
}): Promise<TypeDeclarationWithDescendantFilepaths> {
    const declaration = await convertDeclaration(typeDeclaration);
    const declaredTypeName = parseTypeName({
        typeName,
        file
    });
    const referencedTypes = getReferencedTypesFromRawDeclaration({ typeDeclaration, file, typeResolver });

    let propertiesByAudience: Record<AudienceId, Set<string>> = {};
    if (isRawObjectDefinition(typeDeclaration)) {
        propertiesByAudience = getPropertiesByAudience(typeDeclaration.properties ?? {});
    }

    return {
        propertiesByAudience,
        typeDeclaration: {
            ...declaration,
            name: declaredTypeName,
            shape: await convertType({ typeDeclaration, file, typeResolver }),
            referencedTypes: new Set(referencedTypes.map((referencedType) => referencedType.typeId)),
            encoding: undefined,
            source: undefined,
            userProvidedExamples:
                typeof typeDeclaration !== "string" && typeDeclaration.examples != null
                    ? typeDeclaration.examples.map(
                          (example): ExampleType => ({
                              name: example.name != null ? file.casingsGenerator.generateName(example.name) : undefined,
                              docs: example.docs,
                              jsonExample: exampleResolver.resolveAllReferencesInExampleOrThrow({
                                  example: example.value,
                                  file
                              }).resolvedExample,
                              shape: convertTypeExample({
                                  typeName: declaredTypeName,
                                  example: example.value,
                                  typeResolver,
                                  exampleResolver,
                                  typeDeclaration,
                                  fileContainingType: file,
                                  fileContainingExample: file,
                                  workspace
                              })
                          })
                      )
                    : [],
            autogeneratedExamples: []
        },
        descendantFilepaths: new Set(referencedTypes.map((referencedType) => referencedType.fernFilepath))
    };
}

export async function convertType({
    typeDeclaration,
    file,
    typeResolver
}: {
    typeDeclaration: RawSchemas.TypeDeclarationSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
}): Promise<Type> {
    return await visitRawTypeDeclaration<Promise<Type> | Type>(typeDeclaration, {
        alias: (alias) => convertAliasTypeDeclaration({ alias, file, typeResolver }),
        object: (object) => convertObjectTypeDeclaration({ object, file }),
        discriminatedUnion: (union) => convertDiscriminatedUnionTypeDeclaration({ union, file, typeResolver }),
        undiscriminatedUnion: (union) => convertUndiscriminatedUnionTypeDeclaration({ union, file }),
        enum: async (enum_) => Type.enum(await convertEnumTypeDeclaration({ _enum: enum_, file }))
    });
}
