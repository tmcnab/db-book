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