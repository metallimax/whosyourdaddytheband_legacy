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
        gears: {
          'Guitars': ['Jackson RR', 'Jackson Kelly'],
          'Effects': [
            'Dunlop Crybaby Wha',
            'Visual Sound Double Trouble',
            'Boss Harmonist PS-6',
            'MXR Phaser Phase 90',
            'T-Rex Tonebug Chorus/Flanger',
            'MXR Boost MC-401',
            'G-Lab Smooth Delay SD-1',
            'Boss Metal Zone MT-2'
          ],
          'Amplifiers': [
            'Marshall JCM 2000 DSL 401',
            'Peavey Ultra+ w/ Marshall 1960AV Cabinet'
          ],
          'Looper/Switcher': [
            'G-Lab GSC-3',
            'G-Lab MIDI 2x Loop M2L (x2)'
          ],
          'Other': [
            'tc electronic Polytune Tuner',
            'ISP Noise Gate Decimator G String'
          ]
        }
      },
      {
        name: 'David',
        avatar: 'images/profiles/david.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
        instruments: ['Drums'],
        gears: {
          'Drum Kit': ['??']
        }
      },
      {
        name: 'Benji',
        avatar: 'images/profiles/benji.png',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, molestias et commodi veritatis cupiditate reprehenderit quibusdam dolorum esse saepe illum excepturi vel aliquam temporibus molestiae natus necessitatibus aliquid quis in!',
        instruments: ['Bass'],
        gears: {
          'Bass': ['LTD B-1005'],
          'Effects': ['Dunlop Bass Q Crybaby Wha', 'Bass Overdrive Boss ODB-3']
        }
      }]
    };
  }]);
