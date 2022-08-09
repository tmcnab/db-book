export namespace Parser {

	export enum Keyword {
		FALSE    = 'FALSE',
		FROM     = 'FROM',
		NULL     = 'NULL',
		SELECT   = 'SELECT',
		TRUE     = 'TRUE',
		WILDCARD = '*',
	}

	export enum Type {
		KEYWORD = 'KEYWORD',
		UNKNOWN = 'UNKNOWN',
		VALUE   = 'VALUE',
	}
	
	export type Value = boolean | null | number | string
	
	export type Token = [Type, (Keyword | Value)?]
	
	export const parse = (input: string) : Parser.Token[] => {
		const elements = input.split(/\s+/gm)
		const tokens: Parser.Token[] = []
		
		for (let index = 0; index < elements.length; index += 1) {
			const element = elements[index]
			const elementToUpper = element.toUpperCase()

			const asInt = Number.parseInt(element)
			if (!Number.isNaN(asInt)) {
				tokens.push([Parser.Type.VALUE, asInt])
				continue
			}

			const asFloat = Number.parseFloat(element)
			if (!Number.isNaN(asFloat)) {
				tokens.push([Parser.Type.VALUE, asFloat])
				continue
			}

			if (elementToUpper in Keyword) {
				const value : Keyword = (<any>Keyword)[elementToUpper]
				tokens.push([Type.KEYWORD, value])
				continue
			}

			tokens.push([Parser.Type.UNKNOWN])
		}

		return tokens
	}

}

