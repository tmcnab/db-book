import { testFn } from './runner'
import { Parser } from '../lib/Parser'

export const test = (test: testFn) => {
	const input = `SELECT FROM users u WHERE u.id = 5`
	const result = Parser.parse(input)
	console.log(input, result)
}