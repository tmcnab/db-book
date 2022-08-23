# Data & Types


### Data

What the hell is _data_ anyway? Data is a bunch of values (data points or 
_datum_) about things, places or whatever you're trying to measure. Every 
datum has a type - boolean, string, number etc. We can also thing of the datum
as an atom - the most indivisible chunk of stuff that we have to work with.

### Tuple

So once you have these atomic chunks of stuff the next step up is grouping 
them. We're going to call them _tuples_ and they're _sequences_ of datum. In 
a database they're bascially the equivalent of a row. Say for example we want
to represent a person with a credit score, we could use:

```
('John', 'Lopez', 725)
```

One problem with this is that if I handed you this tuple you'd be like "hey
what does this represent? I get the first two elements are names but what the
hell does `725` mean?

### Sets

Set theory is a whole gigantic thing. We're not going to get into the egghead
zone, but for all intents and purposes a `Set` is a collection of unique 
values. No matter how many times you put the same value in, you only get one
of the same value out.

```
[(1, 'John', 'Lopez') (2, 'Jane', 'Hanks')]
```

### Maps

Maps on the other hand are a sequence of pairs: a key and an associated value.
Every key has to be unique but not every value has to be (otherwise it'd be a 
fancier Set).

```
{
	"people" : [
		(1, 'John', 'Lopez'),
		(2, 'Jane', 'Hanks'),
	],
	"scores" : [
		(1, 625),
		(2, 790),
	],
}
```
