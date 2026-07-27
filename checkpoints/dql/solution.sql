-- 1. display all customers data
SELECT * 
FROM Customer;

-- 2. display product name and category for products priced between 5000 and 10000
SELECT Product_Name, Category 
FROM Product 
WHERE Price BETWEEN 5000 AND 10000;

-- 3. display all products sorted by price descending
SELECT * 
FROM Product 
ORDER BY Price DESC;

-- 4. display total orders, average amount, max amount and min amount
SELECT 
    COUNT(*) AS total_orders, 
    AVG(Total_amount) AS average_amount, 
    MAX(Total_amount) AS highest_amount, 
    MIN(Total_amount) AS lowest_amount 
FROM Orders;

-- 5. display number of orders for each product_id
SELECT Product_id, COUNT(*) AS number_of_orders 
FROM Orders 
GROUP BY Product_id;

-- 6. display customer_id with more than 2 orders
SELECT Customer_id 
FROM Orders 
GROUP BY Customer_id 
HAVING COUNT(*) > 2;

-- 7. display number of orders for each month of 2020
SELECT EXTRACT(MONTH FROM OrderDate) AS order_month, COUNT(*) AS number_of_orders 
FROM Orders 
WHERE EXTRACT(YEAR FROM OrderDate) = 2020 
GROUP BY EXTRACT(MONTH FROM OrderDate);

-- 8. display product_name, customer_name and order date for each order
SELECT p.Product_Name, c.Customer_Name, o.OrderDate 
FROM Orders o 
JOIN Customer c ON o.Customer_id = c.Customer_id 
JOIN Product p ON o.Product_id = p.Product_id;

-- 9. display orders made 3 months ago
SELECT * 
FROM Orders 
WHERE OrderDate >= ADD_MONTHS(SYSDATE, -3);

-- 10. display customers who have never ordered a product
SELECT Customer_id 
FROM Customer 
WHERE Customer_id NOT IN (SELECT Customer_id FROM Orders);
