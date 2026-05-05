"use strict";

document.addEventListener("DOMContentLoaded", () => {
    Utilities.applyCssVariables(ColorConstants.cssVariables);

    document.title = TextConstants.meta.pageTitle;

    renderHeader();
    renderMain();
    renderFooter();
    attachEventHandlers();
});

function renderHeader() {
    const header = Utilities.getElement("#siteHeader");

    const brandMark = Utilities.createElement("span", {
        className: "brand-mark",
        attributes: {
            "aria-hidden": "true"
        }
    });

    if (Utilities.shouldUseImageAssets()) {
        const logoPath = Utilities.getImagePath("logo");

        if (logoPath) {
            brandMark.appendChild(
                Utilities.createElement("img", {
                    attributes: {
                        src: logoPath,
                        alt: TextConstants.brand.logoAlt
                    }
                })
            );
        }
    }

    const brand = Utilities.createElement("a", {
        className: "brand",
        attributes: {
            href: LinkConstants.anchors.top,
            "aria-label": `${TextConstants.brand.name} home`
        },
        children: [
            brandMark,
            Utilities.createElement("span", {
                text: TextConstants.brand.name
            })
        ]
    });

    const menuButton = Utilities.createElement("button", {
        className: "mobile-menu-button",
        id: "menuButton",
        text: TextConstants.navigation.menuButton,
        attributes: {
            type: "button"
        }
    });

    const navLinks = Utilities.createElement("div", {
        className: "nav-links",
        id: "navLinks",
        children: [
            createNavLink(TextConstants.navigation.whatIDo, LinkConstants.anchors.work),
            createNavLink(TextConstants.navigation.requestQuote, LinkConstants.anchors.quote),
            createNavLink(TextConstants.navigation.about, LinkConstants.anchors.about),
            createNavLink(TextConstants.navigation.faq, LinkConstants.anchors.faq),
            createNavLink(TextConstants.navigation.startHere, LinkConstants.anchors.quote, "nav-cta")
        ]
    });

    const nav = Utilities.createElement("nav", {
        className: "nav",
        attributes: {
            "aria-label": "Main navigation"
        },
        children: [
            brand,
            menuButton,
            navLinks
        ]
    });

    header.appendChild(nav);
}

function createNavLink(text, href, extraClass = "") {
    return Utilities.createElement("a", {
        className: extraClass,
        text,
        attributes: {
            href
        }
    });
}

function renderMain() {
    const app = Utilities.getElement("#app");

    app.id = "top";

    app.appendChild(renderHero());
    app.appendChild(renderWorkSection());
    app.appendChild(renderQuoteSection());
    app.appendChild(renderAboutSection());
    app.appendChild(renderFaqSection());
}

function renderHero() {
    const section = Utilities.createElement("section", {
        className: "hero"
    });

    const heading = Utilities.createElement("h1", {
        text: TextConstants.hero.heading
    });

    const body = Utilities.createElement("p", {
        className: "hero-copy"
    });

    Utilities.setMarkdown(body, TextConstants.hero.body);

    const buttonRow = Utilities.createElement("div", {
        className: "button-row",
        children: [
            Utilities.createButtonLink(
                TextConstants.hero.primaryButton,
                LinkConstants.anchors.quote,
                "btn btn-primary"
            ),
            Utilities.createButtonLink(
                TextConstants.hero.secondaryButton,
                LinkConstants.anchors.work,
                "btn btn-secondary"
            )
        ]
    });

    const trustRow = Utilities.createElement("div", {
        className: "trust-row"
    });

    TextConstants.hero.trustItems.forEach((item) => {
        trustRow.appendChild(
            Utilities.createElement("span", {
                text: item
            })
        );
    });

    section.appendChild(heading);
    section.appendChild(body);
    section.appendChild(buttonRow);
    section.appendChild(trustRow);

    return section;
}

function renderWorkSection() {
    const section = Utilities.createSection("work");

    const header = renderSectionHeader({
        kicker: TextConstants.work.kicker,
        heading: TextConstants.work.heading,
        intro: TextConstants.work.intro
    });

    const workTable = Utilities.createElement("div", {
        className: "work-table"
    });

    TextConstants.work.categories.forEach((category) => {
        workTable.appendChild(renderWorkCategory(category));
    });

    section.appendChild(header);
    section.appendChild(workTable);

    return section;
}

function renderWorkCategory(category) {
    const heading = Utilities.createElement("div", {
        className: "work-heading",
        children: [
            Utilities.createElement("h3", {
                text: category.title
            }),
            Utilities.createElement("p", {
                text: category.description
            })
        ]
    });

    const toolGrid = Utilities.createElement("div", {
        className: "tool-grid"
    });

    category.tools.forEach((tool) => {
        toolGrid.appendChild(renderToolBadge(tool));
    });

    const workItems = Utilities.createElement("div", {
        className: "work-items"
    });

    category.items.forEach((item) => {
        workItems.appendChild(
            Utilities.createElement("div", {
                text: item
            })
        );
    });

    const content = Utilities.createElement("div", {
        className: "work-content",
        children: [
            Utilities.createElement("div", {
                className: "tool-label",
                text: TextConstants.work.toolLabel
            }),
            toolGrid,
            workItems
        ]
    });

    return Utilities.createElement("div", {
        className: "work-row",
        children: [
            heading,
            content
        ]
    });
}

