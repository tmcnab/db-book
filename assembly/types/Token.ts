export enum TokenType {
	COMMA,
	CREATE,
	FLOAT,
	IDENTIFIER,
	INTEGER,
	LBRACE,
	LBRACKET,
	LPAREN,
	RBRACE,
	RBRACKET,
	RPAREN,
	TABLE,
	UNKNOWN,
}

const tokenTypeMap = new Map<string, TokenType>()
tokenTypeMap.set('(', TokenType.LPAREN)
tokenTypeMap.set(')', TokenType.RPAREN)
tokenTypeMap.set('[', TokenType.LBRACKET)
tokenTypeMap.set(']', TokenType.RBRACKET)
tokenTypeMap.set('{', TokenType.LBRACE)
tokenTypeMap.set('}', TokenType.RBRACE)
tokenTypeMap.set(',', TokenType.COMMA)
tokenTypeMap.set('CREATE', TokenType.CREATE)
tokenTypeMap.set('FLOAT', TokenType.FLOAT)
tokenTypeMap.set('IDENTIFIER', TokenType.IDENTIFIER)
tokenTypeMap.set('INTEGER', TokenType.INTEGER)
tokenTypeMap.set('TABLE', TokenType.TABLE)
tokenTypeMap.set('UNKNOWN', TokenType.UNKNOWN)

export const isIdentifier = (input: string) : bool => {
	return input.split()
		.map<number>(value => value.charCodeAt(0))
		.every(value => 
			(value >= 0x0041 && value <= 0x005A) ||
			(value >= 0x0061 && value <= 0x007A)
		)
}

export default class Token {
	rawValue: string = ''
	type: TokenType = TokenType.UNKNOWN

	constructor (rawValue: string) {
		this.rawValue = rawValue
		const rawValueUpperCase = rawValue.toUpperCase()

		if (isIdentifier(rawValue))
			this.type = TokenType.IDENTIFIER
		
		if (tokenTypeMap.has(rawValueUpperCase))
			this.type = tokenTypeMap.get(rawValueUpperCase)

		console.log(this.toString())
	}

	toString () : string {
		if (this.type === TokenType.UNKNOWN) {
			return `\t[Token rawValue=${this.rawValue}]`
		} else {
			return `[Token rawValue=${this.rawValue} type=${this.type}]`
		}
	}
}