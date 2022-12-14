function saveFormResponses() {
  // Get the form element
  var formElement = document.querySelector("form");

  // Create an object to store the form responses
  var formResponses = {};

  // Loop through all the form elements
  for (var i = 0; i < formElement.elements.length; i++) {
    var inputElement = formElement.elements[i];

    // If the element is a text input, add its value to the form responses object
    if (inputElement.type == "text") {
      formResponses[inputElement.name] = inputElement.value;
    }
  }

  // Replace the URL below with the URL of your Google Sheets file
  const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1zVvU0_VzrjmcOl33E4BOKhlsGt26cQQVnpV8R4AJvSw/edit?usp=sharing";

  // Initialize the Sheets API
  const sheets = GoogleSheetsAPI.initialize();

  // Append the form responses to the bottom of the sheet
  sheets.append(SPREADSHEET_URL, formResponses);
}
