# Goal
My goal was show a slice of the architecture I would typically use for building an API and SPA with vuejs and asp net core 3.1.

# Startup Project for Development
You need to run both the API and Vue app.

## In a Terminal (or use VS) to run API
cd Jonathan.Contacts.App
dotnet run

## In A Separate Terminal
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

# TO DOES

* Add in validation to frontend and API
    * Validate the UserId to check against the User Collection
* Build the Contat UI page
* Migrate away from LiteDB (This was used as persistent proof of concept)
* Add in ViewModels to separate the Core/Entities from the Presentations
    * There are Ids were they are not needed
* A Service Layer would probably be nice to get between the repository and the controllers.

# What's Done

* Basic CRUD API against a persistent file store
* The Glue between all the layers of the frontend vuejs to the backend api
* Basic Bones for Onion Architecture

