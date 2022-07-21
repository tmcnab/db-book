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

export const multipleStatements = (test: testFn) => {
	const query = new Query(`
	CREATE TABLE users [
		[id number]
		[email string]
		[authorized boolean]
	]
	
	INSERT [1, "admin@domain.tld", true] INTO users
	`)

	test(query.ast.length === 27, 'query should have the right amount of elements')
	test(isEqual(query.ast, [
		[ 'IDENTIFIER', 'CREATE' ],
		[ 'KEYWORD', 'TABLE' ],
		[ 'IDENTIFIER', 'users' ],
		[ 'PUNCTUATION', '[' ],
		[ 'PUNCTUATION', '[' ],
		[ 'IDENTIFIER', 'id' ],
		[ 'IDENTIFIER', 'number' ],
		[ 'PUNCTUATION', ']' ],
		[ 'PUNCTUATION', '[' ],
		[ 'IDENTIFIER', 'email' ],
		[ 'IDENTIFIER', 'string' ],
		[ 'PUNCTUATION', ']' ],
		[ 'PUNCTUATION', '[' ],
		[ 'IDENTIFIER', 'authorized' ],
		[ 'IDENTIFIER', 'boolean' ],
		[ 'PUNCTUATION', ']' ],
		[ 'PUNCTUATION', ']' ],
		[ 'KEYWORD', 'INSERT' ],
		[ 'PUNCTUATION', '[' ],
		[ 'VALUE', 1 ],
		[ 'PUNCTUATION', ',' ],
		[ 'VALUE', '"admin@domain.tld"' ],
		[ 'PUNCTUATION', ',' ],
		[ 'VALUE', 'TRUE' ],
		[ 'PUNCTUATION', ']' ],
		[ 'KEYWORD', 'INTO' ],
		[ 'IDENTIFIER', 'users' ],
	  ]), `query AST should match observed AST`)
}