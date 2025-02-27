// This file was auto-generated by Fern from our API Definition.

package version

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/version/fern/core"
)

type User struct {
	Id   UserId `json:"id" url:"id"`
	Name string `json:"name" url:"name"`

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

type UserId = string
