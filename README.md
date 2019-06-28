# Telegram Bot Boilerplate

Easy to use and setup telegram boiler plate based on [Telegraf](https://telegraf.js.org)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Get a bot from bot father
[Instructions](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

- Node.js
- Google Sheets API Credentials
[Instructions](https://developers.google.com/sheets/api/guides/authorizing)

### Development

Create your own `.env` file by referencing the `.env.sample` file.

```bash
# Install all required dependencies
npm install

# Lint files
npm run lint

# Run dev environment with nodemon
npm run dev
```

### Coding Style

Strictly following [Standard](https://standardjs.com). Enforced by [ESLint](https://eslint.org/)

## Deployment

```bash
# Run this in production environment. Make sure .env file exists too.
npm start
```

## Contributing

Feel free to submit PRs
