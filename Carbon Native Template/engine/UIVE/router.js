/*const router = (function () {
  let routes = {};
  let defaultRoute = null;
  let notFoundPage = null;
  let initialAnimation = null;
  let initialTime = 'auto';

  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  function config(routeMap) {
    routes = { ...routeMap };
    defaultRoute = routeMap.default || null;
    notFoundPage = routeMap.notfound || null;

    window.addEventListener('popstate', () => {
      renderRoute(getRouteFromURL());
    });

    // Initial animation before first route
    if (initialAnimation && typeof animation?.play === 'function') {
      animation.play(initialAnimation, initialTime).then(() => {
        renderRoute(getRouteFromURL());
      });
    } else {
      renderRoute(getRouteFromURL());
    }
  }

  function getRouteFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('route') || '';
  }

  function updateURL(route, replace = false) {
    const newURL = `?route=${route}`;
    if (replace) {
      history.replaceState(null, '', newURL);
    } else {
      history.pushState(null, '', newURL);
    }
    renderRoute(route);
  }

  async function routeTo(path, animName = null, time = 'auto') {
    if (animName && typeof animation?.play === 'function') {
      await animation.play(animName, time);
    }
    updateURL(path, false);
  }

  async function replaceTo(path, animName = null, time = 'auto') {
    if (animName && typeof animation?.play === 'function') {
      await animation.play(animName, time);
    }
    updateURL(path, true);
  }

  function renderRoute(path) {
    if (routes[path]) {
      root.render(routes[path]);
    } else if (notFoundPage) {
      console.warn(`Route not found: "${path}". Rendering notFoundPage.`);
      root.render(notFoundPage);
    } else if (defaultRoute) {
      console.warn(`Route not found: "${path}". Falling back to defaultRoute.`);
      root.render(defaultRoute);
    } else {
      console.error(`No route found for "${path}" and no fallback route defined.`);
    }
  }

  function setInitialAnimation(animName, time = 'auto') {
    initialAnimation = animName;
    initialTime = time;
  }

  return {
    config,
    routeTo,
    replaceTo,
    setInitialAnimation,
  };
})();

// Global access
const routeTo = router.routeTo;
const replaceTo = router.replaceTo;
*/

const router = (function () {
  let routes = {};
  let defaultRoute = null;
  let notFoundPage = null;
  let initialAnimation = null;
  let initialTime = 'auto';
  let initialPosition = 'auto';

  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  function config(routeMap) {
    routes = { ...routeMap };
    defaultRoute = routeMap.default || null;
    notFoundPage = routeMap.notfound || null;

    window.addEventListener('popstate', () => {
      renderRoute(getRouteFromURL());
    });

    // Initial animation before first route
    if (initialAnimation && typeof animation?.play === 'function') {
      animation.play(initialAnimation, initialTime, initialPosition).then(() => {
        renderRoute(getRouteFromURL());
      });
    } else {
      renderRoute(getRouteFromURL());
    }
  }

  function getRouteFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('route') || '';
  }

  function updateURL(route, replace = false) {
    const newURL = `?route=${route}`;
    if (replace) {
      history.replaceState(null, '', newURL);
    } else {
      history.pushState(null, '', newURL);
    }
    renderRoute(route);
  }

  async function routeTo(path, animName = null, time = 'auto', position = 'auto') {
    if (animName && typeof animation?.play === 'function') {
      await animation.play(animName, time, position);
    }
    updateURL(path, false);
  }

  async function replaceTo(path, animName = null, time = 'auto', position = 'auto') {
    if (animName && typeof animation?.play === 'function') {
      await animation.play(animName, time, position);
    }
    updateURL(path, true);
  }

  function renderRoute(path) {
    if (routes[path]) {
      root.render(routes[path]);
    } else if (notFoundPage) {
      console.warn(`Route not found: "${path}". Rendering notFoundPage.`);
      root.render(notFoundPage);
    } else if (defaultRoute) {
      console.warn(`Route not found: "${path}". Falling back to defaultRoute.`);
      root.render(defaultRoute);
    } else {
      console.error(`No route found for "${path}" and no fallback route defined.`);
    }
  }

  function setInitialAnimation(animName, time = 'auto', position = 'auto') {
    initialAnimation = animName;
    initialTime = time;
    initialPosition = position;
  }

  return {
    config,
    routeTo,
    replaceTo,
    setInitialAnimation,
  };
})();

// Global access
const routeTo = router.routeTo;
const replaceTo = router.replaceTo;

