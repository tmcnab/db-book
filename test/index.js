import assert from "assert"
import { execute, toTokens } from "../build/debug.js"

const testInput = `
	CREATE TABLE Student (
		id INTEGER
		name STRING
	)

	CREATE TABLE Grade (
		student Student
		year INTEGER
		art FLOAT
		history FLOAT
		literacy FLOAT
		math FLOAT
		music FLOAT
		science FLOAT
	)
`

assert(execute(testInput))

assert.deepStrictEqual(toTokens(testInput).length, 13 + 21)