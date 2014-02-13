'use strict';

angular.module('controllers')
  .controller('TheBandCtrl', ['$scope', '$sce', function ($scope, $sce) {
    $scope.band = {
      // bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
      bio: $sce.trustAsHtml([
        '<code>Who\'s Your Daddy?</code> is a band born in <em>2010</em>.',
        'At the begining it was the encounter of Max and Sylvain (bass player).',
        'After a while looking for partners, they finally found a drummer (in the person of David) that matched with Max spirit.',
        'Unfortunately, Sylvain thought that the style went too heavy/fast so he decided to left the band.',
        'Benji, a former neighboor of David who is a bass player was involved in the challenge of this young band.',
        'After a while looking for another guitarist, we finally decide to stay this aggressive trio, composing songs one at a time ...'
      ].join('<br/>\n')),
      members: [{
        name: 'Max',
        avatar: 'images/profiles/max.png',
        bio: $sce.trustAsHtml([
          '<code>Max</code> is a long time guitar player ... but alone (or with his brother JoZ at time).',
          'After studies, sport and family, he decided it was the time to form a band.',
          'This is how the story begins.',
          'As a huge fan of MetallicA and more recently Machine Head, he is the most thrash oriented dude of the trio.'
        ].join('<br/>\n')),
        instruments: ['Guitar', 'Vocals'],
        gears: [
          {
            type: 'Microphone',
            gears: ['Shure 55 w/ custom bent stand']
          },
          {
            type: 'Guitars',
            gears: ['Jackson RR', 'Jackson Kelly']
          },
          {
            type: 'Amplifiers',
            gears: [
              'Marshall JCM 2000 DSL 401',
              'Peavey Ultra+ w/ Marshall 1960AV Cabinet'
            ]
          },
          {
            type: 'Effects',
            gears: [
              'Dunlop Crybaby Wha',
              'Visual Sound Double Trouble',
              'Boss Harmonist PS-6',
              'MXR Phaser Phase 90',
              'T-Rex Tonebug Chorus/Flanger',
              'MXR Boost MC-401',
              'G-Lab Smooth Delay SD-1',
              'Morley Alligator Volume',
              'Boss Metal Zone MT-2'
            ]
          },
          {
            type: 'Looper/Switcher',
            gears: [
              'G-Lab GSC-3',
              'G-Lab MIDI 2x Loop M2L (x2)'
            ]
          },
          {
            type: 'Other',
            gears: [
              'tc electronic Polytune Tuner',
              'ISP Noise Gate Decimator G String'
            ]
          }
        ]
      },
      {
        name: 'David',
        avatar: 'images/profiles/david.png',
        bio: $sce.trustAsHtml([
          'Coming soon ...'
        ].join('<br/>\n')),
        instruments: ['Drums'],
        gears: [
          {
            type: 'Drum Kit',
            gears: ['??']
          }
        ]
      },
      {
        name: 'Benji',
        avatar: 'images/profiles/benji.png',
        bio: $sce.trustAsHtml([
          'Coming soon ...'
        ].join('<br/>\n')),
        instruments: ['Bass', 'Backing Vocals'],
        gears: [
          {
            type: 'Bass',
            gears: ['LTD B-1005']
          },
          {
            type: 'Effects',
            gears: ['Dunlop Bass Q Crybaby Wha', 'Bass Overdrive Boss ODB-3']
          }
        ]
      }]
    };
  }]);
