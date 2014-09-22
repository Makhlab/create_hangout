var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var calendar = google.calendar('v3');

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'FILl ME IN';
var CLIENT_SECRET = 'FILl ME IN';
var REDIRECT_URL = 'https://www.example.com/oauth2callback';
var tokens = {
  access_token: 'FILL ME IN',
  token_type: 'Bearer',
  expiry_date: FILL_ME_IN
};

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oauth2Client.setCredentials(tokens);
google.options({ auth: oauth2Client });

var cal_id = 'FILL ME IN';
resource = {
  summary: 'Temp hangout',
  location: 'The Internet',
  start: {
    dateTime: '2011-06-03T10:00:00.000-07:00'
  },
  end: {
    dateTime: '2011-06-03T10:25:00.000-07:00'
  }
};

calendar.events.insert({calendarId: cal_id, resource: resource}, function(err, result) {
  console.log(err);
  console.log(result);
});
