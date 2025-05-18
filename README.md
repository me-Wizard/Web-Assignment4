# Portfolio Backend

## Setup

1. Clone the repo  
2. `npm install`  
3. Create a `.env` file (see `.env.example`)  
4. `npm run dev`

## API Endpoints

| Method | Route                   | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/api/education`        | Get all education items  |
| GET    | `/api/education/:id`    | Get a single education   |
| POST   | `/api/education`        | Create education         |
| PUT    | `/api/education/:id`    | Update education         |
| DELETE | `/api/education/:id`    | Delete education         |
| …      |                         |                          |

## Testing

- Import `postman_collection.json` in Postman to test all routes.

## Git Workflow

- `git checkout -b feature/mongodb-connection`
- `git checkout -b feature/education-crud`
- `git checkout -b feature/frontend-integration`
- Descriptive commits → Push → PRs → Merge to `main`.
