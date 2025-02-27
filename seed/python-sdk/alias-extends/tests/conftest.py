# This file was auto-generated by Fern from our API Definition.

import os

import pytest
from seed import AsyncSeedAliasExtends, SeedAliasExtends


@pytest.fixture
def client() -> SeedAliasExtends:
    return SeedAliasExtends(base_url=os.getenv("TESTS_BASE_URL", "base_url"))


@pytest.fixture
def async_client() -> AsyncSeedAliasExtends:
    return AsyncSeedAliasExtends(base_url=os.getenv("TESTS_BASE_URL", "base_url"))
