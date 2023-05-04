import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveCurrentTime = () => {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
};
const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);
player.on('timeupdate', throttledSaveCurrentTime);
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
