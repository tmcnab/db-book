export enum AttributeType {
	Boolean = 'boolean',
	Number = 'number',
	String = 'string',
}

export type AttributeValue = boolean | null | number | string

export type Attribute = [
	string,			// name
	AttributeType,	// type
	boolean,		// nullable
]

export type Data = Map<string, AttributeType[]>

export type Schema = Map<string, Attribute[]>