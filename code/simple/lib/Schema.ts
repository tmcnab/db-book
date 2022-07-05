enum Noun {
	TABLE,
	VIEW,
}

enum FieldType {
	BOOLEAN,
	FLOAT,
	INTEGER,
	NULL,
	STRING,
}

type Relation = Map<string, FieldType>

export default class Schema {

	$schema = {
		relations: new Map<string, Relation>(),
		views: new Map(),
	}

	addRelation (name: string, relation: Relation) {
		if (this.$schema.relations.has(name)) {
			return new Error('Relation Already Exists')
		}

		this.$schema.relations.set(name, relation)
	}

	addView () {
		throw new Error('Not Implemented')
	}

	static deserialize (buffer: Uint8Array) : Schema {
		const decoder = new TextDecoder()
		const schema = new Schema()
		schema.$schema = JSON.parse(decoder.decode(buffer))
		return schema
	}

	serialize () : Uint8Array {
		const buffer = new Uint8Array()
		const encoder = new TextEncoder()
		const source = JSON.stringify(this.$schema)
		encoder.encodeInto(source, buffer)
		return buffer
	}
	
}
