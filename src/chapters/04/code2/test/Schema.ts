import { testFn } from './runner'
import { Storage } from '../lib/Schema'
import { SCHEMA_TEST } from './fixtures'
import Schema = Storage.Schema

export const shouldCreateRelation = (test: testFn) => {
	const relations = SCHEMA_TEST.createEmptyRelations()
	const relationAdded = Schema.addRelation(relations, 'users')
	test(relationAdded === true, 'did not create relation')
}

export const shouldNotCreateRelationWithEmptyName = (test: testFn) => {
	const relations = SCHEMA_TEST.createEmptyRelations()
	const relationAdded = Schema.addRelation(relations, '')
	test(relationAdded === false, 'should not have created relation')
}

export const shouldCreateValidAttribute = (test: testFn) => {
	const relations = SCHEMA_TEST.createSimpleRelations()
	const attrAdded = Schema.addAttribute(relations, 'users', SCHEMA_TEST.ATTRIBUTE_ID)
	test(attrAdded === true, 'did not create valid attribute')
}

export const shouldNotCreateValidAttributeWithInvalidName = (test: testFn) => {
	const relations = SCHEMA_TEST.createSimpleRelations()
	const attrAdded1 = Schema.addAttribute(relations, 'blarg', SCHEMA_TEST.ATTRIBUTE_ID)
	test(attrAdded1 === false, 'did not create valid attribute')

	const attrAdded2 = Schema.addAttribute(relations, '', SCHEMA_TEST.ATTRIBUTE_ID)
	test(attrAdded2 === false, 'did not create valid attribute')
}