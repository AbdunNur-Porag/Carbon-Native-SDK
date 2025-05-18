// --- User Extendable Build API --- //
const userBuildApi = {};

function extendUserApi(methods) {
  Object.assign(userBuildApi, methods);
}

// --- Build API ---
function create(tag = "div") {
  const el = document.createElement(tag);

  // Base API methods
  const baseApi = {
    el,

    className(classes = []) {
      el.className = classes.join(" ");
      return this;
    },

    id(id) {
      el.id = id;
      return this;
    },

    attrs(obj = {}) {
      for (let key in obj) el.setAttribute(key, obj[key]);
      return this;
    },

    style(obj = {}) {
      Object.assign(el.style, obj);
      return this;
    },

    event(name, fn) {
      el.addEventListener(name, fn);
      return this;
    },

    child(children) {
      if (Array.isArray(children)) {
        children.forEach(c => {
          if (c?.el) el.appendChild(c.el);
          else if (c instanceof HTMLElement) el.appendChild(c);
        });
      } else if (typeof children === "object" && children !== null) {
        for (let key in children) {
          const child = children[key];
          if (child?.el) el.appendChild(child.el);
          else if (child instanceof HTMLElement) el.appendChild(child);
          this[key] = child; // expose children on api for easy access
        }
      }
      return this;
    },

    add(target) {
      let parent = null;
      if (typeof target === "string") parent = document.querySelector(target);
      else if (target?.el) parent = target.el;
      else if (target instanceof HTMLElement) parent = target;

      if (parent) parent.appendChild(el);
      return this;
    },

    html(content) {
      el.innerHTML = content;
      return this;
    },

    text(content) {
      el.textContent = content;
      return this;
    },

    clone() {
      return create().child([el.cloneNode(true)]);
    },

    // Your requested extra methods:
    appendText(text) {
      el.appendChild(document.createTextNode(text));
      return this;
    },

    appendHtml(html) {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      while (temp.firstChild) {
        el.appendChild(temp.firstChild);
      }
      return this;
    },

    removeText() {
      const nodes = Array.from(el.childNodes);
      nodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) el.removeChild(n);
      });
      return this;
    },

    removeHtml() {
      while (el.firstChild) {
        if (el.firstChild.nodeType !== Node.TEXT_NODE) el.removeChild(el.firstChild);
        else break; // keep text nodes
      }
      return this;
    },

    getId() {
      return el.id;
    },

    removeId() {
      el.removeAttribute("id");
      return this;
    },

    readId() {
      return el.getAttribute("id");
    },

    appendClass(className) {
      el.classList.add(className);
      return this;
    },

    removeAllClass() {
      el.className = "";
      return this;
    },

    removeAClass(name) {
      el.classList.remove(name);
      return this;
    },

    getAllClass() {
      return Array.from(el.classList);
    },

    getAAttrs(name) {
      return el.getAttribute(name);
    },

    removeAllAttrs() {
      const attrs = Array.from(el.attributes);
      attrs.forEach(attr => el.removeAttribute(attr.name));
      return this;
    },

    appendAAttrs(name, newValue) {
      el.setAttribute(name, newValue);
      return this;
    },

    deleteAAttrs(name) {
      el.removeAttribute(name);
      return this;
    },

    getInnerValue() {
      return el.innerHTML;
    }
  };

  // Extend baseApi with userBuildApi methods and bind properly
  const api = Object.create(baseApi);
  Object.keys(userBuildApi).forEach(key => {
    api[key] = function(...args) {
      return userBuildApi[key].apply(this, args);
    };
  });

  return api;
}

// --- getUi for DOM access with full build API support ---
function getUi(selector) {
  const el = document.querySelector(selector);
  if (!el) return null;

  const baseApi = {
    el,

    html(content) {
      el.innerHTML = content;
      return this;
    },

    text(content) {
      el.textContent = content;
      return this;
    },

    style(obj = {}) {
      Object.assign(el.style, obj);
      return this;
    },

    event(name, fn) {
      el.addEventListener(name, fn);
      return this;
    },

    appendText(text) {
      el.appendChild(document.createTextNode(text));
      return this;
    },

    appendHtml(html) {
      const temp = document.createElement("div");
      temp.innerHTML = html;
      while (temp.firstChild) {
        el.appendChild(temp.firstChild);
      }
      return this;
    },

    removeText() {
      const nodes = Array.from(el.childNodes);
      nodes.forEach(n => {
        if (n.nodeType === Node.TEXT_NODE) el.removeChild(n);
      });
      return this;
    },

    removeHtml() {
      while (el.firstChild) {
        if (el.firstChild.nodeType !== Node.TEXT_NODE) el.removeChild(el.firstChild);
        else break;
      }
      return this;
    },

    getId() {
      return el.id;
    },

    removeId() {
      el.removeAttribute("id");
      return this;
    },

    readId() {
      return el.getAttribute("id");
    },

    appendClass(className) {
      el.classList.add(className);
      return this;
    },

    removeAllClass() {
      el.className = "";
      return this;
    },

    removeAClass(name) {
      el.classList.remove(name);
      return this;
    },

    getAllClass() {
      return Array.from(el.classList);
    },

    getAAttrs(name) {
      return el.getAttribute(name);
    },

    removeAllAttrs() {
      const attrs = Array.from(el.attributes);
      attrs.forEach(attr => el.removeAttribute(attr.name));
      return this;
    },

    appendAAttrs(name, newValue) {
      el.setAttribute(name, newValue);
      return this;
    },

    deleteAAttrs(name) {
      el.removeAttribute(name);
      return this;
    },

    getInnerValue() {
      return el.innerHTML;
    }
  };

  // Extend baseApi with userBuildApi methods and bind properly
  const api = Object.create(baseApi);
  Object.keys(userBuildApi).forEach(key => {
    api[key] = function(...args) {
      return userBuildApi[key].apply(this, args);
    };
  });

  return api;
}

// --- React Router Framework ---
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
    setInitialAnimation
  };
})();

// --- Example usage of extendUserApi --- //


// Export for global usage (optional)
window.create = create;
window.getUi = getUi;
window.extendUserApi = extendUserApi;
window.router = router;

const routeTo = router.routeTo;
const replaceTo = router.replaceTo;
/**/