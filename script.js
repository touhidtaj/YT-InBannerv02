videoOperation();

var $ = window.jQuery;
function videoOperation(ev) {
  // document.querySelector('.sub').classList.remove('ppm_hidden');
  $(`
  <div id="player"></div>
  <script>
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[2];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;

      function onPlayerReady(event) {
          event.target.mute();
          $('iframe#player').css({'border-top':'solid 2px #F40009','border-bottom':'solid 2px #F40009','margin-top':'20px','cursor': 'pointer'});
          event.target.playVideo();
      }

      function onYouTubePlayerAPIReady() {
          player = new YT.Player('player', {
          height: '200',
          width: '300',
          videoId: 'oSZ2gmxBNaU',
          playerVars: {
              'playsinline': 0,
                          'autoplay': 0,
                          'mute': 1,
                          'rel':0,
                          'modestbranding': 1,
                          'controls': 1,
                          // "playlist": id,
                          'loop': 1
          },
          events: {
            'onReady': onPlayerReady,
          //   'onStateChange': onPlayerStateChange
          }
});
}

  <\/script>`).appendTo($(".thevideo"));
}

// gasp
var tl = new TimelineMax({ repeat: -1, repeatDelay: 0, yoyo: true });
tl.fromTo(".sub", { scale: 0.9 }, { scale: 1, duration: 0.5 });
