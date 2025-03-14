using SeedExhaustive.Core;
using SeedExhaustive.Types.Object;

#nullable enable

namespace SeedExhaustive.Types.Object;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
public class NestedObjectWithRequiredFieldError(NestedObjectWithRequiredField body)
    : SeedExhaustiveApiException("NestedObjectWithRequiredFieldError", 400, body)
{
    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public new NestedObjectWithRequiredField Body { get; } = body;
}
