/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.problem.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = GetFunctionSignatureRequest.Builder.class
)
public final class GetFunctionSignatureRequest {
  private final FunctionSignature functionSignature;

  private GetFunctionSignatureRequest(FunctionSignature functionSignature) {
    this.functionSignature = functionSignature;
  }

  @JsonProperty("functionSignature")
  public FunctionSignature getFunctionSignature() {
    return functionSignature;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof GetFunctionSignatureRequest && equalTo((GetFunctionSignatureRequest) other);
  }

  private boolean equalTo(GetFunctionSignatureRequest other) {
    return functionSignature.equals(other.functionSignature);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.functionSignature);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static FunctionSignatureStage builder() {
    return new Builder();
  }

  public interface FunctionSignatureStage {
    _FinalStage functionSignature(FunctionSignature functionSignature);

    Builder from(GetFunctionSignatureRequest other);
  }

  public interface _FinalStage {
    GetFunctionSignatureRequest build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements FunctionSignatureStage, _FinalStage {
    private FunctionSignature functionSignature;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(GetFunctionSignatureRequest other) {
      functionSignature(other.getFunctionSignature());
      return this;
    }

    @java.lang.Override
    @JsonSetter("functionSignature")
    public _FinalStage functionSignature(FunctionSignature functionSignature) {
      this.functionSignature = functionSignature;
      return this;
    }

    @java.lang.Override
    public GetFunctionSignatureRequest build() {
      return new GetFunctionSignatureRequest(functionSignature);
    }
  }
}
