function doPost(event) {

  var inputText = e.parameter.text;
  var channelName = e.parameter.channel_id;

  var Place = new Place(inputText);

  return ContentService.createTextOutput(JSON.stringify(event)).setMimeType(ContentService.MimeType.JSON);
}

// for Local Test
if (typeof module !== 'undefined') {
  module.exports = {
    doPost
  }
}
