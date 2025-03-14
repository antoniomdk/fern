# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedOauthClientCredentials, SeedOauthClientCredentials


@pytest.fixture
def client() -> SeedOauthClientCredentials:
    return SeedOauthClientCredentials(
        client_id=os.getenv("ENV_CLIENT_ID", "client_id"),
        client_secret=os.getenv("ENV_CLIENT_SECRET", "client_secret"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
        _token_getter_override=lambda: os.getenv("ENV_TOKEN", "token"),
    )


@pytest.fixture
def async_client() -> AsyncSeedOauthClientCredentials:
    return AsyncSeedOauthClientCredentials(
        client_id=os.getenv("ENV_CLIENT_ID", "client_id"),
        client_secret=os.getenv("ENV_CLIENT_SECRET", "client_secret"),
        base_url=os.getenv("TESTS_BASE_URL", "base_url"),
        _token_getter_override=lambda: os.getenv("ENV_TOKEN", "token"),
    )
