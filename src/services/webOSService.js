import LS2Request from '@enact/webos/LS2Request';

export const setFullScreen = () => {
  if (window.PalmSystem) {
    new LS2Request().send({
      service: 'luna://com.webos.service.tv.display',
      method: 'setScreenSaver',
      parameters: {
        preventScreenSaver: true
      }
    });
  }
};

export const handleBackButton = (callback) => {
  if (window.PalmSystem) {
    document.addEventListener('webOSRelaunch', () => {
      callback();
    });
  }
};