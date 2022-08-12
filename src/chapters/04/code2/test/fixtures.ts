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

export const TEST_STATMENTS = {
	addAttributeToRelation,
	createRelation,
}