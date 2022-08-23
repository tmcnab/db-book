## Create a Relation
```mermaid
	flowchart LR
	ADD --> RELATION --> identifier_expr
```

## Destroy a Relation
```mermaid
	flowchart LR
	REMOVE --> RELATION --> identifier_expr
```

## Determine all Relations
```mermaid
	flowchart LR
	READ --> RELATION
```
```json
[
	["name"],
	["users"],
	["posts"],
]
```

## Add an Attribute to a Relation
```mermaid
	flowchart LR
	ADD --> ATTRIBUTE --> identifier_expr --> type
```

## Remove an Attribute from a Relation
```mermaid
	flowchart LR
	REMOVE --> ATTRIBUTE --> identifier_expr --> FROM --> RELATION --> a[identifier_expr]
```

> **Self**: not sure about this syntax

## Determine all Attributes of a Relation
```mermaid
	flowchart LR
	READ --> ATTRIBUTE --> FROM --> RELATION --> identifier_expr
```
```json
[
	["name"    , "type"   , "unique", "nullable", "default"],
	["email"   , "string" , true    , false     , null     ],
	["id"      , "number" , true    , false     , null     ],
	["name"    , "string" , false   , true      , null     ],
	["verified", "boolean", false   , false     , false    ],
]
```

## Add Tuple to Relation
```mermaid
	flowchart LR
	ADD --> tuple --> TO --> RELATION --> identifier_expr
```
```
ADD { 
	id: 123, 
	email: "user@domain.tld", 
	name: "Riley Jones",
} TO RELATION users
````
