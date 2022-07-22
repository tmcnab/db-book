import { Statement } from "./types"

export const enum TokenType {
	IDENTIFIER = 'IDENTIFIER',
	KEYWORD = 'KEYWORD',
	PUNCTUATION = 'PUNCTUATION',
	UNKNOWN = 'UNKNOWN',
	VALUE = 'VALUE',
}

export enum Keyword {
	COMMA = ',',
	FALSE = 'FALSE',
	FROM = 'FROM',
	INSERT = 'INSERT',
	LEFT_BRACKET = '[',
	RIGHT_BRACKET = ']',
	SELECT = 'SELECT',
	TRUE = 'TRUE',
	TABLE = 'TABLE',
	INTO = 'INTO',
}

export type TokenValue = boolean | null | number | string | Keyword

export type Token = [TokenType, TokenValue]

export class Query {

	ast: Token[] = []

	constructor(input: string) {
		if (!input.length) return

		const parts = input.normalize().replaceAll(/\s+/g, ' ').split(/(".*?"|\w+|\[|\]|,)/)
		const items = parts.filter(item => item !== ' ')
			.filter(item => item !== '')
		this.ast = items.map<Token>(str => 
		{	
			// Match keywords
			switch (str.toUpperCase()) {
				case ',':      return [TokenType.PUNCTUATION, Keyword.COMMA]
				case '[':      return [TokenType.PUNCTUATION, Keyword.LEFT_BRACKET]
				case ']':      return [TokenType.PUNCTUATION, Keyword.RIGHT_BRACKET]
				case 'FALSE':  return [TokenType.VALUE, Keyword.FALSE]
				case 'FROM':   return [TokenType.KEYWORD, Keyword.FROM]
				case 'INSERT': return [TokenType.KEYWORD, Keyword.INSERT]
				case 'INTO':   return [TokenType.KEYWORD, Keyword.INTO]
				case 'SELECT': return [TokenType.KEYWORD, Keyword.SELECT]
				case 'TRUE':   return [TokenType.VALUE, Keyword.TRUE]
				case 'TABLE':  return [TokenType.KEYWORD, Keyword.TABLE]
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

			// Match strings
			if (str.startsWith('"') && str.endsWith('"')) {
				return [TokenType.VALUE, str]
			}

			// Match identifiers
			if (str.match(/[a-zA-Z_]+/)) {
				return [TokenType.IDENTIFIER, str]
			}

			// No matches!
			return [TokenType.UNKNOWN, str]
		})
	}

	get errors () : Error[] {
		return []
	}

	get tokens () : Token[] {
		return this.ast
	}

	get statements () : Statement[] {
		const items: Statement[] = []

		return items
	}

}