# frozen_string_literal: true

require_relative "../../requests"
require_relative "types/optional_string"
require_relative "types/importing_type"
require "async"

module SeedAudiencesClient
  class FooClient
    # @return [SeedAudiencesClient::RequestClient]
    attr_reader :request_client

    # @param request_client [SeedAudiencesClient::RequestClient]
    # @return [SeedAudiencesClient::FooClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param optional_string [SeedAudiencesClient::Foo::OPTIONAL_STRING]
    # @param public_property [String]
    # @param private_property [Integer]
    # @param request_options [SeedAudiencesClient::RequestOptions]
    # @return [SeedAudiencesClient::Foo::ImportingType]
    # @example
    #  audiences = SeedAudiencesClient::Client.new(base_url: "https://api.example.com")
    #  audiences.foo.find(
    #    optional_string: "string",
    #    public_property: "string",
    #    private_property: 1
    #  )
    def find(optional_string:, public_property: nil, private_property: nil, request_options: nil)
      response = @request_client.conn.post do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers = {
      **(req.headers || {}),
      **@request_client.get_headers,
      **(request_options&.additional_headers || {})
        }.compact
        req.params = {
          **(request_options&.additional_query_parameters || {}),
          "optionalString": optional_string
        }.compact
        req.body = {
          **(request_options&.additional_body_parameters || {}),
          publicProperty: public_property,
          privateProperty: private_property
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/"
      end
      SeedAudiencesClient::Foo::ImportingType.from_json(json_object: response.body)
    end
  end

  class AsyncFooClient
    # @return [SeedAudiencesClient::AsyncRequestClient]
    attr_reader :request_client

    # @param request_client [SeedAudiencesClient::AsyncRequestClient]
    # @return [SeedAudiencesClient::AsyncFooClient]
    def initialize(request_client:)
      @request_client = request_client
    end

    # @param optional_string [SeedAudiencesClient::Foo::OPTIONAL_STRING]
    # @param public_property [String]
    # @param private_property [Integer]
    # @param request_options [SeedAudiencesClient::RequestOptions]
    # @return [SeedAudiencesClient::Foo::ImportingType]
    # @example
    #  audiences = SeedAudiencesClient::Client.new(base_url: "https://api.example.com")
    #  audiences.foo.find(
    #    optional_string: "string",
    #    public_property: "string",
    #    private_property: 1
    #  )
    def find(optional_string:, public_property: nil, private_property: nil, request_options: nil)
      Async do
        response = @request_client.conn.post do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers = {
        **(req.headers || {}),
        **@request_client.get_headers,
        **(request_options&.additional_headers || {})
          }.compact
          req.params = {
            **(request_options&.additional_query_parameters || {}),
            "optionalString": optional_string
          }.compact
          req.body = {
            **(request_options&.additional_body_parameters || {}),
            publicProperty: public_property,
            privateProperty: private_property
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/"
        end
        SeedAudiencesClient::Foo::ImportingType.from_json(json_object: response.body)
      end
    end
  end
end
