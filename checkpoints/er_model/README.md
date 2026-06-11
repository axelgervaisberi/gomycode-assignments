# Gym Management System ER Diagram

This directory contains the Entity-Relationship (ER) diagram for the Gym Management System checkpoint.

## ER Diagram

The following ER diagram was created using [Mermaid](https://mermaid.js.org/).

```mermaid
erDiagram

    GYMNASIUM ||--o{ MEMBER : registers
    GYMNASIUM ||--o{ SESSION : offers

    MEMBER ||--o{ REGISTRATION : has
    SESSION ||--o{ REGISTRATION : contains

    COACH ||--o{ COACH_SESSION : assigned_to
    SESSION ||--o{ COACH_SESSION : led_by

    GYMNASIUM {
        int gym_id PK
        string name
        string address
        string phone_number
    }

    MEMBER {
        int member_id PK
        string last_name
        string first_name
        string address
        date date_of_birth
        string gender
        int gym_id FK
    }

    SESSION {
        int session_id PK
        string sport_type
        string schedule
        int max_members
        int gym_id FK
    }

    COACH {
        int coach_id PK
        string last_name
        string first_name
        int age
        string specialty
    }

    REGISTRATION {
        int registration_id PK
        int member_id FK
        int session_id FK
        date registration_date
    }

    COACH_SESSION {
        int coach_session_id PK
        int coach_id FK
        int session_id FK
    }
```
