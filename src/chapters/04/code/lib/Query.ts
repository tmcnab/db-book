export const enum TokenType {
	IDENTIFIER = 'IDENTIFIER',
	KEYWORD = 'KEYWORD',
	UNKNOWN = 'UNKNOWN',
}

export enum Keyword {
	FROM = 'FROM',
	INSERT = 'INSERT',
	SELECT = 'SELECT',
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
				case 'FROM':
					return [TokenType.KEYWORD, Keyword.FROM]
				case 'INSERT':
					return [TokenType.KEYWORD, Keyword.INSERT]
				case 'SELECT':
					return [TokenType.KEYWORD, Keyword.SELECT]
			}

			// Match identifiers
			if (str.match(/[a-zA-Z_]+/)) {
				return [TokenType.IDENTIFIER, str]
			}

			// No matches!
			return [TokenType.UNKNOWN, null]
		})
	}

}