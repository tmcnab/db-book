import assert from "assert"
import { execute, toTokens } from "../build/debug.js"

const testInput = `
	CREATE ENUM Grade ( A , B , C , D , F )

	CREATE TABLE Student (
		id INTEGER
		name STRING
	)

	CREATE TABLE Grade (
		student Student
		year INTEGER
		grade Grade
	)
`


assert(execute(testInput))

assert.deepStrictEqual(toTokens(testInput).length, 14 + 9 + 11)