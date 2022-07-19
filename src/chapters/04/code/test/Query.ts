import { Query } from '../lib/Query'
import { testFn } from './runner'
import { isEqual } from 'lodash'

export const queryNoTokensForNoInput = (test: testFn) => {
	const query = new Query('')
	test(query.ast.length === 0, 'empty string should have no tokens')
}

export const querySelectSchema = (test: testFn) => {
	const query = new Query('SELECT FROM schema')
	test(query.ast.length === 3, 'ast should have three elements')
	test(isEqual(query.ast, [
		['KEYWORD', 'SELECT'],
		['KEYWORD', 'FROM'],
		['IDENTIFIER', 'schema']
	]), 'ast should have two keywords and an identifier')
}
