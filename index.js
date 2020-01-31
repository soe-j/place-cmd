function doGet(event) {
  return ContentService.createTextOutput(JSON.stringify(event)).setMimeType(ContentService.MimeType.JSON);
}
