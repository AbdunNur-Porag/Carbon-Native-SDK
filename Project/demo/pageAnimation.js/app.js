// Inject style
const style = document.createElement('style');
style.innerHTML = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f0f0f0;
    font-family: sans-serif;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: white;
  }
  .page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    transition: all 0.5s ease;
    z-index: 2;
    opacity: 0;
    padding: 20px;
  }
  .slide-right { left: 100%; top: 0; }
  .slide-right.active { left: 0; opacity: 1; }
  .slide-right.back { left: 100%; opacity: 0; }

  .slide-left { left: -100%; top: 0; }
  .slide-left.active { left: 0; opacity: 1; }
  .slide-left.back { left: -100%; opacity: 0; }

  .slide-bottom { top: 100%; left: 0; }
  .slide-bottom.active { top: 0; opacity: 1; }
  .slide-bottom.back { top: 100%; opacity: 0; }

  .slide-top { top: -100%; left: 0; }
  .slide-top.active { top: 0; opacity: 1; }
  .slide-top.back { top: -100%; opacity: 0; }

  .fade { top: 0; left: 0; opacity: 0; }
  .fade.active { opacity: 1; }
  .fade.back { opacity: 0; }

  button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
  }
`;
document.head.appendChild(style);

// React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Global history stack
let historyStack = [];

// Navigation
function navigateTo(Component, animation = 'slide-right') {
  const app = document.getElementById('app');
  const page = document.createElement('div');
  page.className = `page ${animation}`;
  app.appendChild(page);

  ReactDOM.createRoot(page).render(<Component />);

  setTimeout(() => {
    page.classList.add('active');
  }, 50);

  historyStack.push({ page, animation });
}

function goBack() {
  if (historyStack.length > 0) {
    const { page } = historyStack.pop();
    page.classList.add('back');
    setTimeout(() => {
      page.remove();
    }, 500);
  }
}

// Activities
function MainActivity() {
  return (
    <div id="app">
      <div id="homePage" style={{ padding: "20px" }}>
        <h1>Main Activity</h1>
        <button onClick={() => navigateTo(HomeActivity, 'slide-right')}>Go to Home (Slide Right)</button>
        <button onClick={() => navigateTo(SettingsActivity, 'slide-left')}>Go to Settings (Slide Left)</button>
        <button onClick={() => navigateTo(ProfileActivity, 'fade')}>Go to Profile (Fade)</button>
      </div>
    </div>
  );
}

function HomeActivity() {
  return (
    <div>
      <h2>Home Activity</h2>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function SettingsActivity() {
  return (
    <div>
      <h2>Settings Activity</h2>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

function ProfileActivity() {
  return (
    <div>
      <h2>Profile Activity</h2>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

// App Entry
const App = () => {
  return (
    <div>
      <main>
        <MainActivity />
      </main>
    </div>
  );
};

root.render(<App />);
