## Tokenization

The first step in processing a tract of text in a language is *tokenization* – splitting each component of the source text into *Tokens* so that we can further process the *Sequence* of Tokens.

Given the following statement we could transform the following:

```
ADD (email='q.dexter@domain.tld', givenName='Quinn', familyName='Dexter') TO people
```

into:

```json
[{
	"type": "AddTuple",
	"target": "people",
	"argument": {
		"email": "q.dexter@domain.tld",
		"givenName": "Quinn",
		"familyName": "Dexter",
	}
}]
```

There are a multitude of parsing algorithms that can do this but we're absolute imbiciles that know nothing but string splitting and regular expressions!