## Fundamental Operations

In order to limit the scope our prototype, we need to define the operations our database will perform: 

- Add Relation
- Remove Relation
- Add Attribute to Relation
- Find Attributes in Relation
- Remove Attribute from Relation
- Add Tuple to Relation
- Remove Tuple from Relation

We're going to use the following data tables as inspiration on how to design our prototype:


|`id(number)` |`email(string)`  |`name(string)`|`verfied(boolean)`|
|-------------|-----------------|--------------|------------------|
|`1`          |`wendy@gmail.com`|`Wendy`       |`false`           |
|`2`          |`bking@yahoo.com`|`Bo King`     |`true`            |
|`3`          |`rm@hotmail.com` |`Ron McDonald`|`false`           |


|`uid(number)`|`date(string)`|`type(string)`|`content(string)`|
|-------------|--------------|--------------|-----------------|

### Add Relation

Adding a relation

# The System
You probably know a database as a glob of things like tables, indexes, views,
stored procedures and triggers. We don't care about this right now - all we 
care about is putting data in, modfifying it and finding it. Our aim for this 
project is the following:

- Put in data
- Pull out data
- Make it fast
- Make multiple instances sync up properly
- We dont care about SQL

## Languages
If you think of our database as a black box, we put something in, the black 
box processes it and we get some type of result back. The input consists of
two things: **content** and **encoding**. The **content** is a language and
the  **encoding** is the way the **content** is conveyed to the recipient.

The **content** itself is a language. 

### Data Definition Language (DDL)

A DDL defines how the system accepts, processes and retrieves information:

```sql
CREATE TABLE Persons (
    id int,
    givenName text,
    familyName text,
)
```

### Data Manipulation Language (DML)

A DML inserts, updates and deletes information from the system. For example if
you want to insert a record into a database in SQL you would input:

```sql
INSERT INTO People (givenName, familyName) VALUES ('Karl', 'Marx')
```

### Data Query Language (DQL)

TBA.

## Parts

There can be as many or as little parts to a database system as you want, 
based on how much you want it to do. Our database isn't going to do much but 
it will allow other people to add junk to it later through the integration of
plugins.

# 03 Query Language

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


# Links & Resources
- [Relational model](https://en.wikipedia.org/wiki/Relational_model)
- [Codd's 12 rules](https://en.wikipedia.org/wiki/Codd%27s_12_rules)
- [mdBook Mermaid](https://github.com/badboy/mdbook-mermaid)