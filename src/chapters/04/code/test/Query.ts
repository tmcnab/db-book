import { Query } from '../lib/Query'
import { testFn } from './runner'

export const queryNoTokensForNoInput = (test: testFn) => {
	const query = new Query('')
	test(query.ast.length === 0, 'empty string should have no tokens')
}
