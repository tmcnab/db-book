import { testFn } from './runner'
import { Parser } from '../lib/Parser'
import { TEST_STATMENTS } from './fixtures'

export const testCreateRelation = (test: testFn) => {
	const input = TEST_STATMENTS.createRelation
	const output = Parser.parse(input)
}

export const addAttributeToRelation = (test: testFn) => {
	const input = TEST_STATMENTS.addAttributeToRelation
	const output = Parser.parse(input)
	console.log(input)
	console.log(output)
}