// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/pointer-filename/fixtures/core"
)

type Pointer struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (p *Pointer) GetExtraProperties() map[string]interface{} {
	return p.extraProperties
}

func (p *Pointer) UnmarshalJSON(data []byte) error {
	type unmarshaler Pointer
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = Pointer(value)

	extraProperties, err := core.ExtractExtraProperties(data, *p)
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties

	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *Pointer) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}
