import Result from './types/Result'
import Token from './types/Token'

export function execute (input: String) : Result {
	return new Result()
}

export function toTokens (input: string) : Token[] {
	return input.replaceAll('\n', ' ')
		.replaceAll('\t', ' ')
		.replaceAll('  ', ' ')
		.split(' ')
		.filter(element => element.length > 0)
		.map<Token>((element: string) => new Token(element))
}
