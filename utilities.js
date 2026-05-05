"use strict";

window.Utilities = Object.freeze({
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

        if (options.text !== undefined && options.text !== null) {
            element.textContent = options.text;
        }

        if (options.html !== undefined && options.html !== null) {
            element.innerHTML = options.html;
        }

        if (options.attributes) {
            Object.entries(options.attributes).forEach(([name, value]) => {
                if (value !== undefined && value !== null) {
                    element.setAttribute(name, value);
                }
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
        if (!cssVariables) {
            return;
        }

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

    hasAssetPath(path) {
        return typeof path === "string" && path.trim().length > 0;
    },

    getAssetConstants() {
        if (typeof AssetConstants !== "undefined") {
            return AssetConstants;
        }

        if (window.AssetConstants) {
            return window.AssetConstants;
        }

        return null;
    },

    getIconPath(iconKey) {
        const assetConstants = Utilities.getAssetConstants();

        if (!assetConstants || !assetConstants.icons) {
            return "";
        }

        return assetConstants.icons[iconKey] || "";
    },

    getImagePath(imageKey) {
        const assetConstants = Utilities.getAssetConstants();

        if (!assetConstants || !assetConstants.images) {
            return "";
        }

        return assetConstants.images[imageKey] || "";
    },

    createOptionalImage({ src, alt = "", className = "", onLoad, onError }) {
        if (!Utilities.hasAssetPath(src)) {
            return null;
        }

        const image = Utilities.createElement("img", {
            className,
            attributes: {
                src,
                alt
            }
        });

        image.addEventListener("load", () => {
            if (typeof onLoad === "function") {
                onLoad(image);
            }
        });

        image.addEventListener("error", () => {
            image.remove();

            if (typeof onError === "function") {
                onError();
            }
        });

        return image;
    }
});