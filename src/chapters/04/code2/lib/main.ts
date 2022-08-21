import { Parser } from './Parser'

export default (input: string) : [] => {
	const parse = Parser.parse(input)
	console.log(parse)
	return []
}