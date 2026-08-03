# Library Management System (LMS) - Object-Oriented Analysis & Architectural Modeling

This document provides a comprehensive Object-Oriented Analysis (OOA) specification, 3-tier system architecture design, and Unified Modeling Language (UML) behavioral models for the Library Management System (LMS).

---

## 1. Requirement Analysis

### 1.1 Main System Actors
- **Member**: Library patron (Student, Faculty, or Regular Member) who searches catalog items, borrows books, returns books, reserves unavailable items, and pays outstanding fine balances.
- **Librarian**: System administrator responsible for catalog management (adding, updating, removing books), issuing and returning books on behalf of members, managing member registrations, and calculating fine fees.

### 1.2 Key Use Cases
1. **Search Book**: Search catalog by title, author, category, or ISBN.
2. **Issue / Borrow Book**: Check member eligibility, verify book availability, and create a borrow transaction with a due date.
3. **Return Book**: Process returned book, verify if overdue, calculate fine if applicable, and update book status to `AVAILABLE`.
4. **Reserve Book**: Reserve a currently issued book so the reserving member is notified upon return.
5. **Manage Catalog**: Add new titles, update copy status, or remove damaged/lost books.
6. **Pay Fines**: Settle member outstanding fine balance.

---

## 2. System Architecture Design (3-Tier Layered Architecture)

The Library Management System is structured using a clean 3-tier architecture to separate presentation, domain business rules, and data persistence layers.

```mermaid
graph TD
    subgraph Presentation_Layer [Presentation Layer / UI]
        UI1[Web Interface / CLI Console]
        UI2[Mobile App View]
    end

    subgraph Business_Logic_Layer [Business Logic Layer]
        BLL1[LibrarySystem Controller]
        BLL2[Catalog Service & Search Engine]
        BLL3[Transaction & Fine Processing Service]
    end

    subgraph Data_Access_Layer [Data Access & Persistence Layer]
        DAL1[Book Data Repository]
        DAL2[Member & Account Repository]
        DAL3[Transaction Storage]
    end

    UI1 --> BLL1
    UI2 --> BLL1
    BLL1 --> BLL2
    BLL1 --> BLL3
    BLL2 --> DAL1
    BLL3 --> DAL2
    BLL3 --> DAL3
```

---

## 3. Object-Oriented Analysis (OOA) & UML Diagrams

### 3.1 Use Case Diagram

```mermaid
useCaseDiagram
    actor Member
    actor Librarian

    rectangle "Library Management System (LMS)" {
        usecase "Search Book" as UC1
        usecase "Issue Book" as UC2
        usecase "Return Book" as UC3
        usecase "Reserve Book" as UC4
        usecase "Pay Fine" as UC5
        usecase "Manage Catalog (Add/Remove)" as UC6
    }

    Member --> UC1
    Member --> UC3
    Member --> UC4
    Member --> UC5

    Librarian --> UC1
    Librarian --> UC2
    Librarian --> UC3
    Librarian --> UC6
```

---

### 3.2 Class Diagram

```mermaid
classDiagram
    class Book {
        +String isbn
        +String title
        +String author
        +String category
        +BookStatus status
        +markAsIssued()
        +markAsReturned()
        +markAsReserved()
    }

    class BookStatus {
        <<enumeration>>
        AVAILABLE
        ISSUED
        RESERVED
        LOST
    }

    class Account {
        +String id
        +String name
        +String email
        +String getRole()
    }

    class Member {
        +int maxBorrowLimit
        +double fineBalance
        +List~Book~ activeLoans
        +canBorrow() bool
        +payFine(double amount)
    }

    class Librarian {
        +String employeeId
        +addBook(Book book)
        +removeBook(String isbn)
    }

    class BorrowTransaction {
        +String transactionId
        +Date borrowDate
        +Date dueDate
        +Date returnDate
        +bool isReturned
        +double fineAmount
        +calculateFine(Date currentDate) double
        +completeReturn()
    }

    class Catalog {
        +Map~String, Book~ books
        +addBook(Book book)
        +searchByTitle(String title) List~Book~
        +searchByAuthor(String author) List~Book~
    }

    class LibrarySystem {
        -LibrarySystem instance
        +getInstance() LibrarySystem
        +issueBook(String memberId, String isbn)
        +returnBook(String memberId, String isbn)
    }

    Account <|-- Member
    Account <|-- Librarian
    Book --> BookStatus
    Member "1" --> "*" BorrowTransaction : undertakes
    Book "1" --> "*" BorrowTransaction : referenced in
    Catalog "1" o-- "*" Book : contains
    LibrarySystem "1" --> "1" Catalog : uses
    LibrarySystem "1" --> "*" Account : manages
```

