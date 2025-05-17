/*const animation = (function () {
  let configMap = {};

  function config(cfg) {
    configMap = { ...cfg };
  }

  function getDurationFromCSS(element) {
    const styles = window.getComputedStyle(element);
    const dur = styles.animationDuration || styles.transitionDuration;
    const seconds = parseFloat(dur) || 0;
    return seconds * 1000; // ms
  }

  function play(name, userDuration = 'auto') {
    return new Promise((resolve) => {
      const anim = configMap[name];
      if (!anim) return resolve();

      const root = document.getElementById('root');
      root.style.visibility = 'hidden';

      const overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.zIndex = '9999';
      overlay.style.pointerEvents = 'none';
      overlay.innerHTML = typeof anim === 'function' ? anim() : anim;

      document.body.appendChild(overlay);

      const duration = userDuration === 'auto'
        ? getDurationFromCSS(overlay.firstElementChild || overlay)
        : parseInt(userDuration);

      setTimeout(() => {
        overlay.remove();
        root.style.visibility = 'visible';
        resolve();
      }, duration);
    });
  }

  return { config, play };
})();
*/

const animation = (function () {
  let configMap = {};

  function config(cfg) {
    configMap = { ...cfg };
  }

  function getDurationFromCSS(element) {
    const styles = window.getComputedStyle(element);
    const dur = styles.animationDuration || styles.transitionDuration;
    const seconds = parseFloat(dur) || 0;
    return seconds * 1000;
  }

  function getPositionStyle(position) {
    const styles = {
      position: 'fixed',
      zIndex: '9999',
      pointerEvents: 'none',
      width: '100%',
      height: '100%',
      background: '#f8f8f8',
      display: 'flex',
    };

    switch (position) {
      case 'topLeft':
        styles.alignItems = 'flex-start';
        styles.justifyContent = 'flex-start';
        break;
      case 'topCenter':
        styles.alignItems = 'flex-start';
        styles.justifyContent = 'center';
        break;
      case 'topRight':
        styles.alignItems = 'flex-start';
        styles.justifyContent = 'flex-end';
        break;
      case 'middleLeft':
        styles.alignItems = 'center';
        styles.justifyContent = 'flex-start';
        break;
      case 'middleCenter':
        styles.alignItems = 'center';
        styles.justifyContent = 'center';
        break;
      case 'middleRight':
        styles.alignItems = 'center';
        styles.justifyContent = 'flex-end';
        break;
      case 'bottomLeft':
        styles.alignItems = 'flex-end';
        styles.justifyContent = 'flex-start';
        break;
      case 'bottomCenter':
        styles.alignItems = 'flex-end';
        styles.justifyContent = 'center';
        break;
      case 'bottomRight':
        styles.alignItems = 'flex-end';
        styles.justifyContent = 'flex-end';
        break;
      case 'auto':
      default:
        styles.alignItems = 'center';
        styles.justifyContent = 'center';
        break;
    }

    return styles;
  }

  function play(name, userDuration = 'auto', position = 'auto') {
    return new Promise((resolve) => {
      const anim = configMap[name];
      if (!anim) return resolve();

      const root = document.getElementById('root');
      root.style.visibility = 'hidden';

      const overlay = document.createElement('div');
      const styles = getPositionStyle(position);
      Object.assign(overlay.style, styles);

      const contentHTML = typeof anim === 'function' ? anim() : anim;
      overlay.innerHTML = contentHTML;

      document.body.appendChild(overlay);

      const animationElement = overlay.querySelector('.skeleton') || overlay.firstElementChild;
      const duration = userDuration === 'auto'
        ? getDurationFromCSS(animationElement)
        : parseInt(userDuration);

      setTimeout(() => {
        overlay.remove();
        root.style.visibility = 'visible';
        resolve();
      }, duration);
    });
  }

  return { config, play };
})();
