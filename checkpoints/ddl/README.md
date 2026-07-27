# DDL Checkpoint

SQL script to set up the relational model tables and apply the required column modifications.

## Tables and Constraints

1. **Customer**
   - `Customer_id` (VARCHAR2(20)): Primary Key
   - `Customer_Name` (VARCHAR2(20)): NOT NULL
   - `Customer_Tel` (NUMBER)

2. **Product**
   - `Product_id` (VARCHAR2(20)): Primary Key
   - `Product_Name` (VARCHAR2(20)): NOT NULL
   - `Price` (NUMBER): Positive value check (> 0)

3. **Orders**
   - `Customer_id` & `Product_id` (VARCHAR2(20)): Composite Primary Key and Foreign Keys referencing Customer and Product tables
   - `Quantity` (NUMBER)
   - `Total_amount` (NUMBER)

## Column Additions

- Added `Category` (VARCHAR2(20)) to the **Product** table.
- Added `OrderDate` (DATE) with default value `SYSDATE` to the **Orders** table.

You can find the full script in [solution.sql](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/ddl/solution.sql).