---

### 3.3 Sequence Diagram 1: Issue Book

```mermaid
sequenceDiagram
    autonumber
    actor Librarian
    participant UI as Presentation Layer
    participant LS as LibrarySystem Controller
    participant Cat as Catalog Service
    participant Mem as Member Entity
    participant Book as Book Entity
    participant Txn as BorrowTransaction

    Librarian ->> UI: Issue Book (Member ID, ISBN)
    UI ->> LS: issueBook(memberId, isbn)
    LS ->> Cat: getBookByIsbn(isbn)
    Cat -->> LS: return Book object
    LS ->> Mem: canBorrow()
    Mem -->> LS: true (under limit & no fines)
    LS ->> Book: markAsIssued()
    Book -->> LS: status updated to ISSUED
    LS ->> Txn: new BorrowTransaction(id, member, book, dueDate)
    Txn -->> LS: transaction created
    LS ->> Mem: activeLoans.add(book)
    LS -->> UI: Issue Confirmation (Success)
    UI -->> Librarian: Display Issue Receipt
```

---

### 3.4 Sequence Diagram 2: Return Book

```mermaid
sequenceDiagram
    autonumber
    actor Member
    participant UI as Presentation Layer
    participant LS as LibrarySystem Controller
    participant Txn as BorrowTransaction
    participant Book as Book Entity
    participant Mem as Member Entity

    Member ->> UI: Return Book (Member ID, ISBN)
    UI ->> LS: returnBook(memberId, isbn)
    LS ->> Txn: findActiveTransaction(memberId, isbn)
    Txn -->> LS: return Transaction object
    LS ->> Txn: completeReturn()
    Txn ->> Book: markAsReturned()
    Book -->> Txn: status updated to AVAILABLE
    LS ->> Txn: calculateFine(currentDate)
    Txn -->> LS: fineAmount (e.g. $5.00)
    alt fineAmount > 0
        LS ->> Mem: fineBalance += fineAmount
    end
    LS ->> Mem: activeLoans.remove(book)
    LS -->> UI: Return Confirmation
    UI -->> Member: Display Return Receipt & Fine Notice
```

---

### 3.5 State Diagram: Book Object Lifecycle

```mermaid
stateDiagram-v2
    [*] --> AVAILABLE : Book Added to Catalog

    AVAILABLE --> ISSUED : Borrow / Issue Book
    ISSUED --> RETURNED : Member Returns Book
    RETURNED --> AVAILABLE : Inspection Passed & Restocked

    ISSUED --> RESERVED : Reserved by Another Member
    RESERVED --> RETURNED : Member Returns Book
    RETURNED --> ISSUED : Re-issued to Reserving Member

    AVAILABLE --> LOST : Marked Lost/Damaged
    ISSUED --> LOST : Reported Lost by Member
    LOST --> [*]
```

---

## 4. Data, Functional, and Behavioral Modeling

### 4.1 Data Model (Entity Relationship & Structure)
- **Book Domain**: Encapsulates unique `isbn`, `title`, `author`, `category`, `status` (`AVAILABLE`, `ISSUED`, `RESERVED`, `LOST`).
- **Member Domain**: Encapsulates `id`, `name`, `email`, `maxBorrowLimit` (e.g. 5 books), `fineBalance`, and active loan references.
- **Transaction Domain**: Encapsulates immutable `transactionId`, references to `Member` and `Book`, timestamps (`borrowDate`, `dueDate`, `returnDate`), and computed fine fees.

### 4.2 Functional Model (System Functions)
1. **Catalog Functionality**: Add, update, search, and list catalog items.
2. **Circulation Functionality**: Issue books, return books, calculate fines, and manage reservations.
3. **Account Management**: Register members/librarians, track borrowing quotas, and process fine payments.

### 4.3 Behavioral Model (State Transitions)
- A `Book` moves deterministically through its state machine (`AVAILABLE` -> `ISSUED` -> `RETURNED` -> `AVAILABLE`).
- A `BorrowTransaction` transitions from `Active` (unreturned) to `Completed` (returned) upon return processing.
