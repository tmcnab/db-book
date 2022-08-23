# SQL

The Structured Query Language (SQL) is the god-king of relational database languages. Some have tried to create their own languages and dialects but SQL has had the global inertia to obliterate the competition. After the computer science wonks had their way, it was split into various components:

- Data Definition Language (DDL)
- Data Manipulation Language (DML)
- Data Query Language (DQL)

Each has their own concerns and all three are needed for a functional database that can solve real problems in the world.

## Data Definition Language (DDL)

A DDL defines the *shape* of the database – what it can accept and what it can serve. In SQL it takes the form of manipulating the abilities of the database:

```sql
CREATE TABLE users

ALTER TABLE users
  ADD last_login DATETIME

DROP TABLE users
```

## Data Manipulation Language

TBA.

## Data Query Language

```sql
SELECT * FROM users WHERE id = 6

```