var readline = require('readline');
var google = require('googleapis');

var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'FILL ME IN';
var CLIENT_SECRET = 'FILL ME IN';
var REDIRECT_URL = 'https://www.example.com/oauth2callback';

var scopes = [
 'https://www.googleapis.com/auth/calendar'
];

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
      scope: scopes,
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code) {
    // request access token
    oauth2Client.getToken(code, function(err, tokens) {
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.setCredentials(tokens);
      console.log("Put the tokens in your app:\n\n");
      console.log(tokens);
    });
  });

