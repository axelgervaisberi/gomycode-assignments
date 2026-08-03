# Library Management System (LMS) - OOA & Architectural Modeling Checkpoint

An Object-Oriented Analysis (OOA) specification, 3-tier system architecture design, and JavaScript software implementation for a Library Management System (LMS).

## Key Features & Architecture

- **Requirement Analysis**: Defines system actors (`Member`, `Librarian`) and key use cases (Search Book, Issue Book, Return Book, Reserve Book, Pay Fine).
- **3-Tier System Architecture**: Presentation UI Layer, Business Logic Layer (Catalog Service, LibrarySystem Controller), and Data Access Layer.
- **UML Modeling Specifications ([SYSTEM_ARCHITECTURE_AND_OOA.md](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/library_management_system/SYSTEM_ARCHITECTURE_AND_OOA.md))**:
  - **Use Case Diagram**: System interactions between actors and use cases.
  - **Class Diagram**: Detailed OOP class structures, attributes, methods, inheritance, and associations.
  - **Sequence Diagrams**: Step-by-step messaging timelines for `Issue Book` and `Return Book` operations.
  - **State Diagram**: State machine transitions for `Book` objects (`AVAILABLE` -> `ISSUED` -> `RESERVED` -> `RETURNED`).
- **Clean Software Implementation (`src/`)**:
  - `src/models/`: `Book.js`, `Member.js`, `Librarian.js`, `Transaction.js`.
  - `src/services/`: `Catalog.js`, `LibrarySystem.js`.

## Project Structure

```
library_management_system/
├── src/
│   ├── models/
│   │   ├── Book.js
│   │   ├── Member.js
│   │   ├── Librarian.js
│   │   └── Transaction.js
│   └── services/
│       ├── Catalog.js
│       └── LibrarySystem.js
├── SYSTEM_ARCHITECTURE_AND_OOA.md
├── demo.js
├── test.js
├── package.json
└── README.md
```

## How to Run

1. Run unit tests:
   ```bash
   npm test
   ```

2. Run interactive CLI demo:
   ```bash
   npm start
   ```
