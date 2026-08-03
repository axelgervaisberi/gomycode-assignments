# Library Management System - Core Components (JS)

Modular implementation of Library Management System Core Components using native Node.js ES Modules (`"type": "module"`), interface-like abstractions, dependency injection, reusable utility modules, and Design Patterns (**Factory**, **Strategy**, **Observer**).

## Architecture & Applied Concepts

### 1. Native ES Modules (`import` / `export`)
- Project configured with `"type": "module"` in `package.json`.
- All modules utilize explicit ES module imports and exports.

### 2. Interface-Like Abstractions (`src/abstractions/`)
- `AbstractUser.js`: Base user interface abstraction enforcing subclass contract implementation (`getMaxBorrowLimit()`, `getLoanPeriodDays()`).
- `IFineStrategy.js`: Fine calculation strategy interface abstraction enforcing `calculateFine(overdueDays)`.
- `IObserver.js`: Event listener interface abstraction enforcing `onEvent(eventName, payload)`.

### 3. Design Patterns (`src/patterns/`)
- **Factory Pattern (`UserFactory.js`)**: Encapsulates user creation for `StandardUser` and `VIPUser`.
- **Strategy Pattern (`FineStrategies.js`)**: Implements `StandardFineStrategy` and `VIPFineStrategy` allowing dynamic fine computation algorithm swapping.
- **Observer Pattern (`EventPublisher.js`)**: Decoupled event publication & subscription system notifying listeners on book events.

### 4. Dependency Injection (`src/services/LibraryManager.js`)
- `LibraryManager` constructor accepts `fineStrategy` and `eventPublisher` dependencies via constructor injection, enabling loose coupling and testability.

### 5. Reusable Utility Modules (`src/utils/`)
- `logger.js`: Centralized logging utility.
- `dateUtils.js`: Reusable date calculation utility.
- `validator.js`: Field and format validation utility.

## Project Structure

```
lms_core_components_js/
├── src/
│   ├── abstractions/
│   │   ├── AbstractUser.js
│   │   ├── IFineStrategy.js
│   │   └── IObserver.js
│   ├── patterns/
│   │   ├── UserFactory.js
│   │   ├── FineStrategies.js
│   │   └── EventPublisher.js
│   ├── models/
│   │   └── Book.js
│   ├── services/
│   │   └── LibraryManager.js
│   └── utils/
│       ├── logger.js
│       ├── dateUtils.js
│       └── validator.js
├── index.js
├── test.js
├── package.json
└── README.md
```

## How to Run

Run unit test suite:
```bash
npm test
```

Run CLI workflow demo:
```bash
npm start
```
