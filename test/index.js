import assert from "assert"
import { execute } from "../build/debug.js"

const testInput = `
    ; Empty
`

assert(execute(testInput))
