import { Attribute, AttributeType, Data, Schema } from './types'
import { Query } from './Query'
import { Result } from './Result'
import { Transaction } from './Transaction'

export class Database {

	private data: Data = new Map<string, AttributeType[]>()

	private schema: Schema = new Map<string, Attribute[]>()

	query (input: string) : Result {
		const query = new Query(input)
		const transaction = new Transaction(query)
		return transaction.execute(this.schema, this.data)
	}
	
}
