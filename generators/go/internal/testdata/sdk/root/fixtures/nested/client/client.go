// This file was auto-generated by Fern from our API Definition.

package client

import (
	context "context"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/root/fixtures/core"
	nested "github.com/fern-api/fern-go/internal/testdata/sdk/root/fixtures/nested"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/root/fixtures/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: core.NewCaller(
			&core.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header: options.ToHeader(),
	}
}

func (c *Client) CreateNested(
	ctx context.Context,
	request *nested.GetNestedRequest,
	opts ...option.RequestOption,
) (string, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := "https://api.foo.io/v1"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/nested"

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response string
	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:         endpointURL,
			Method:      http.MethodPost,
			MaxAttempts: options.MaxAttempts,
			Headers:     headers,
			Client:      options.HTTPClient,
			Request:     request,
			Response:    &response,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}
