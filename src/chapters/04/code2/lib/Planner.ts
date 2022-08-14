import { Parser } from './Parser'

export namespace Planner {

	export namespace Operation {

		enum Type { }

		type Operation = { }

		export type Operations = Array<Operation>

	}

	const sequence = (tokens: Parser.Token[]) : Operation.Operations => {
		return []
	}

}