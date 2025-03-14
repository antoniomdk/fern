using SeedServerSentEvents.Core;

#nullable enable

namespace SeedServerSentEvents.Core;

/// <summary>
/// This exception type will be thrown for any non-2XX API responses.
/// </summary>
public class SeedServerSentEventsApiException(string message, int statusCode, object body)
    : SeedServerSentEventsException(message)
{
    /// <summary>
    /// The error code of the response that triggered the exception.
    /// </summary>
    public int StatusCode { get; } = statusCode;

    /// <summary>
    /// The body of the response that triggered the exception.
    /// </summary>
    public object Body { get; } = body;

    public override string ToString()
    {
        return $"SeedServerSentEventsApiException {{ message: {Message}, statusCode: {StatusCode}, body: {Body} }}";
    }
}
