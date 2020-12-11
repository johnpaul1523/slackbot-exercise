// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  // Write an interaction where one user says "I'm tired", the bot says "Wake up!"
  //
  // mychatbot> I'm tired
  // mychatbot responds "Wake up!"
  {
    label: 'Wake Up Prompt',
    prompt: 'I\'m tired',
    handler: function () {
      return 'Wake Up!';
    },
    isReply: false,
    isCaseSensitive: false,
    isListening: false,
  },

  // Write an interaction where one user asks the bot 
  // "What's the area of a circle with radius X?" where X is any number
  // The chatbot will respond to the user with the answer.
  // 
  // mychatbot> mychatbot What's the area of a circle with radius 5?
  // mychatbot responds to user "The area is 78.5398...."
  {
    label: 'Circle Area Prompt',
    prompt: 'What is the area of a circle with radius #{radiusCircle}?',
    handler: function calculateArea (params) {
      var circleArea = params.radiusCircle * params.radiusCircle * Math.PI;
      return (
        'The area is ' + 
        circleArea
      );
    },
    isListening: true,
  },




  // Write an interaction where one user asks the bot 
  // "Tell me a story with NAME1 and NAME2" where NAME1 and NAME2 is any string
  // The chatbot will respond with the answer.
  // 
  // mychatbot> mychatbot Tell me a story with Jack and Jill
  // mychatbot responds to user "Jack and Jill went up the hill to fetch a pail of water."
  {
    label: 'Story Prompt',
    prompt: 'Tell me a story with #{NAME1} and #{NAME2}',
    handler: function (params) {
      return params.NAME1 + ' and ' + params.NAME2 + ' went up the hill to fetch a pail of water.';
    },
    isListening: true,
  },
];
