import { Query } from './Query'
import { Result } from './Result'

export class Transaction {

	constructor (query: Query) {
		query
	}

	execute (data: Map<string, unknown>) : Result {
		data
		return new Result()
	}

}