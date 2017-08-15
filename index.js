var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('HelloWorldIntent');
    },

    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }
 };

this.emit(':ask', 'What would you like to do?', 'Please say that again?');

var speechOutput = 'Hello world!';
var repromptSpeech = 'Hello again!';

this.emit(':tell', speechOutput);

this.emit(':ask', speechOutput, repromptSpeech);

var cardTitle = 'Hello World Card';
var cardContent = 'This text will be displayed in the companion app card.';

var imageObj = {
    smallImageUrl: 'https://imgs.xkcd.com/comics/standards.png',
    largeImageUrl: 'https://imgs.xkcd.com/comics/standards.png'
};

var permissionArray = ['read::alexa:device:all:address'];

var updatedIntent = this.event.request.intent;

var slotToElicit = "Slot to elicit";

var slotToConfirm = "Slot to confirm";

this.emit(':askWithCard', speechOutput, repromptSpeech, cardTitle, cardContent, imageObj);

this.emit(':tellWithCard', speechOutput, cardTitle, cardContent, imageObj);

this.emit(':tellWithLinkAccountCard', speechOutput);

this.emit(':askWithLinkAccountCard', speechOutput);

this.emit(':tellWithPermissionCard', speechOutput, permissionArray);

this.emit(':delegate', updatedIntent);

this.emit(':elicitSlot', slotToElicit, speechOutput, repromptSpeech, updatedIntent);

this.emit(':elicitSlotWithCard', slotToElicit, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent, imageObj);

this.emit(':confirmSlot', slotToConfirm, speechOutput, repromptSpeech, updatedIntent);

this.emit(':confirmSlotWithCard', slotToConfirm, speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent, imageObj);

this.emit(':confirmIntent', speechOutput, repromptSpeech, updatedIntent);

this.emit(':confirmIntentWithCard', speechOutput, repromptSpeech, cardTitle, cardContent, updatedIntent, imageObj);

this.emit(':responseReady'); // Called after the response is built but before it is returned to the Alexa service. Calls :saveState. Can be overridden.

this.emit(':saveState', false); // Handles saving the contents of this.attributes and the current handler state to DynamoDB and then sends the previously built response to the Alexa service. Override if you wish to use a different persistence provider. The second attribute is optional and can be set to 'true' to force saving.

this.emit(':saveStateError'); // Called if there is an error while saving state. Override to handle any errors yourself.



exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};