function renderToolBadge(tool) {
    const icon = Utilities.createElement("span", {
        className: `tool-icon ${tool.cssClass}`
    });

    if (Utilities.shouldUseImageAssets()) {
        const iconPath = Utilities.getIconPath(tool.iconKey);

        if (iconPath) {
            icon.appendChild(
                Utilities.createElement("img", {
                    attributes: {
                        src: iconPath,
                        alt: ""
                    }
                })
            );
        } else {
            icon.textContent = tool.fallbackText;
        }
    } else {
        icon.textContent = tool.fallbackText;
    }

    return Utilities.createElement("span", {
        className: "tool-badge",
        children: [
            icon,
            document.createTextNode(tool.label)
        ]
    });
}

function renderQuoteSection() {
    const section = Utilities.createSection("quote");

    const kicker = Utilities.createElement("div", {
        className: "kicker",
        text: TextConstants.quote.kicker
    });

    const heading = Utilities.createElement("h2", {
        text: TextConstants.quote.heading
    });

    const body = Utilities.createElement("p", {
        text: TextConstants.quote.body
    });

    const prototypeNote = Utilities.createElement("div", {
        className: "prototype-note",
        id: "prototypeNote",
        text: TextConstants.quote.prototypeNote
    });

    const copy = Utilities.createElement("div", {
        children: [
            kicker,
            heading,
            body,
            prototypeNote
        ]
    });

    const quoteButton = Utilities.createElement("a", {
        className: "btn btn-primary",
        id: "quoteFormButton",
        text: TextConstants.quote.button,
        attributes: {
            href: LinkConstants.quoteFormUrl
        }
    });

    if (
        LinkConstants.quoteFormUrl !== "#" &&
        LinkConstants.externalLinks.quoteFormOpensNewTab
    ) {
        quoteButton.setAttribute("target", "_blank");
        quoteButton.setAttribute("rel", "noopener noreferrer");
    }

    const panel = Utilities.createElement("div", {
        className: "quote-panel",
        children: [
            copy,
            quoteButton
        ]
    });

    section.appendChild(panel);

    return section;
}

function renderAboutSection() {
    const section = Utilities.createSection("about");

    const header = renderSectionHeader({
        kicker: TextConstants.about.kicker,
        heading: TextConstants.about.heading
    });

    const zacPhoto = renderPhotoPlaceholder(
        "zacPhoto",
        TextConstants.about.zacPhotoPlaceholder,
        "photo-placeholder"
    );

    const dogPhoto = renderPhotoPlaceholder(
        "dogPhoto",
        TextConstants.about.dogPhotoPlaceholder,
        "photo-placeholder small"
    );

    const photos = Utilities.createElement("div", {
        className: "about-photos",
        children: [
            zacPhoto,
            dogPhoto
        ]
    });

    const aboutText = Utilities.createElement("div", {
        className: "about-text"
    });

    TextConstants.about.paragraphs.forEach((paragraph) => {
        const paragraphElement = Utilities.createElement("p");
        Utilities.setMarkdown(paragraphElement, paragraph);
        aboutText.appendChild(paragraphElement);
    });

    aboutText.appendChild(
        Utilities.createElement("div", {
            className: "about-note",
            text: TextConstants.about.note
        })
    );

    const panel = Utilities.createElement("div", {
        className: "about-panel",
        children: [
            photos,
            aboutText
        ]
    });

    section.appendChild(header);
    section.appendChild(panel);

    return section;
}

function renderPhotoPlaceholder(imageKey, placeholderText, className) {
    const element = Utilities.createElement("div", {
        className,
        text: placeholderText
    });

    if (Utilities.shouldUseImageAssets()) {
        const imagePath = Utilities.getImagePath(imageKey);

        if (imagePath) {
            element.style.backgroundImage = `url("${imagePath}")`;
            element.classList.add("has-image");
        }
    }

    return element;
}

function renderFaqSection() {
    const section = Utilities.createSection("faq");

    const header = Utilities.createElement("div", {
        className: "section-header",
        children: [
            Utilities.createElement("h2", {
                text: TextConstants.faq.heading
            })
        ]
    });

    const faqList = Utilities.createElement("div", {
        className: "faq"
    });

    TextConstants.faq.items.forEach((item) => {
        faqList.appendChild(renderFaqItem(item));
    });

    section.appendChild(header);
    section.appendChild(faqList);

    return section;
}

function renderFaqItem(item) {
    const details = Utilities.createElement("details");

    if (item.openByDefault) {
        details.open = true;
    }

    details.appendChild(
        Utilities.createElement("summary", {
            text: item.question
        })
    );

    const answer = Utilities.createElement("p");
    Utilities.setMarkdown(answer, item.answer);
    details.appendChild(answer);

    return details;
}

function renderFooter() {
    const footer = Utilities.getElement("#siteFooter");

    footer.appendChild(
        Utilities.createElement("strong", {
            text: TextConstants.footer.brand
        })
    );

    footer.appendChild(
        Utilities.createElement("span", {
            text: TextConstants.footer.description
        })
    );
}

function renderSectionHeader({ kicker, heading, intro }) {
    const children = [];

    if (kicker) {
        children.push(
            Utilities.createElement("div", {
                className: "kicker",
                text: kicker
            })
        );
    }

    children.push(
        Utilities.createElement("h2", {
            text: heading
        })
    );

    if (intro) {
        children.push(
            Utilities.createElement("p", {
                text: intro
            })
        );
    }

    return Utilities.createElement("div", {
        className: "section-header",
        children
    });
}

function attachEventHandlers() {
    const menuButton = Utilities.getElement("#menuButton");
    const navLinks = Utilities.getElement("#navLinks");
    const quoteFormButton = Utilities.getElement("#quoteFormButton");
    const prototypeNote = Utilities.getElement("#prototypeNote");

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });

    quoteFormButton.addEventListener("click", (event) => {
        if (LinkConstants.quoteFormUrl === "#") {
            event.preventDefault();
            prototypeNote.style.display = "block";
            prototypeNote.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });
}