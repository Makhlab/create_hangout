# Hangout Creation

This is some sample code to dynamically create Google hangouts using Javascript

## Preparation

Set up the project

* npm install googleapis
* npm install readline

Set up the calendar

* Create a Google Account
* Visit https://www.google.com/calendar
* Go to settings in the Cog
* Change "Automatically add video calls to events that I create" to Yes

Set up the API

* Visit Google Developers Console https://console.developers.google.com/project
* Create a Project
* Visit the project
* Click on "Consent Screen"
* Fill in the details
* Visit "APIs"
* Enable Google Calendar
* Visit Credentials
* Create a new OATH ID
* Leave URLS as example.com
* Fill these details into the generate_tokens script

Generate the initial tokens
* nodejs generate_tokens.js
* Copy the tokens into all the scripts

Fine the calendar
* nodejs list_calendars
* Copy the calendar id into the cal.js script

Create a hangout
* nodejs cal.js


