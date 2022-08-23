import { Storage } from '../lib/Schema'

const addAttributeToRelation = `
	ADD ATTRIBUTE 
		visited BOOLEAN
	TO
		users`

const createRelation = `
	CREATE RELATION
		users 
	WHERE
		email    STRING
		hash     STRING
		id       NUMBER
		verified BOOLEAN`

const queryIndividualAttributes = `
	SELECT 
		email, id
	FROM ATTRIBUTE
		users
	WHERE
		id = 5
`

export const TEST_STATMENTS = {
	addAttributeToRelation,
	createRelation,
}

export namespace SCHEMA_TEST {

	import Attribute = Storage.Schema.Attribute

	export const createEmptyRelations = () => Object.create(null)

	export const createSimpleRelations = () => {
		const output = createEmptyRelations()
		output['users'] = []
		return output
	}

	export const ATTRIBUTE_ID = { name: 'id', nullable: false, type: Attribute.Type.NUMBER }

}