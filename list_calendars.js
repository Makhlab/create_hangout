var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var calendar = google.calendar('v3');

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'FILL ME IN';
var CLIENT_SECRET = 'FILL ME IN';
var REDIRECT_URL = 'https://www.example.com/oauth2callback';
var tokens = {
  access_token: 'FILL ME IN',
  token_type: 'FILL ME IN',
  expiry_date: FILL_ME_IN
};

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oauth2Client.setCredentials(tokens);
google.options({ auth: oauth2Client });

calendar.calendarList.list({}, function(err, result) {
  if (err) {
    console.log("Couldn't get list");
    console.log(err);
    exit();
  }
  console.log(result);
});

