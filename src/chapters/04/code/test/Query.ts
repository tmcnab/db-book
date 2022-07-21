import { Query } from '../lib/Query'
import { testFn } from './runner'
import { isEqual } from 'lodash'

export const queryNoTokensForNoInput = (test: testFn) => {
	const query = new Query('')
	test(query.ast.length === 0, 'empty string should have no tokens')
}

export const querySelectSchema = (test: testFn) => {
	const query = new Query('SELECT FROM schema')
	test(isEqual(query.ast, [
		['KEYWORD', 'SELECT'],
		['KEYWORD', 'FROM'],
		['IDENTIFIER', 'schema'],
	]), 'ast should have two keywords and an identifier')
}

export const queryUsingQuotes = (test: testFn) => {
	const query = new Query(`INSERT [123, "John Citizen"] INTO users`)
	test(isEqual(query.ast, [
		[ 'KEYWORD', 'INSERT' ],
		[ 'PUNCTUATION', '[' ],
		[ 'VALUE', 123 ],
		[ 'PUNCTUATION', ',' ],
		[ 'VALUE', '"John Citizen"' ],
		[ 'PUNCTUATION', ']' ],
		[ 'KEYWORD', 'INTO' ],
		[ 'IDENTIFIER', 'users' ]
	]), 'ast should have two keywords and an identifier')
}