from typing import Literal, Optional

from typing_extensions import Self

import pydantic

from ...external_dependencies.pydantic import PydanticVersionCompatibility


class BasePydanticModelCustomConfig(pydantic.BaseModel):
    version: PydanticVersionCompatibility = PydanticVersionCompatibility.Both
    frozen: bool = False
    orm_mode: bool = False
    smart_union: bool = False
    require_optional_fields: bool = False
    use_str_enums: bool = True

    wrapped_aliases: bool = False

    @pydantic.model_validator(mode="after")
    def check_wrapped_aliases_v1_only(self) -> Self:
        version_compat = self.version
        use_wrapped_aliases = self.wrapped_aliases

        if use_wrapped_aliases and version_compat != PydanticVersionCompatibility.V1:
            raise ValueError(
                "Wrapped aliases are only supported in Pydantic V1, please update your `version` field to be 'v1' to continue using wrapped aliases."
            )

        return self


class PydanticModelCustomConfig(BasePydanticModelCustomConfig):
    include_validators: bool = False
    # DEPRECATED: use `extra_fields` instead
    forbid_extra_fields: bool = False
    extra_fields: Optional[Literal["allow", "forbid"]] = "allow"
    skip_formatting: bool = False
    include_union_utils: bool = False
    package_name: Optional[str] = None
    # Skip validation of fields (automatically includes additional fields)
    skip_validation: bool = False
    # Leverage defaults specified in the API specification
    use_provided_defaults: bool = False

    # Whether or not to generate TypedDicts instead of Pydantic
    # Models for request objects.
    use_typeddict_requests: bool = False

    class Config:
        extra = pydantic.Extra.forbid
