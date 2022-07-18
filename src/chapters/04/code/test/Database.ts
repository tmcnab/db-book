import Database from "../lib/Database"

type testFn = (expr: boolean, message: string) => void

export const createsInstance = (test: testFn) => {
	const db = new Database()	
	test(db !== null, 'should be null')
}