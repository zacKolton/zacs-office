"use strict";

const Utilities = Object.freeze({
    getElement(selector, parent = document) {
        const element = parent.querySelector(selector);

        if (!element) {
            throw new Error(`Element not found: ${selector}`);
        }

        return element;
    },

    createElement(tagName, options = {}) {
        const element = document.createElement(tagName);

        if (options.className) {
            element.className = options.className;
        }

        if (options.id) {
            element.id = options.id;
        }

        if (options.text) {
            element.textContent = options.text;
        }

        if (options.html) {
            element.innerHTML = options.html;
        }

        if (options.attributes) {
            Object.entries(options.attributes).forEach(([name, value]) => {
                element.setAttribute(name, value);
            });
        }

        if (options.children) {
            options.children.forEach((child) => {
                element.appendChild(child);
            });
        }

        return element;
    },

    escapeHtml(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    },

    markdownToHtml(value) {
        const escaped = Utilities.escapeHtml(value);

        return escaped
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>");
    },

    setMarkdown(element, value) {
        element.innerHTML = Utilities.markdownToHtml(value);
    },

    applyCssVariables(cssVariables) {
        Object.entries(cssVariables).forEach(([variableName, variableValue]) => {
            document.documentElement.style.setProperty(variableName, variableValue);
        });
    },

    createSection(sectionId) {
        return Utilities.createElement("section", {
            className: "section",
            id: sectionId
        });
    },

    createButtonLink(text, href, className) {
        return Utilities.createElement("a", {
            className,
            text,
            attributes: {
                href
            }
        });
    },

    shouldUseImageAssets() {
        return Boolean(window.AssetConstants && AssetConstants.USE_IMAGE_ASSETS);
    },

    getIconPath(iconKey) {
        if (!window.AssetConstants || !AssetConstants.icons) {
            return "";
        }

        return AssetConstants.icons[iconKey] || "";
    },

    getImagePath(imageKey) {
        if (!window.AssetConstants || !AssetConstants.images) {
            return "";
        }

        return AssetConstants.images[imageKey] || "";
    }
});