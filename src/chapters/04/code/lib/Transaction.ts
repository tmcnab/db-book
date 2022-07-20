import { Data, Schema } from './types'
import { Query } from './Query'
import { Result } from './Result'

export class Transaction {

	private data?: Data
	private query?: Query
	private schema?: Schema

	constructor (query: Query) {
		this.query = query
	}

	debug () {
		console.group('Transaction')
		console.log(this.data)
		console.log(this.query)
		console.log(this.schema)
		console.groupEnd()
	}

	execute (schema: Schema, data: Data) : Result {
		this.schema = schema
		this.data = data
		return new Result()
	}

}