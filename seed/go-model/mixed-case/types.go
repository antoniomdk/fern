// This file was auto-generated by Fern from our API Definition.

package mixedcase

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/mixed-case/fern/core"
)

type NestedUser struct {
	Name       string `json:"Name" url:"Name"`
	NestedUser *User  `json:"NestedUser,omitempty" url:"NestedUser,omitempty"`

	extraProperties map[string]interface{}
}

func (n *NestedUser) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NestedUser) UnmarshalJSON(data []byte) error {
	type unmarshaler NestedUser
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = NestedUser(value)

	extraProperties, err := core.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties

	return nil
}

func (n *NestedUser) String() string {
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Organization struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (o *Organization) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *Organization) UnmarshalJSON(data []byte) error {
	type unmarshaler Organization
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = Organization(value)

	extraProperties, err := core.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties

	return nil
}

func (o *Organization) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type ResourceStatus string

const (
	ResourceStatusActive   ResourceStatus = "ACTIVE"
	ResourceStatusInactive ResourceStatus = "INACTIVE"
)

func NewResourceStatusFromString(s string) (ResourceStatus, error) {
	switch s {
	case "ACTIVE":
		return ResourceStatusActive, nil
	case "INACTIVE":
		return ResourceStatusInactive, nil
	}
	var t ResourceStatus
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (r ResourceStatus) Ptr() *ResourceStatus {
	return &r
}

type User struct {
	UserName        string            `json:"userName" url:"userName"`
	MetadataTags    []string          `json:"metadata_tags,omitempty" url:"metadata_tags,omitempty"`
	ExtraProperties map[string]string `json:"EXTRA_PROPERTIES,omitempty" url:"EXTRA_PROPERTIES,omitempty"`

	extraProperties map[string]interface{}
}

func (u *User) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *User) UnmarshalJSON(data []byte) error {
	type unmarshaler User
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = User(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *User) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
