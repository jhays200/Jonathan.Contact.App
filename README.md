# Goal
My goal was show a slice of the architecture I would typically use for building an API and SPA with vuejs and asp net core 3.1.

# Startup Project for Development
You need to run both the API and Vue app.

## In Terminal (or use VS) to run API
cd Jonathan.Contacts.App
dotnet run

## In Terminal
cd Jonathan.Contacts.App.Vue
npm install
npm run serve

## To Update TS API Client
npm run nswag

## Navigate to http://localhost:8080 for landing page
## Navigate to http://localhost:5000/swagger to work with the API

# Setup Project for Production Builds

## NPM Build Steps
cd Jonathan.Contacts.App.Vue
npm install
npm run build

## dotnet Publish
cd Jonathan.Contacts.App
dotnet publish

# TODOES

* Add in validation to frontend and API
* Flush out Contact UI 
