const test = (expression: boolean, message: string) => {
	if (!expression) {
		throw new Error(message)
	}
}

const run = async (path: string) => {
	let [failCount, passCount] = [0, 0]
	try {
		console.group(path)
		const module = await import(path)
		
		Object.keys(module).forEach((fn) => {
			try {
				module[fn](test)
				console.log('[PASS]', fn)
				passCount += 1
			} catch (error) {
				console.error('[FAIL]', fn, '=>', (error as Error).message)
				failCount += 1
			}
		})
	
		console.info(`=> ${passCount} passed, ${failCount} failed, ${passCount+failCount} total`)
	} catch (error) {
		console.error(`=> ${error}`)
	} finally {
		console.groupEnd()
	}
}

(async () => {
	await run('./Database')
	await run('./DoesntExist')
})()
