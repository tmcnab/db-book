## Create a Relation
```mermaid
	flowchart LR
	ADD --> RELATION --> identifier
```

## Destroy a Relation
```mermaid
	flowchart LR
	REMOVE --> RELATION --> identifier
```

## Determine all Relations
```mermaid
	flowchart LR
	READ --> RELATION
```

## Add an Attribute to a Relation
```mermaid
	flowchart LR
	ADD --> ATTRIBUTE --> identifier --> type
```

## Remove an Attribute from a Relation
```mermaid
	flowchart LR
	REMOVE --> ATTRIBUTE --> identifier --> FROM --> RELATION --> a[identifier]
```

> **Self**: not sure about this syntax

## Determine all Attributes of a Relation
```mermaid
	flowchart LR
	READ --> ATTRIBUTE --> FROM --> RELATION --> identifier
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