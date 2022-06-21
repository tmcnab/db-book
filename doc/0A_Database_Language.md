# 0A Database Language

```
CREATE ENUM Role Integer
	None = 0
	Administrator = 1
	Member = 2
END

CREATE TABLE Users
	ADD COLUMN active Boolean
	ADD COLUMN id Integer
	ADD COLUMN name String
	ADD COLUMN role Role
	ADD COLUMN score Float
END

UPDATE TABLE Users
	ADD CONSTRAINT id UNIQUE
	ADD CONSTRAINT active DEFAULT false
	ADD CONSTRAINT score DEFAULT 0.0

INSERT INTO Users id = 1 name = 'Jane Smith'
INSERT INTO Users id = 2 name = 'John Jones'
INSERT INTO Users id = 3 name = 'Abby Sands'

SELECT FROM Users
	ORDER BY role
	GROUP BY role

DELETE FROM Users
	WHERE role ≠ Role.Administrator

DELETE TABLE Users
```


tuple = row
relation => table
attribute => column