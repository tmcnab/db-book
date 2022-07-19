import {Database} from "../lib/"

type testFn = (expr: boolean, message: string) => void

export const createsInstance = (test: testFn) => {
	const db = new Database()	
	test(db !== null, 'should be null')
}

export const acceptsQuery = (test: testFn) => {
	const db = new Database()
	const results = db.query(`SELECT FROM schema`)
	test(results !== null, 'db instance should return results')
}