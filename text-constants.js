"use strict";

/*
  All visible website text belongs here.

  Markdown supported in longer body text:
  - **bold**
  - *italic*
*/

const TextConstants = Object.freeze({
    meta: Object.freeze({
        pageTitle: "Zac's Office | Computer and Admin Help"
    }),

    brand: Object.freeze({
        name: "Zac's Office",
        logoAlt: "Zac's Office logo"
    }),

    navigation: Object.freeze({
        whatIDo: "What I do",
        requestQuote: "Request quote",
        about: "About",
        faq: "FAQ",
        startHere: "Start here",
        menuButton: "Menu"
    }),

    hero: Object.freeze({
        heading: "Computer problems, admin work, websites, small tools.",
        body: "I fix messy spreadsheets, PDFs, forms, reports, file workflows, repetitive computer tasks, quick websites, and internal tools. **That can mean a small cleanup, a larger project, or ongoing support on a retainer when needed.**",
        primaryButton: "Request a quote",
        secondaryButton: "See what I do",
        trustItems: Object.freeze([
            "Fixed quote before work starts",
            "Small jobs welcome",
            "Small fixes to larger internal projects"
        ])
    }),

    work: Object.freeze({
        kicker: "What I do",
        heading: "Practical computer work for files, forms, data, websites, tools, repeated tasks.",
        intro: "If it happens on a computer and wastes time, it probably belongs here.",
        toolLabel: "Common tools",

        categories: Object.freeze([
            Object.freeze({
                title: "Spreadsheets",
                description: "Excel or Google Sheets that need repair, cleanup, rebuilding, or better structure.",
                tools: Object.freeze([
                    Object.freeze({ label: "Excel", iconKey: "excel", fallbackText: "X", cssClass: "excel" }),
                    Object.freeze({ label: "Google Sheets", iconKey: "googleSheets", fallbackText: "S", cssClass: "gsheets" }),
                    Object.freeze({ label: "CSV", iconKey: "csv", fallbackText: "C", cssClass: "csv" }),
                    Object.freeze({ label: "VBA", iconKey: "vba", fallbackText: "V", cssClass: "vba" })
                ]),
                items: Object.freeze([
                    "Broken formulas",
                    "Messy tabs",
                    "Duplicate records",
                    "Quote calculators",
                    "Registration lists",
                    "Maintenance logs in a sheet",
                    "Sales or job summaries",
                    "Cleaner filters or formatting"
                ])
            }),

            Object.freeze({
                title: "Documents",
                description: "Information trapped in awkward formats turned into something usable.",
                tools: Object.freeze([
                    Object.freeze({ label: "PDF", iconKey: "pdf", fallbackText: "P", cssClass: "pdf" }),
                    Object.freeze({ label: "Word", iconKey: "word", fallbackText: "W", cssClass: "word" }),
                    Object.freeze({ label: "Google Forms", iconKey: "googleForms", fallbackText: "F", cssClass: "gforms" }),
                    Object.freeze({ label: "Google Drive", iconKey: "googleDrive", fallbackText: "D", cssClass: "gdrive" })
                ]),
                items: Object.freeze([
                    "PDF tables to spreadsheets",
                    "Report cleanup",
                    "Word document formatting",
                    "Google Forms setup",
                    "Form responses organized into sheets",
                    "Reusable templates",
                    "Data copied from messy exports",
                    "Simple document workflows"
                ])
            }),

            Object.freeze({
                title: "Automations",
                description: "Small scripts or workflows that reduce repeated copying, sorting, checking, reporting.",
                tools: Object.freeze([
                    Object.freeze({ label: "Apps Script", iconKey: "appsScript", fallbackText: "A", cssClass: "appsscript" }),
                    Object.freeze({ label: "Zapier", iconKey: "zapier", fallbackText: "Z", cssClass: "zapier" }),
                    Object.freeze({ label: "IFTTT", iconKey: "ifttt", fallbackText: "I", cssClass: "ifttt" }),
                    Object.freeze({ label: "iOS Shortcuts", iconKey: "iosShortcuts", fallbackText: "S", cssClass: "shortcuts" }),
                    Object.freeze({ label: "Automator", iconKey: "automator", fallbackText: "A", cssClass: "automator" }),
                    Object.freeze({ label: "PowerShell", iconKey: "powershell", fallbackText: "PS", cssClass: "powershell" })
                ]),
                items: Object.freeze([
                    "Auto-generated reports",
                    "Recurring spreadsheet cleanup",
                    "Email notifications",
                    "File renaming or sorting",
                    "Office task shortcuts",
                    "Simple process documentation",
                    "Data handoff cleanup",
                    "Repeated task reduction"
                ])
            }),

            Object.freeze({
                title: "Small tools",
                description: "Lightweight prototypes, internal tools, API connections when a normal spreadsheet is not enough.",
                tools: Object.freeze([
                    Object.freeze({ label: "APIs", iconKey: "api", fallbackText: "API", cssClass: "api" }),
                    Object.freeze({ label: "Web tools", iconKey: "webTools", fallbackText: "T", cssClass: "tool" }),
                    Object.freeze({ label: "JavaScript", iconKey: "javascript", fallbackText: "JS", cssClass: "js" }),
                    Object.freeze({ label: "VS Code", iconKey: "vsCode", fallbackText: "V", cssClass: "vscode" }),
                    Object.freeze({ label: "Mobile forms", iconKey: "mobileForms", fallbackText: "M", cssClass: "mobile" })
                ]),
                items: Object.freeze([
                    "API connections",
                    "Small internal web tools",
                    "Data lookup tools",
                    "CSV cleanup tools",
                    "Simple dashboards",
                    "Workflow prototypes",
                    "Phone-friendly forms",
                    "Computer-task problem solving"
                ])
            }),

            Object.freeze({
                title: "Projects",
                description: "One-off computer work that needs setup, structure, research, or a usable finished result.",
                tools: Object.freeze([
                    Object.freeze({ label: "GitHub", iconKey: "github", fallbackText: "G", cssClass: "github" }),
                    Object.freeze({ label: "HTML/CSS", iconKey: "htmlCss", fallbackText: "H", cssClass: "html" }),
                    Object.freeze({ label: "Figma", iconKey: "figma", fallbackText: "F", cssClass: "figma" }),
                    Object.freeze({ label: "Jira", iconKey: "jira", fallbackText: "J", cssClass: "jira" }),
                    Object.freeze({ label: "Confluence", iconKey: "confluence", fallbackText: "C", cssClass: "confluence" }),
                    Object.freeze({ label: "Trello", iconKey: "trello", fallbackText: "T", cssClass: "trello" }),
                    Object.freeze({ label: "Miro", iconKey: "miro", fallbackText: "M", cssClass: "miro" }),
                    Object.freeze({ label: "Social accounts", iconKey: "socialAccounts", fallbackText: "S", cssClass: "social" })
                ]),
                items: Object.freeze([
                    "Quick business websites",
                    "GitHub Pages setup",
                    "Project workspace setup",
                    "Social account setup",
                    "Public web data collection",
                    "Online research tasks",
                    "Scheduling tools",
                    "Virtual assistant computer work"
                ])
            })
        ])
    }),

    quote: Object.freeze({
        kicker: "Request quote",
        heading: "Describe what needs doing.",
        body: "The quote form asks for your name, business name, email, and a short explanation of the problem. After that, I follow up by email if more detail is needed and send the quote from there.",
        button: "Open quote form",
        prototypeNote: "Prototype button. On the live GitHub Pages site, this will open the Google Form."
    }),

    about: Object.freeze({
        kicker: "About",
        heading: "Who I am",
        zacPhotoPlaceholder: "Photo of Zac",
        dogPhotoPlaceholder: "Photo of dog",
        paragraphs: Object.freeze([
            "I’m Zac. I graduated from the University of Manitoba with a computer science degree in 2023, and I currently work as a product owner in the financial planning space.",
            "Outside of my main job, I spend a lot of time building side projects. That usually means spreadsheets, forms, reports, automations, internal tools, websites, or the computer tasks businesses keep putting off because they are annoying to untangle.",
            "I’m strongest on the computer side of things: organizing messy information, improving workflows, connecting tools, setting up practical systems, and making repetitive work easier. I am not selling myself as a giant software agency. I’m selling useful problem solving.",
            "The work can range from a small office fix to a larger internal project. I’ve handled projects that were closer to simple cleanup work, and others that were much more structured, such as scheduling systems or detailed internal reporting workflows."
        ]),
        note: "Based in Winnipeg. Usually working with a laptop nearby and a dog somewhere in the room."
    }),

    faq: Object.freeze({
        heading: "FAQ",
        items: Object.freeze([
            Object.freeze({
                question: "What work is excluded?",
                answer: "Tax filings, payroll, legal documents, medical records, regulated financial advice, and anything that requires a licensed professional.",
                openByDefault: true
            }),

            Object.freeze({
                question: "How are quotes handled?",
                answer: "Most work is quoted as a fixed project after reviewing the problem. Open-ended or unclear work may be scoped in stages.",
                openByDefault: false
            }),

            Object.freeze({
                question: "How is payment handled?",
                answer: "Payment can be handled by Stripe for credit card payments, PayPal when useful, or Interac e-Transfer by email.",
                openByDefault: false
            }),

            Object.freeze({
                question: "Is this only for businesses?",
                answer: "The main focus is businesses, but the service can also fit nonprofits, organizers, independent operators, and people with practical computer or file problems.",
                openByDefault: false
            }),

            Object.freeze({
                question: "Is this a custom software service?",
                answer: "Only when the problem calls for it. Most work should stay small: cleaned files, repaired spreadsheets, simple forms, automations, API connections, lightweight internal tools, or quick websites.",
                openByDefault: false
            })
        ])
    }),

    footer: Object.freeze({
        brand: "Zac's Office",
        description: "Spreadsheets, PDFs, forms, reports, automations, websites, small computer problems."
    })
});