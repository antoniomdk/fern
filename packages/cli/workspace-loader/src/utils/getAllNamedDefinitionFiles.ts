import { entries } from "@fern-api/core-utils";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { DefinitionFileSchema } from "@fern-api/yaml-schema";
import { mapKeys } from "lodash-es";
import { ParsedFernFile } from "../types/FernFile";
import { FernDefinition } from "../types/Workspace";

export declare namespace getAllNamedDefinitionFiles {
    interface Opts {
        defaultURL?: string;
    }
}

export function getAllNamedDefinitionFiles(
    definition: FernDefinition,
    opts: getAllNamedDefinitionFiles.Opts = {}
): Record<RelativeFilePath, ParsedFernFile<DefinitionFileSchema>> {
    return {
        ...Object.fromEntries(
            entries(definition.namedDefinitionFiles).map(([path, file]) => {
                return [path, { ...file, defaultUrl: opts.defaultURL }];
            })
        ),
        ...entries(definition.importedDefinitions).reduce((acc, [pathToImportedDefinition, definition]) => {
            return {
                ...acc,
                ...mapKeys(
                    getAllNamedDefinitionFiles(definition.definition, { defaultURL: definition.url }),
                    (_file, path) => join(pathToImportedDefinition, RelativeFilePath.of(path))
                )
            };
        }, {})
    };
}
