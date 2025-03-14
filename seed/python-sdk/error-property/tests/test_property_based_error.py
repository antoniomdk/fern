# This file was auto-generated by Fern from our API Definition.

import typing

from seed import AsyncSeedErrorProperty, SeedErrorProperty

from .utilities import validate_response


async def test_throw_error(client: SeedErrorProperty, async_client: AsyncSeedErrorProperty) -> None:
    expected_response: typing.Any = "string"
    expected_types: typing.Any = None
    response = client.property_based_error.throw_error()
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.property_based_error.throw_error()
    validate_response(async_response, expected_response, expected_types)
