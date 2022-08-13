import { run } from './runner'

(async () => {
	await run('./Parser')
	await run('./Optimizer')
	await run('./Evaluator')
})()
