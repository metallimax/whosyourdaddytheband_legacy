"use strict";angular.module("controllers",[]),angular.module("filters",[]),angular.module("directives",[]),angular.module("whosyourdaddythebandApp",["ngCookies","ngRoute","ui.filters","controllers","filters","directives"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/audio",{templateUrl:"views/audio.html",controller:"AudioCtrl"}).when("/video",{templateUrl:"views/video.html",controller:"VideoCtrl"}).when("/the-band",{templateUrl:"views/the-band.html",controller:"TheBandCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/drinks",{templateUrl:"views/drinks.html",controller:"DrinksCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("controllers").controller("MainCtrl",["$scope",function(a){a.news=[{date:"2014-01-26",author:"@Max",title:"Welcome to the new band and website design",content:"We recently changed the design of the website"},{date:"2014-06-21",author:"@Max",title:"Who's Your Daddy? @ Fête de la Musique d'Albertville",content:"1st gig"},{date:"2014-09-13",author:"@Max",title:"Zikolokos prend l'air",content:"Rehearsal place gig with friends & family"},{date:"2016-01-09",author:"@Max",title:"Chez Drey",content:"Who's Your Daddy? will be at Chez Drey to a concert w/ Sinorma & w/ Nevercold"}]}]),angular.module("controllers").controller("AudioCtrl",["$scope",function(a){a.dummy="dummy"}]),angular.module("controllers").controller("VideoCtrl",["$scope","$sce",function(a,b){a.video={items:[{title:"Fête de la Musique Albertville - 2014",src:b.trustAsResourceUrl("//www.youtube.com/embed/alZup0lHcGo")}]}}]),angular.module("controllers").controller("TheBandCtrl",["$scope","$sce",function(a,b){a.band={bio:b.trustAsHtml(["<code>Who's Your Daddy?</code> is a band born in <em>2010</em>.","At the begining it was the encounter of Max and Sylvain (bass player).","After a while looking for partners, they finally found a drummer (in the person of David) that matched with Max spirit.","Unfortunately, Sylvain thought that the style went too heavy/fast so he decided to left the band.","Benji, a former neighboor of David who is a bass player was involved in the challenge of this young band.","After a while looking for another guitarist, we finally found André to fill this role, composing songs one at a time ...","Then André left the band to go study in Belgium.","After a while, Pierre-Yves came to fille the empty space at guitar and filled it very well!"].join("<br/>\n")),members:[{name:"Max",bio:b.trustAsHtml(["<code>Max</code> is a long time guitar player ... but alone (or with his brother JoZ at time).","After studies, sport and family, he decided it was the time to form a band.","This is how the story begins.","As a huge fan of <code>MetallicA</code> and more recently <code>Machine Head</code>, his play is really thrash oriented."].join("<br/>\n")),instruments:["Guitar","Vocals"],gears:[{type:"Microphone",gears:["Shure 55 w/ custom bent stand"]},{type:"Guitars",gears:["Jackson RR","Jackson Kelly"]},{type:"Amplifiers",gears:["Peavey XXX II w/ Marshall 1960AV Cabinet","Marshall JCM 2000 DSL 401"]},{type:"Effects",gears:["Dunlop Crybaby Wha","EHX East River Drive","EHX Hot Tubes Nano","EHX Neo Clone","EHX Neo Mistress ","MXR Phaser Phase 90","G-Lab Smooth Delay SD-1","Morley Alligator Volume","Visual Sound Garagetone Tremolo","MXR 10-Band Graphic EQ M108"]},{type:"Looper/Switcher",gears:["G-Lab GSC-3","G-Lab MIDI 2x Loop M2L (x2)"]},{type:"Power supply",gears:["Flatliner SIX","G-Lab 8 Separated 9V Power Box PB-1"]},{type:"Other",gears:["Planet Waves PW-CT-11 Tru-Strobe Tuner","ISP Noise Gate Decimator G String"]}]},{name:"David",bio:b.trustAsHtml(["<code>Whö's your Daddy?</code> joined may 2012"].join("<br/>\n")),instruments:["Drums"],gears:[{type:"Drum Kit",gears:["??"]}]},{name:"Benji",bio:b.trustAsHtml(["<code>Whö's your Daddy?</code> joined november 2012"].join("<br/>\n")),instruments:["Bass","Backing Vocals"],gears:[{type:"Bass",gears:["LTD B-1005"]},{type:"Effects",gears:["Dunlop Bass Q Crybaby Wha","Bass Overdrive Boss ODB-3","T-Rex Tonebug Chorus/Flanger"]},{type:"Other",gears:["Planet Waves PW-CT-11 Tru-Strobe Tuner"]}]},{name:"Pierre-Yves",bio:b.trustAsHtml(["<code>Whö's your Daddy?</code> joined november 2015"].join("<br/>\n")),instruments:["Guitar"],gears:[{type:"Guitars",gears:["Jackson KVX10 King V","ESP LTD M-400"]},{type:"Amplifiers",gears:["Peavey Ultra+","Peavey Valveking Combo 50"]},{type:"Effects",gears:["Visual Sound Double Trouble"]},{type:"Other",gears:["Planet Waves PW-CT-11 Tru-Strobe Tuner"]}]}]}}]),angular.module("controllers").controller("AboutCtrl",["$scope",function(a){a.tools=[{name:"Yeaoman",url:"",img:""},{name:"Grunt",url:"",img:""},{name:"Bowser",url:"",img:""},{name:"AngularJS",url:"",img:""}],a.authors=[{name:"Max",email:"maxime.delrieu@gmail.com"}]}]),angular.module("controllers").controller("ContactCtrl",["$scope",function(a){a.contact={email:"whosyourdaddytheband@gmail.com"}}]),angular.module("controllers").controller("GlobalCtrl",["$scope","$route","$element","$interval","$cookies",function(a,b,c,d,e){a.$on("$routeChangeSuccess",function(){a.route=b.current.$$route.originalPath}),a.splashed=e.splashed,a.splash=function(){e.splashed=!0,a.splashed=e.splashed},a.tracks=[{id:"buildmyhate",title:"Build My Hate",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/01%20-%20Build%20My%20Hate.mp3"},number:1},{id:"legalcanibal",title:"Legal Canibal",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/02%20-%20Legal%20Canibal.mp3"},number:2},{id:"mycrusade",title:"MyCrusade",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/03%20-%20My%20Crusade.mp3"},number:3},{id:"cabal",title:"Cabal",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/04%20-%20Cabal.mp3"},number:4},{id:"ravage",title:"Ravage",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/05%20-%20Ravage.mp3"},number:5},{id:"wnduwd",title:"We're Not Dead Until We Die",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/07%20-%20We're%20Not%20Dead%20Until%20We%20Die.mp3"},number:6},{id:"blastmykarma",title:"Blast My Karma",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/Audio/Compos/setlist/06%20-%20Blast%20My%20Karma.mp3"},number:7},{id:"kyms",title:"K.Y.M.S.",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/Compos/Who%27s%20Your%20Daddy/05%20-%20K.Y.M.S.mp3","audio/ogg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/Compos/Who%27s%20Your%20Daddy/05%20-%20K.Y.M.S.ogg"},number:8},{id:"hestermofet",title:"Hester Mofet",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/Compos/Who%27s%20Your%20Daddy/02%20-%20Hester%20Mofet.mp3","audio/ogg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/Compos/Who%27s%20Your%20Daddy/02%20-%20Hester%20Mofet.ogg"},number:9},{id:"letsgiveahand",title:"Let's Give a Hand",album:"Who's Your Daddy?",src:{"audio/mpeg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/Compos/Who%27s%20Your%20Daddy/01%20-%20Let%27s%20Give%20A%20Hand.mp3","audio/ogg":"https://dl.dropboxusercontent.com/u/33531527/whosyourdaddytheband/audio/compos/Who%27s%20Your%20Daddy/01%20-%20Let%27s%20Give%20A%20Hand.ogg"},number:10},{id:"motorhc",title:"Motoriplash",album:"Bonus",number:1}],a.wydPlayerAudio=c.find("#wyd-audioplayer")[0],a.playlist={current:0,tracks:a.tracks.filter(function(a){return!!a.src}),currentTitle:""},a.changeTrack=function(b){if(a.playlist.current=b,a.playlist.tracks.length>0&&b<a.playlist.tracks.length){a.playlist.currentTitle=a.playlist.tracks[a.playlist.current].title;var c=a.playlist.tracks[a.playlist.current].src;for(var d in c)if(a.wydPlayerAudio.canPlayType(d)){a.wydPlayerAudio.type=d,a.wydPlayerAudio.src=c[d],a.wydPlayerAudio.load(),a.time="00:00",a.elapsed=0,a.buffered=0;break}}else a.wydPlayerAudio.src=""},a.changeTrack(0),a.elapsed=0,a.buffered=0,a.time="00:00",a.playing=!1,d(function(){var b=a.wydPlayerAudio.currentTime,c=a.wydPlayerAudio.duration,d=a.wydPlayerAudio.buffered.length>0&&a.wydPlayerAudio.buffered.end(0)||0;if(c||d){var e=Math.round(b%3600/60),f=Math.round(b%60);a.time=(10>e?"0":"")+e+":"+(10>f?"0":"")+f,a.buffered=Math.round(100*d/c),0!==a.buffered&&(a.elapsed=Math.round(1e4*b/(c*a.buffered))),a.playing&&b===c&&a.wydPlayer.next()}},1e3),a.wydPlayer={previous:function(){0===a.playlist.current&&(a.playlist.current=a.playlist.tracks.length),a.changeTrack(a.playlist.current-1),a.playing&&a.wydPlayer.play()},play:function(){a.wydPlayerAudio.play(),a.playing=!a.wydPlayerAudio.paused},pause:function(){a.wydPlayerAudio.pause(),a.playing=!a.wydPlayerAudio.paused},next:function(){a.changeTrack((a.playlist.current+1)%a.playlist.tracks.length),a.playing&&a.wydPlayer.play()},volume:function(){},list:function(){},jumpToAndPlay:function(b){for(var c=0,d=a.playlist.tracks.length;d>c;c++)if(a.playlist.tracks[c].id===b){a.changeTrack(c),a.wydPlayer.play();break}}}}]),angular.module("filters").filter("prependZero",function(){return function(a,b){b=b||99;for(var c=10,d="";b>=c*a;)d+="0",c*=10;return d+a}}),angular.module("directives").directive("wydPlayer",function(){return{template:['<div class="wyd-player">',"<div>",'<a class="wyd-player-command" ng-click="wydPlayer.previous()">z</a>','<a class="wyd-player-command" ng-show="wydPlayerAudio.paused" ng-click="wydPlayer.play()">u</a>','<a class="wyd-player-command" ng-show="!wydPlayerAudio.paused" ng-click="wydPlayer.pause()">x</a>','<a class="wyd-player-command" ng-click="wydPlayer.next()">{</a>','<a class="wyd-player-command" ng-click="wydPlayer.volume()">y</a>','<a class="wyd-player-command" ng-click="wydPlayer.list()">}</a>','<audio id="wyd-audioplayer" controls="controls">',"Your browser does not support the audio element.","</audio>","</div>",'<div class="wyd-player-title"><span class="wyd-player-time">[{{ time }}]</span> <span class="wyd-player-title">{{ playlist.currentTitle }}</span></div>','<div class="wyd-player-progress"><div class="progress-buffered" style="width: {{buffered}}%;"><div class="progress-elapsed" style="width: {{elapsed}}%;"></div></div></div>',"</div>"].join(""),restrict:"E"}}),angular.module("whosyourdaddythebandApp").controller("DrinksCtrl",["$scope",function(a){a.drinks=[{type:"Beers",items:[{name:"Leffe",id:"drink-leffe",url:"http://www.leffe.com"},{name:"La Goudale",id:"drink-goudale",url:"http://www.brasseurs-gayant.com/portfolio/la-goudale"},{name:"Jeanlain",id:"drink-jeanlain",url:"http://jenlain.fr"}]},{type:"Whisk(e)y",items:[{name:"Jack Daniel's",id:"drink-jd",url:"http://www.jackdaniels.com"},{name:"Connemara",id:"drink-connemara",url:"http://www.connemarawhiskey.com"}]},{type:"Miscellaneous",items:[{name:"Gold Strike",id:"drink-goldstrike",url:"http://goldstrike.fr"}]}]}]),angular.module("whosyourdaddythebandApp").directive("splash",function(){return{template:"<div></div>",restrict:"E",link:function(a,b,c){b.text("this is the splash directive"+c)}}});