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