// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'Hello Greeting',
    prompt: 'Hello',
    handler: function () {
      return 'Hello, welcome to JP\'s baseball info bot. Please enter your name to get started.';
    },
    isListening: true,
  },
  {
    label: 'Name Entry',
    prompt: 'My name is #{firstName}',
    handler: function (params) {
      return 'Thank you ' + params.firstName + ' how can I help you today?';
    },
    isListening: true,
  },
  {
    label: 'Batting Average Calculation',
    prompt: 'If I have #{seasonHits} hits and #{seasonAtBats} at bats what is my batting average?',
    handler: function (params) {
      var battingAverage = params.seasonHits / params.seasonAtBats;
      return 'Your batting average is ' + battingAverage;
    },
    isListening: true,
  },
  {
    label: 'World Series Question',
    prompt: 'Who will win the World Series in 2021?',
    handler: function (params) {
      var baseballTeams = ['New York Yankees','Boston Red Sox','Los Angeles Dodgers','Houston Astros'];
      var winningTeam = baseballTeams[Math.floor(Math.random() * baseballTeams.length)];
      return 'The ' + winningTeam + ' , who do you think will?';
    },
    isListening: true,
  },
  {
    label: 'World Series User Answer',
    prompt: 'I think it will be the #{baseballTeam}',
    handler: function (params) {
      if (params.baseballTeam === 'New York Yankees') {
        return 'Possibly, but they always choke in the playoffs';
      }
      else if (params.baseballTeam === 'Boston Red Sox'){
        return 'If they spend more money, sure';
      }
      else if (params.baseballTeam === 'Houston Astros'){
        return 'If they can\'t cheat, they can\'t win!';
      }
      else if (params.baseballTeam === 'Los Angeles Dodgers'){
        return 'Two years in a row? I doubt it.';
      }
      else {
        return 'Ha, no shot pal';
      }
    },
    isListening: true,
  },
  {
    label: 'Highest Winning Percentage',
    prompt: 'Which team in the American League had the highest winning percentage last year?',
    handler: function () {
      var winningPercentages = {
        'Tampa Rays': 0.667,
        'New York Yankees': 0.550,
        'Toronto Blue Jays': 0.533,
        'Baltimore Orioles': 0.417,
        'The Boston Red Sox': 0.400
      };
      var highestPercentage = Math.max.apply(null, Object.values(winningPercentages)),
        val = Object.keys(winningPercentages).find(function (a) {
          return winningPercentages[a] === highestPercentage;
        });

      return 'The ' + val;
    },
    isListening: true,
  },
  {
    label: 'Lowest Winning Percentage',
    prompt: 'Which team in the American League had the lowest winning percentage last year?',
    handler: function () {
      var winningPercentages = {
        'Tampa Rays': 0.667,
        'New York Yankees': 0.550,
        'Toronto Blue Jays': 0.533,
        'Baltimore Orioles': 0.417,
        'Boston Red Sox': 0.400
      };
      var lowestPercentage = Math.min.apply(null, Object.values(winningPercentages)),
        val = Object.keys(winningPercentages).find(function (a) {
          return winningPercentages[a] === lowestPercentage;
        });

      return 'The ' + val;
    },
    isListening: true,
  },
];
