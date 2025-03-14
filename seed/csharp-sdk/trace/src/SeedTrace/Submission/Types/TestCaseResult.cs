using System.Text.Json.Serialization;

#nullable enable

namespace SeedTrace;

public record TestCaseResult
{
    [JsonPropertyName("expectedResult")]
    public required object ExpectedResult { get; set; }

    [JsonPropertyName("actualResult")]
    public required object ActualResult { get; set; }

    [JsonPropertyName("passed")]
    public required bool Passed { get; set; }
}
