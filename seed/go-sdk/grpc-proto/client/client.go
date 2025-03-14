// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/grpc-proto/fern/core"
	option "github.com/grpc-proto/fern/option"
	user "github.com/grpc-proto/fern/user"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	User *user.Client
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
		User:   user.NewClient(opts...),
	}
}
