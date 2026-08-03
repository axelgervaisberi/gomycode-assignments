# Smart Library Management System - Low Level Design (OOD)

An Object-Oriented Library Management System built with JavaScript (Node.js) applying solid OOD principles, encapsulation, polymorphism, inheritance, and software design patterns.

## 🏗️ Design Patterns Applied

### 1. Singleton Pattern (`LibrarySystem`)
- **Class**: `LibrarySystem` ([services/LibrarySystem.js](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/smart_library_management_system/services/LibrarySystem.js))
- **Purpose**: Guarantees a single central library system instance coordinating users, catalog books, transactions, and notification services via `LibrarySystem.getInstance()`.

### 2. Factory Pattern (`UserFactory`)
- **Class**: `UserFactory` ([models/UserFactory.js](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/smart_library_management_system/models/UserFactory.js))
- **Purpose**: Encapsulates user instantiation logic for `Student` (3-book limit, 14 days) and `Teacher` (10-book limit, 30 days) extending the abstract `User` base class.

### 3. Observer Pattern (`NotificationService`)
- **Class**: `NotificationService` ([services/NotificationService.js](file:///c:/Users/aberi/Documents/perso/GoMyCode/checkpoints/smart_library_management_system/services/NotificationService.js))
- **Purpose**: Implements a Subject/Observer event system where registered users automatically receive notifications upon book borrowing, returning, and overdue alerts.

---

## 📁 System Architecture

```
smart_library_management_system/
├── models/
│   ├── User.js               # Abstract base User class, Student & Teacher subclasses
│   ├── UserFactory.js        # Factory pattern class creating User instances
│   ├── Book.js               # Book domain model with availability state
│   └── BorrowTransaction.js  # Transaction model tracking loan dates and due status
├── services/
│   ├── NotificationService.js# Observer pattern subject managing user notifications
│   └── LibrarySystem.js      # Singleton pattern main facade class
├── demo.js                   # Interactive CLI demonstration
├── test.js                   # Unit test suite
├── package.json
└── README.md
```

---

## 🚀 Execution & Verification

### 1. Run Unit Tests
```bash
npm test
```

### 2. Run Interactive Demo
```bash
npm start
```
