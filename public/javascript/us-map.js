
$(document).ready(() => {
  initializeMap();
});


initializeMap = function () {
  $('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    multiSelectRegion: true,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick(element, code, region) {
      const message = `You clicked "${region}" which has the code: ${code.toUpperCase()}`;
      console.log(message);
    },
  });
};


resetMap = function () {
  $('#vmap').vectorMap('deselect', 'us');
};

const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    answered: false,
  },

  {
    name: 'Alaska',
    abbreviation: 'AK',
    answered: false,
  },

  {
    name: 'Arizona',
    abbreviation: 'AZ',
    answered: false,
  },

  {
    name: 'Arkansas',
    abbreviation: 'AR',
    answered: false,
  },

  {
    name: 'California',
    abbreviation: 'CA',
    answered: false,
  },

  {
    name: 'Colorado',
    abbreviation: 'CO',
    answered: false,
  },

  {
    name: 'Connecticut',
    abbreviation: 'CT',
    answered: false,
  },

  {
    name: 'Delaware',
    abbreviation: 'DE',
    answered: false,
  },

  {
    name: 'Florida',
    abbreviation: 'FL',
    answered: false,
  },

  {
    name: 'Georgia',
    abbreviation: 'GA',
    answered: false,
  },

  {
    name: 'Hawaii',
    abbreviation: 'HI',
    answered: false,
  },

  {
    name: 'Idaho',
    abbreviation: 'ID',
    answered: false,
  },

  {
    name: 'Illinois',
    abbreviation: 'IL',
    answered: false,
  },

  {
    name: 'Indiana',
    abbreviation: 'IN',
    answered: false,
  },

  {
    name: 'Iowa',
    abbreviation: 'IA',
    answered: false,
  },

  {
    name: 'Kansas',
    abbreviation: 'KS',
    answered: false,
  },

  {
    name: 'Kentucky',
    abbreviation: 'KY',
    answered: false,
  },

  {
    name: 'Louisiana',
    abbreviation: 'LA',
    answered: false,
  },

  {
    name: 'Maine',
    abbreviation: 'ME',
    answered: false,
  },

  {
    name: 'Maryland',
    abbreviation: 'MD',
    answered: false,
  },

  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    answered: false,
  },

  {
    name: 'Michigan',
    abbreviation: 'MI',
    answered: false,
  },

  {
    name: 'Minnesota',
    abbreviation: 'MN',
    answered: false,
  },

  {
    name: 'Mississippi',
    abbreviation: 'MS',
    answered: false,
  },

  {
    name: 'Missouri',
    abbreviation: 'MO',
    answered: false,
  },

  {
    name: 'Montana',
    abbreviation: 'MT',
    answered: false,
  },

  {
    name: 'Nebraska',
    abbreviation: 'NE',
    answered: false,
  },

  {
    name: 'Nevada',
    abbreviation: 'NV',
    answered: false,
  },

  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    answered: false,
  },

  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    answered: false,
  },

  {
    name: 'New Mexico',
    abbreviation: 'NM',
    answered: false,
  },

  {
    name: 'New York',
    abbreviation: 'NY',
    answered: false,
  },

  {
    name: 'North Carolina',
    abbreviation: 'NC',
    answered: false,
  },

  {
    name: 'North Dakota',
    abbreviation: 'ND',
    answered: false,
  },

  {
    name: 'Ohio',
    abbreviation: 'OH',
    answered: false,
  },

  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    answered: false,
  },

  {
    name: 'Oregon',
    abbreviation: 'OR',
    answered: false,
  },

  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    answered: false,
  },

  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
    answered: false,
  },

  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    answered: false,
  },

  {
    name: 'South Carolina',
    abbreviation: 'SC',
    answered: false,
  },

  {
    name: 'South Dakota',
    abbreviation: 'SD',
    answered: false,
  },

  {
    name: 'Tennessee',
    abbreviation: 'TN',
    answered: false,
  },

  {
    name: 'Texas',
    abbreviation: 'TX',
    answered: false,
  },

  {
    name: 'Utah',
    abbreviation: 'UT',
    answered: false,
  },

  {
    name: 'Vermont',
    abbreviation: 'VT',
    answered: false,
  },

  {
    name: 'Virginia',
    abbreviation: 'VA',
    answered: false,
  },

  {
    name: 'Washington',
    abbreviation: 'WA',
    answered: false,
  },

  {
    name: 'West Virginia',
    abbreviation: 'WV',
    answered: false,
  },

  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    answered: false,
  },

  {
    name: 'Wyoming',
    abbreviation: 'WY',
    answered: false,
  },
];
