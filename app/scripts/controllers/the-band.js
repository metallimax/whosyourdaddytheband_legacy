'use strict';

angular.module('controllers')
  .controller('TheBandCtrl', ['$scope', function ($scope) {
    $scope.band = [
      {
        name: 'Max',
        bio: 'This is Max\' bio',
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
        bio: 'This is David\'s bio',
        instruments: ['Drums'],
        gears: {
          'Drum Kit': ['??']
        }
      },
      {
        name: 'Benji',
        bio: 'This is Benji\'s bio',
        instruments: ['Bass'],
        gears: {
          'Bass': ['LTD B-1005'],
          'Effects': ['Dunlop Bass Q Crybaby Wha', 'Bass Overdrive Boss ODB-3']
        }
      }
    ];
  }]);
