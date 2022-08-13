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