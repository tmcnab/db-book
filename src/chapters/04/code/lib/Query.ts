export const enum TokenType {
	IDENTIFIER = 'IDENTIFIER',
	KEYWORD = 'KEYWORD',
	UNKNOWN = 'UNKNOWN',
	VALUE = 'VALUE',
}

export enum Keyword {
	FALSE = 'FALSE',
	FROM = 'FROM',
	INSERT = 'INSERT',
	SELECT = 'SELECT',
	TRUE = 'TRUE',
}

export type TokenValue = boolean | null | number | string | Keyword

export type Token = [TokenType, TokenValue]

export class Query {

	ast: Token[] = []

	constructor(input: string) {
		if (!input.length) return

		this.ast = input.split(/\s+/).map<Token>(str => {
			// Match keywords
			switch (str.toUpperCase()) {
				case 'FALSE':  return [TokenType.VALUE, Keyword.FALSE]
				case 'FROM':   return [TokenType.KEYWORD, Keyword.FROM]
				case 'INSERT': return [TokenType.KEYWORD, Keyword.INSERT]
				case 'SELECT': return [TokenType.KEYWORD, Keyword.SELECT]
				case 'TRUE':   return [TokenType.VALUE, Keyword.TRUE]
			}

			// Match identifiers
			if (str.match(/[a-zA-Z_]+/)) {
				return [TokenType.IDENTIFIER, str]
			}

			// Match integer numbers
			const int = Number.parseInt(str, 10)
			if (!Number.isNaN(int)) {
				return [TokenType.VALUE, int]
			}

			// Match floating point numbers
			const float = Number.parseFloat(str)
			if (!Number.isNaN(float)) {
				return [TokenType.VALUE, float]
			}

			// No matches!
			return [TokenType.UNKNOWN, null]
		})
	}

}