'use strict';

angular.module('controllers')
  .controller('TheBandCtrl', ['$scope', function ($scope) {
    $scope.band = {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
      members: [{
        name: 'Max',
        avatar: 'images/profiles/max.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
        instruments: ['Guitar', 'Vocals'],
        gears: [
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
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
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
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
        instruments: ['Bass'],
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
