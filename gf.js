// Get the form element
var form = document.querySelector('form[action="ask.php"]');

// Get the input elements in the form
var inputs = form.querySelectorAll('input[type=text]');

// Extract the values of the input elements
var values = [];
for (var i = 0; i < inputs.length; i++) {
  values.push(inputs[i].value);
}

// Use the Google Sheets API to write the values to the specified file
// (assuming you have already set up authentication and authorized the app to write to the file)
var sheets = google.sheets('v4');
sheets.spreadsheets.values.update({
  spreadsheetId: '1zVvU0_VzrjmcOl33E4BOKhlsGt26cQQVnpV8R4AJvSw',
  range: 'Sheet1!A1:F1',
  valueInputOption: 'RAW',
  resource: {
    values: [values]
  }
}, function(err, response) {
  if (err) {
    // Handle the error
    console.error(err);
  } else {
    // The values have been written to the Google Sheets file
    console.log('Values written to Google Sheets');
  }
});
