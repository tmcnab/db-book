## Project Structure

There are so many popular imperative programming languages that we could work with here suitable for making a database - Rust, Go, or even C. I'm going to work with TypeScript because it's popular and it's readily convertible to other language via WASM. I'm going to assume you can install `node` and `npm` by yourself and if you can't you definitely cannot write your own database so you might as well stop here.

Given it's a TypeScript project it's going to follow a standard npm project structure:

```
lib/
node_modules/
test/
package.json
ts-config.json
```

You can download the starter project here[^starter_project]. Remember to install the dependencies!