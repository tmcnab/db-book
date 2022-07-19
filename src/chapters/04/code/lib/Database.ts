import { Query } from './Query'
import { Result } from './Result'
import { Transaction } from './Transaction'

export type DatabaseValue = boolean | null | number | string

export class Database {

	private data = new Map<string, DatabaseValue[]>([
		['schema', []]
	])

	query (input: string) : Result {
		const query = new Query(input)
		const transaction = new Transaction(query)
		return transaction.execute(this.data)
	}
	
}
