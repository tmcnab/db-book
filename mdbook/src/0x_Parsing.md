# 04 Parsing

Humans love reading and writing text but computers[^1] suck at it. Parsing is the process of turning one language into a representation we can more easily work with. 

## 04/1 Turning Text into Data

Take for example the following snippet:

```sql
CREATE TABLE Person (
	id Integer
	name String
)
```

we want to turn this text that has a regular structure it into something a little easier to work with like a sequence of tokens. A *token* has a type, and depending on that type, a value. For the snippet above it will look like this:

```js
[[Keyword "create"], [Keyword "table"], [Identifier "Person"], [LeftParen],
	[Identifier "id"], [Identifier "Integer"],
	[Identifier "name"], [Identifier "String"],
[RightParen]]
```

The whole sequence itself is a _statement_ with multiple clauses or _expressions_. A statement can have zero or more expressions and there are many kinds of expressions.

So we have our sequence of but this itself isn't enough - we need to transform this into a more abstract representation that conveys meaning. In the biz we call this an 
[_Abstract Syntax Tree][^AST]. Again we're going to transform our input:

```
[CreateTableStatement name:"Person" body:[
	[FieldExpression name:"id" type:"Integer"]
	[FieldExpression name:"name" type:"String"]
]]
```

Why are we doing all this? It's so we can make sure that our input text conforms to a specific _grammar_: the rules of a particular language. If our input follows rules, we can deterministically process the input to perform actions or tasks. Fun!

## 04/2 Initial Language

For the purposes of learning how to parse, we're going to settle on a very basic language that does most of what you want a database to do: create, read, update, delete. For the full specification and language examples see [Appendix A](./0A_Database_Language.md).



As computer loving code wranglers we 

---

[^1]: Deep Learning comprehension doesn't count.
[^AST]: [Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)