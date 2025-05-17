function OnStart()
{
    lay = app.CreateLayout("linear", "VCenter,ScrollY,FillXY");

    web = app.CreateWebView(1, 1);
    web.SetBackColor("#ffffff");
    lay.AddChild(web);
    app.AddLayout(lay);

    var version = app.GetOSVersion();
    var versionPath = "main/carbon.main.bundle." + version;

    var crypt = app.CreateCrypt();
    var decryptBundle = "";

    if (app.FileExists(versionPath)) {
        var readBundleFile = app.ReadFile(versionPath);
        var encKey = (version + "").repeat(30) + "carbon_native_sdk_xxx_v_2_2_!_?!!";
        decryptBundle = crypt.Decrypt(readBundleFile, encKey);
    } else {
        web.SetErrorPage("engine/error/error.html");
        return;
    }

  
    var html = `
<body style='background: #f8f8f8;'>
  <div id='root'></div>
  <!--material design-->
  <script type='module'src='engine/css/beer.min.js'></script>
  <link rel="stylesheet" href="engine/css/beer.min.css">
  <script src='engine/react/react.development.js'></script>
  <script src='engine/react/react-dom.development.js'></script>
  <script src='engine/UIVE/router.js'></script>
  <script type='text/babel' src='engine/UIVE/skeleton.js'></script>
  <script src='engine/react/babel.min.js'></script>

  <!--MAIN BUNDLE-->
  <script type='text/babel'>
  ${decryptBundle}
  </script>
</body>
`;

    web.LoadHtml(html);
    web.SetErrorPage("engine/error/error.html");
}

function OnBack() {
    web.CanGoBack(true);
}