export namespace Parser {

	export enum Keyword {
		FALSE    = 'FALSE',
		FROM     = 'FROM',
		NULL     = 'NULL',
		SELECT   = 'SELECT',
		TRUE     = 'TRUE',
		WHERE    = 'WHERE',
	}

	export enum Operator {
		EQUAL     = '=',
		NOT_EQUAL = '≠',
	}

	export enum Type {
		IDENTIFIER = 'IDENTIFIER',
		KEYWORD    = 'KEYWORD',
		OPERATOR   = 'OPERATOR',
		UNKNOWN    = 'UNKNOWN',
		VALUE      = 'VALUE',
	}
	
	export type Value = boolean | null | number | string
	
	export type Token = [Type, (Keyword | Value)?]

	export const isIdentifier = (input: string) : boolean => {
		const matcher = /^[a-z].[a-z]+$|^[a-z]+$/gmi
		return input.match(matcher)?.length === 1
	}

	export const matchedIdentifier = (input: string, tokens: Token[]): boolean => {
		const matcher = /^[a-z].[a-z]+$|^[a-z]+$/gmi
		
		if (input.match(matcher)?.length === 1) {
			tokens.push([Type.IDENTIFIER, input])
			return true
		}
		
		return false
	}

	export const matchedKeyword = (input: string, tokens: Token[]) : boolean => {
		const inputAsUpperCase = input.toUpperCase()
		
		if (inputAsUpperCase in Keyword) {
			const value : Keyword = (<any>Keyword)[inputAsUpperCase]
			tokens.push([Type.KEYWORD, value])
			return true
		}
		
		return false
	}

	export const matchedNumber = (input: string, tokens: Token[]) : boolean => {
		
		const asInt = Number.parseInt(input)
		if (!Number.isNaN(asInt)) {
			tokens.push([Parser.Type.VALUE, asInt])
			return true
		}
		
		const asFloat = Number.parseFloat(input)
		if (!Number.isNaN(asFloat)) {
			tokens.push([Parser.Type.VALUE, asFloat])
			return true
		}

		return false
	}
	
	export const parse = (input: string) : Parser.Token[] => {
		const elements = input.split(/\s+/gm)
		const tokens: Parser.Token[] = []
		
		for (let index = 0; index < elements.length; index += 1) {
			const element = elements[index]

			if (matchedNumber(element, tokens)) continue

			if (matchedKeyword(element, tokens)) continue

			if (matchedIdentifier(element, tokens)) continue

			tokens.push([Parser.Type.UNKNOWN, element])
		}

		return tokens
	}

}

