"use strict";

/*
  All image and icon paths belong here.

  For now, USE_IMAGE_ASSETS is false so the website uses square placeholder
  badges instead of trying to load missing files.

  When real assets are added, set USE_IMAGE_ASSETS to true.
*/

const AssetConstants = Object.freeze({
    USE_IMAGE_ASSETS: false,

    directories: Object.freeze({
        assets: "assets/",
        icons: "assets/icons/"
    }),

    images: Object.freeze({
        logo: "assets/zacs-office-logo.png",
        zacPhoto: "assets/zac-photo.jpg",
        dogPhoto: "assets/dog-photo.jpg"
    }),

    icons: Object.freeze({
        excel: "assets/icons/excel.svg",
        googleSheets: "assets/icons/google-sheets.svg",
        csv: "assets/icons/csv.svg",
        vba: "assets/icons/vba.svg",

        pdf: "assets/icons/pdf.svg",
        word: "assets/icons/word.svg",
        googleForms: "assets/icons/google-forms.svg",
        googleDrive: "assets/icons/google-drive.svg",

        appsScript: "assets/icons/google-apps-script.svg",
        zapier: "assets/icons/zapier.svg",
        ifttt: "assets/icons/ifttt.svg",
        iosShortcuts: "assets/icons/ios-shortcuts.svg",
        automator: "assets/icons/automator.svg",
        powershell: "assets/icons/powershell.svg",

        api: "assets/icons/api.svg",
        webTools: "assets/icons/web-tools.svg",
        javascript: "assets/icons/javascript.svg",
        vsCode: "assets/icons/vs-code.svg",
        mobileForms: "assets/icons/mobile-forms.svg",

        github: "assets/icons/github.svg",
        htmlCss: "assets/icons/html-css.svg",
        figma: "assets/icons/figma.svg",
        jira: "assets/icons/jira.svg",
        confluence: "assets/icons/confluence.svg",
        trello: "assets/icons/trello.svg",
        miro: "assets/icons/miro.svg",
        socialAccounts: "assets/icons/social-accounts.svg"
    })
});