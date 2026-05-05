"use strict";

/*
  Asset paths are optional.

  Empty string:
  - do not try loading the asset
  - keep the current fallback UI

  Non-empty string:
  - try loading the asset
  - if it fails, fallback stays visible
*/

window.AssetConstants = Object.freeze({
    directories: Object.freeze({
        assets: "assets/",
        icons: "assets/icons/"
    }),

    images: Object.freeze({
        logo: "",

        // Rename your files to match these, or update these paths.
        zacPhoto: "assets/zac-photo.jpg",
        dogPhoto: "assets/dog-photo.jpg"
    }),

    icons: Object.freeze({
        excel: "",
        googleSheets: "",
        csv: "",
        vba: "",

        pdf: "",
        word: "",
        googleForms: "",
        googleDrive: "",

        appsScript: "",
        zapier: "",
        ifttt: "",
        iosShortcuts: "",
        automator: "",
        powershell: "",

        api: "",
        webTools: "",
        javascript: "",
        vsCode: "",
        mobileForms: "",

        github: "",
        htmlCss: "",
        figma: "",
        jira: "",
        confluence: "",
        trello: "",
        miro: "",
        socialAccounts: ""
    })
});