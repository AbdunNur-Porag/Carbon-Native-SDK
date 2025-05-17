// app.js
/*
function HomeActivity() {
  return (
    <div>
      <AppBar>
        <AppBarBody></AppBarBody>
      </AppBar>
      <h2>This is Home Activity</h2>
      <button onClick={() => routeTo('main')}>Go Main</button>
    </div>
  );
}

function MainActivity() {
  return (
    <div>
      <h2>This is Main Activity</h2>
      <button onClick={() => routeTo('home')}>Go Home</button>
      <button onClick={() => routeTo('settings')}>Go Settings</button>
    </div>
  );
}

function SettingsActivity() {
  return (
    <div>
      <h2>This is Settings Activity</h2>
      <button onClick={() => routeTo('main')}>Go Main</button>
    </div>
  );
}

// Configure router
router.config({
  home: <HomeActivity />,
  main: <MainActivity />,
  settings: <SettingsActivity />,
  default: <MainActivity />
});

*/
// uglified-app.js
(function(){function _0xabc1(){return _0x4cf4("div",[_0x4cf4(AppBar,[_0x4cf4(AppBarBody)]),_0x4cf4("h2",["This is Home Activity"]),_0x4cf4("button",{onClick:()=>routeTo("main")},"Go Main")]);}
function _0xdef2(){return _0x4cf4("div",[_0x4cf4("h2",["This is Main Activity"]),_0x4cf4("button",{onClick:()=>routeTo("home")},"Go Home"),_0x4cf4("button",{onClick:()=>routeTo("settings")},"Go Settings")]);}
function _0xfed3(){return _0x4cf4("div",[_0x4cf4("h2",["This is Settings Activity"]),_0x4cf4("button",{onClick:()=>routeTo("main")},"Go Main")]);}
router["config"]({home:_0x4cf4(_0xabc1),main:_0x4cf4(_0xdef2),settings:_0x4cf4(_0xfed3),"default":_0x4cf4(_0xdef2)});

function _0x4cf4(tag,propsOrChildren,children) {
  // Simulated JSX-like function (depends on your framework)
  return typeof tag === "string"
    ? {tag, props: typeof propsOrChildren === "object" && !Array.isArray(propsOrChildren) ? propsOrChildren : {}, children: Array.isArray(propsOrChildren) ? propsOrChildren : [children]}
    : tag(); // Simulate React component rendering
}
})();
