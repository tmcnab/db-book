# 0A Database Language

This appendix enumerates the data and structure of a database we will/have 
designed throughout this book.

```
Order
	id<integer>
	organization_id<integer>
	product_id<integer>
	quantity<integer>
Organization
	id<integer>
	name<string>
	orders<Order[]>
Product
	id<integer>
	name<string>
	type<ProductType> = Bar | Foil | Tube | Wire
```