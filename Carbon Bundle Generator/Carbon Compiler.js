cfg.Light
cfg.MUI

function OnStart() {
    var color = MUI.colors.teal;
    app.InitializeUIKit(color.teal);

    var lay = MUI.CreateLayout("Linear", "VCenter,FillXY");

    var h1 = MUI.AddText(lay, "Package Folder Checker", 0.8, null, "h1,Medium");
    var packageInput = MUI.AddTextEdit(lay, 0.8, "filled", "Enter package folder name", true);
    var btnCheck = MUI.AddButton(lay, "Check Folder", 0.8, null, "raised");
    var resultText = MUI.AddText(lay, "Result will appear here", 0.8, null, "paragraph,thin");

    app.AddLayout(lay);

    // Full Android API version list from Android 1.0 to Android 14 (API 34)
    var osVersionList = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33, 34
    ];

    btnCheck.SetOnTouch(function () {
        var packageName = packageInput.GetText().trim();
        var folderPath = "package/" + packageName;

        if (!app.FolderExists(folderPath)) {
            resultText.SetText("Error: Package folder not found at " + folderPath);
            return;
        }

        var bundlePath = folderPath + "/bundle.json";
        if (!app.FileExists(bundlePath)) {
            resultText.SetText("Error: bundle.json not found in " + folderPath);
            return;
        }

        var bundleContent = app.ReadFile(bundlePath);
        var activities = JSON.parse(bundleContent);

        var missingFiles = [];
        var activityData = "";

        for (var i = 0; i < activities.length; i++) {
            var activity = activities[i];
            var activitySrc = activity.activitySrc;

            if (app.FileExists(folderPath + "/view/" + activitySrc)) {
                var activityContent = app.ReadFile(folderPath + "/view/" + activitySrc);
                activityData += "\n/** " + activity.activityName + " **/\n";
                activityData += activityContent + "\n/** end " + activity.activityName + " **/\n";
            } else {
                missingFiles.push(activitySrc);
            }
        }

        if (missingFiles.length > 0) {
            resultText.SetText("Error: The following files do not exist: \n" + missingFiles.join("\n"));
            return;
        }

        var buildPath = folderPath + "/build";
        if (!app.FolderExists(buildPath)) app.MakeFolder(buildPath);

        var crypt = app.CreateCrypt();

        for (var v = 0; v < osVersionList.length; v++) {
            var version = osVersionList[v];
            var encKey = (version + "").repeat(30) + "carbon_native_sdk_xxx_v_2_2_!_?!!";

            var encryptedData = crypt.Encrypt(activityData, encKey);

            var versionBundlePath = buildPath + "/carbon.main.bundle." + version;
            var versionRawPath = buildPath + "/carbon.main.bundle.raw." + version;

            if (app.FileExists(versionBundlePath)) app.DeleteFile(versionBundlePath);
            if (app.FileExists(versionRawPath)) app.DeleteFile(versionRawPath);

            app.WriteFile(versionBundlePath, encryptedData);
            app.WriteFile(versionRawPath, activityData);
        }

        resultText.SetText("Files processed successfully for Android versions: " + osVersionList.join(", "));
    });
}