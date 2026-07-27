# DML Checkpoint

SQL script to insert the required rows into the database tables using Data Manipulation Language (DML).

## Data to Insert

### Customer Table
| Customer_id | Customer_Name | Customer_Tel |
| --- | --- | --- |
| C01 | ALI | 71321009 |
| C02 | ASMA | 77345823 |

### Product Table
| Product_id | Product_Name | Category | Price |
| --- | --- | --- | --- |
| P01 | Samsung Galaxy S20 | Smartphone | 3299 |
| P02 | ASUS Notebook | PC | 4599 |

### Orders Table
| Customer_id | Product_id | OrderDate | Quantity | Total_amount |
| --- | --- | --- | --- | --- |
| C01 | P02 | NULL | 2 | 9198 |
| C02 | P01 | 28/05/2020 | 1 | 3299 |

## Notes

- We insert into `Customer` and `Product` first since `Orders` references them with foreign keys.
- For the first order, `OrderDate` is explicitly set to `NULL` to override any default date value.

The complete script is in [solution.sql](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/dml/solution.sql).
