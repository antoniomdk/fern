import { testParseOpenAPI } from "./testParseOpenApi";

describe("open api parser", () => {
    testParseOpenAPI("gen-yml-use-title", "openapi.yml", undefined, {
        audiences: [],
        shouldUseTitleAsName: false,
        shouldUseUndiscriminatedUnionsWithLiterals: false
    });
});
