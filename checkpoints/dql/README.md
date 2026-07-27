# DQL Checkpoint

SQL queries to retrieve data from the `Customer`, `Product`, and `Orders` tables based on the required criteria.

## Queries Overview

1. **Display all customer data** — Selects all rows and columns from `Customer`.
2. **Products between 5000 and 10000** — Filters `Product_Name` and `Category` by price range using `BETWEEN`.
3. **Sorted products** — Retrieves all products ordered by `Price DESC`.
4. **Order statistics** — Aggregates `Orders` data for total count, average, max, and min amounts.
5. **Orders per product** — Groups `Orders` by `Product_id` and counts them.
6. **Active customers** — Filters customers with more than 2 orders using `HAVING COUNT(*) > 2`.
7. **Monthly orders in 2020** — Groups orders by month for the year 2020.
8. **Order details join** — Joins `Orders`, `Customer`, and `Product` tables to display product name, customer name, and order date.
9. **Orders from 3 months ago** — Filters orders placed in the last 3 months.
10. **Customers without orders** — Finds customer IDs not present in the `Orders` table using `NOT IN`.

The full queries can be viewed in [solution.sql](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/dql/solution.sql).
