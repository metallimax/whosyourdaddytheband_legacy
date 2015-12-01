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
        'After a while looking for another guitarist, we finally found André to fill this role, composing songs one at a time ...',
        'Then André left the band to go study in Belgium.',
        'After a while, Pierre-Yves came to fille the empty space at guitar and filled it very well!'
      ].join('<br/>\n')),
      members: [{
        name: 'Max',
        // avatar: 'images/profiles/max.png',
        bio: $sce.trustAsHtml([
          '<code>Max</code> is a long time guitar player ... but alone (or with his brother JoZ at time).',
          'After studies, sport and family, he decided it was the time to form a band.',
          'This is how the story begins.',
          'As a huge fan of <code>MetallicA</code> and more recently <code>Machine Head</code>, his play is really thrash oriented.'
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
              'Peavey XXX II w/ Marshall 1960AV Cabinet',
              'Marshall JCM 2000 DSL 401'
            ]
          },
          {
            type: 'Effects',
            gears: [
              'Dunlop Crybaby Wha',
              'EHX East River Drive',
              'EHX Hot Tubes Nano',
              'EHX Neo Clone',
              'EHX Neo Mistress ',
              // 'Boss Harmonist PS-6',
              'MXR Phaser Phase 90',
              // 'T-Rex Tonebug Chorus/Flanger',
              // 'MXR Boost MC-401',
              'G-Lab Smooth Delay SD-1',
              'Morley Alligator Volume',
              'Visual Sound Garagetone Tremolo',
              'MXR 10-Band Graphic EQ M108'
              // 'Boss Metal Zone MT-2'
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
            type: 'Power supply',
            gears: [
              'Flatliner SIX',
              'G-Lab 8 Separated 9V Power Box PB-1'
            ]
          },
          {
            type: 'Other',
            gears: [
              // 'tc electronic Polytune Tuner',
              'Planet Waves PW-CT-11 Tru-Strobe Tuner',
              'ISP Noise Gate Decimator G String'
            ]
          }
        ]
      },
      {
        name: 'David',
        // avatar: 'images/profiles/david.png',
        bio: $sce.trustAsHtml([
          '<code>Whö\'s your Daddy?</code> joined may 2012'
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
        // avatar: 'images/profiles/benji.png',
        bio: $sce.trustAsHtml([
          '<code>Whö\'s your Daddy?</code> joined november 2012'
        ].join('<br/>\n')),
        instruments: ['Bass', 'Backing Vocals'],
        gears: [
          {
            type: 'Bass',
            gears: ['LTD B-1005']
          },
          {
            type: 'Effects',
            gears: [
              'Dunlop Bass Q Crybaby Wha',
              'Bass Overdrive Boss ODB-3',
              'T-Rex Tonebug Chorus/Flanger'
            ]
          },
          {
            type: 'Other',
            gears: [
              'Planet Waves PW-CT-11 Tru-Strobe Tuner'
            ]
          }
        ]
      },
      // {
        // name: 'André',
        // // avatar: 'images/profiles/andre.jpg',
        // bio: $sce.trustAsHtml([
          // 'Guitarist for 10 years, I\'ve played in a band named <code>Raven Fly</code> before I\'ve been in <code>Whö\'s your Daddy?</code>',
          // 'My favorite bands are <code>Children of Bodom</code>, <code>Arch Enemy</code> and <code>Born of Osiris</code>, that have a great influence on my play!'
        // ].join('<br/>\n')),
        // instruments: ['Guitar'],
        // gears: [
          // {
            // type: 'Guitars',
            // gears: ['Jackson KVX10 King V', 'ESP LTD M-400']
          // },
          // {
            // type: 'Amplifiers',
            // gears: ['Marshall MG 100-DFX']
          // }
        // ]
      // },
      {
        name: 'Pierre-Yves',
        bio: $sce.trustAsHtml([
          '<code>Whö\'s your Daddy?</code> joined november 2015'
        ].join('<br/>\n')),
        instruments: ['Guitar'],
        gears: [
          {
            type: 'Guitars',
            gears: ['Jackson KVX10 King V', 'ESP LTD M-400']
          },
          {
            type: 'Amplifiers',
            gears: [
              'Peavey Ultra+',
              'Peavey Valveking Combo 50'
            ]
          },
          {
            type: 'Effects',
            gears: [
              'Visual Sound Double Trouble'
            ]
          },
          {
            type: 'Other',
            gears: [
              'Planet Waves PW-CT-11 Tru-Strobe Tuner'
            ]
          }
        ]
      }]
    };
  }]);
