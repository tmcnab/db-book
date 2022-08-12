import { testFn } from './runner'
import { Parser } from '../lib/Parser'

export const testSelect = (test: testFn) => {
	const input = `SELECT FROM users u WHERE u.id = 5`
	const result = Parser.parse(input)
	console.log(input, result)
}

export const testCreateTable = (test: testFn) => {
	const input = `CREATE TABLE users WHERE (
		email    STRING
		hash     STRING
		id       NUMBER
		verified BOOLEAN
	)`
	const result = Parser.parse(input)
	console.log(input, result)
}