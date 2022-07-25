## A Simple Database

Let's make a simple version of a database. You're not going to want it use it in a serious application but it should give you an idea on how something like this can be structured. A database is a seriously complex system so we're going to limit the scope of operations it supports:

1. Table creation and deletion
2. View creation and deletion
3. Add data (with input validation)
4. Remove data 
5. Query for data

We're also going to (re-)use some of the semantics and keywords from SQL. If you don't like that you're coding along call them whatever you want.

To keep things simple (KISS: Keep It Simple, Shithead) the code is going use simple, imperative language features like functions, maps, sets, and arrays - No objects here!