# Blog client
Client for personal blog

## Setup
To get the project running locally:
- Add a .env file with the required environment variables on the root folder. These variables must me provided to you.
- Install dependencies and run the project:
	```
	nvm use && npm install
	```

## Run
- When all the dependencies are set simply run:
	```
	npm run start:dev
	```
- The project uses an linter to check for common mistakes while coding (unused imports and variables, missing `;`, extra whitespaces, etc.). It will show the location and the warning on the console. Please fix them before pushing your work.
	- For more info on rules visit: [eslint's rules page](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)

## Naming convention & file structure
- Files:
	- `unique-name.type.filetype` where the `type` is the type of code that it is going to contain (function, hook, component, page, etc):
        ```
        .
        └── src
           ├── components
           │  └── button
           │     ├── button.component.tsx
           │     └── button.style.tsx
           └── lib
           .  └── hooks
           .     └── use-input.hook.ts
        ```

- Folders:
	- These don't have specific names, use as required but they must be meaningful. For example, if you need an `utils` folder to store common values, use: 
        ```
        .
        └── src
           ├── utils
           .  └── values
           .     ├── days.value.ts
           .     └── months.value.ts
        ```

- Branches:
	- `[Intention]/[card-number]/[short-description]`, for example:
		- Feat/1234356/new-images-handler
		- Chore/1234357/refactor-files

- Commits:
  - `[intention]: [short-description]`, for example:
	  - `update: [short-description]`: For updates being done to the server. Package updates, folder structure changes, etc.
	  - `feat: [short-description]`: New features. New packages, queries, mutations, schemas, etc.
	  - `fix: [short-description]`: Bugfixes. Queries that are failing, wrong responses, wrong updates, etc.
	  - `test: [short-description]`: Test being added to the project or update the to the current ones.
