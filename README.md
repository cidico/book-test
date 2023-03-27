# Welcome to my Royal Library test!

Please note that as the challenge itself is not very complicated I built the most simplistic application as well.

I am freely available to answer to any question you may have regarding the source code and possible changes.

I hope you like it.

## The projects are separated in 2 folders:

- royal-library
- royal-library-backend

Please follow the following steps to be able to run the application.

# Backend Project

1. Edit the appsettings.json files and add your the connection string to your SQL Server database. The file is located at: /royal-library-backend/RoyalLibrary/RoyalLibrary.API folder.

2. Go to the royal-library-backend folder and run this command:

```bash
dotnet run
```

This command will build and run the backend part of the application.

Please not that the backend is responsible for recreating the database at each iteration.

# Frontend Project

1. Go to the royal-library folder and the following commands:

```bash
npm install

npm run dev
```

2. Follow the instructions outputed by the npm tool and open the address it returns at your browser.
