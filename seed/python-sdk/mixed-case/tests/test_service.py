# This file was auto-generated by Fern from our API Definition.

import datetime
import typing

from seed import AsyncSeedMixedCase, SeedMixedCase

from .utilities import validate_response


async def test_get_resource(client: SeedMixedCase, async_client: AsyncSeedMixedCase) -> None:
    expected_response: typing.Any = {
        "resource_type": "user",
        "userName": "username",
        "metadata_tags": ["tag1", "tag2"],
        "EXTRA_PROPERTIES": {"foo": "bar", "baz": "qux"},
    }
    expected_types: typing.Any = "no_validate"
    response = client.service.get_resource(resource_id="rsc-xyz")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.get_resource(resource_id="rsc-xyz")
    validate_response(async_response, expected_response, expected_types)


async def test_list_resources(client: SeedMixedCase, async_client: AsyncSeedMixedCase) -> None:
    expected_response: typing.Any = [
        {
            "resource_type": "user",
            "userName": "username",
            "metadata_tags": ["tag1", "tag2"],
            "EXTRA_PROPERTIES": {"foo": "bar", "baz": "qux"},
        }
    ]
    expected_types: typing.Tuple[typing.Any, typing.Any] = ("list", {0: "no_validate"})
    response = client.service.list_resources(page_limit=10, before_date=datetime.date.fromisoformat("2023-01-01"))
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.service.list_resources(
        page_limit=10, before_date=datetime.date.fromisoformat("2023-01-01")
    )
    validate_response(async_response, expected_response, expected_types)
