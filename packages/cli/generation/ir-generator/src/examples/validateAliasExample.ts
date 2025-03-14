import { FernWorkspace } from "@fern-api/workspace-loader";
import { RawSchemas } from "@fern-api/yaml-schema";
import { FernFileContext } from "../FernFileContext";
import { ExampleResolver } from "../resolvers/ExampleResolver";
import { TypeResolver } from "../resolvers/TypeResolver";
import { ExampleViolation } from "./exampleViolation";
import { validateTypeReferenceExample } from "./validateTypeReferenceExample";

export function validateAliasExample({
    rawAlias,
    example,
    file,
    typeResolver,
    exampleResolver,
    workspace,
    breadcrumbs
}: {
    rawAlias: string | RawSchemas.AliasSchema;
    example: RawSchemas.ExampleTypeValueSchema;
    file: FernFileContext;
    typeResolver: TypeResolver;
    exampleResolver: ExampleResolver;
    workspace: FernWorkspace;
    breadcrumbs: string[];
}): ExampleViolation[] {
    return validateTypeReferenceExample({
        rawTypeReference: typeof rawAlias === "string" ? rawAlias : rawAlias.type,
        example,
        file,
        typeResolver,
        exampleResolver,
        workspace,
        breadcrumbs
    });
}
