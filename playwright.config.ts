import { defineConfig } from "@playwright/test";

export default defineConfig({
    use: {
        headless: false,
        viewport: { width: 1280, height: 800 },
        launchOptions: {
            slowMo: 500,
        },
        video: "on",
        screenshot: "on",
    },
});
