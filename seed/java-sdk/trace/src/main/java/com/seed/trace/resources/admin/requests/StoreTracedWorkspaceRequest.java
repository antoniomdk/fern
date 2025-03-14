/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.admin.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.resources.submission.types.TraceResponse;
import com.seed.trace.resources.submission.types.WorkspaceRunDetails;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = StoreTracedWorkspaceRequest.Builder.class)
public final class StoreTracedWorkspaceRequest {
    private final WorkspaceRunDetails workspaceRunDetails;

    private final List<TraceResponse> traceResponses;

    private final Map<String, Object> additionalProperties;

    private StoreTracedWorkspaceRequest(
            WorkspaceRunDetails workspaceRunDetails,
            List<TraceResponse> traceResponses,
            Map<String, Object> additionalProperties) {
        this.workspaceRunDetails = workspaceRunDetails;
        this.traceResponses = traceResponses;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("workspaceRunDetails")
    public WorkspaceRunDetails getWorkspaceRunDetails() {
        return workspaceRunDetails;
    }

    @JsonProperty("traceResponses")
    public List<TraceResponse> getTraceResponses() {
        return traceResponses;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof StoreTracedWorkspaceRequest && equalTo((StoreTracedWorkspaceRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(StoreTracedWorkspaceRequest other) {
        return workspaceRunDetails.equals(other.workspaceRunDetails) && traceResponses.equals(other.traceResponses);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.workspaceRunDetails, this.traceResponses);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static WorkspaceRunDetailsStage builder() {
        return new Builder();
    }

    public interface WorkspaceRunDetailsStage {
        _FinalStage workspaceRunDetails(WorkspaceRunDetails workspaceRunDetails);

        Builder from(StoreTracedWorkspaceRequest other);
    }

    public interface _FinalStage {
        StoreTracedWorkspaceRequest build();

        _FinalStage traceResponses(List<TraceResponse> traceResponses);

        _FinalStage addTraceResponses(TraceResponse traceResponses);

        _FinalStage addAllTraceResponses(List<TraceResponse> traceResponses);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements WorkspaceRunDetailsStage, _FinalStage {
        private WorkspaceRunDetails workspaceRunDetails;

        private List<TraceResponse> traceResponses = new ArrayList<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(StoreTracedWorkspaceRequest other) {
            workspaceRunDetails(other.getWorkspaceRunDetails());
            traceResponses(other.getTraceResponses());
            return this;
        }

        @java.lang.Override
        @JsonSetter("workspaceRunDetails")
        public _FinalStage workspaceRunDetails(WorkspaceRunDetails workspaceRunDetails) {
            this.workspaceRunDetails = workspaceRunDetails;
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllTraceResponses(List<TraceResponse> traceResponses) {
            this.traceResponses.addAll(traceResponses);
            return this;
        }

        @java.lang.Override
        public _FinalStage addTraceResponses(TraceResponse traceResponses) {
            this.traceResponses.add(traceResponses);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "traceResponses", nulls = Nulls.SKIP)
        public _FinalStage traceResponses(List<TraceResponse> traceResponses) {
            this.traceResponses.clear();
            this.traceResponses.addAll(traceResponses);
            return this;
        }

        @java.lang.Override
        public StoreTracedWorkspaceRequest build() {
            return new StoreTracedWorkspaceRequest(workspaceRunDetails, traceResponses, additionalProperties);
        }
    }
}
