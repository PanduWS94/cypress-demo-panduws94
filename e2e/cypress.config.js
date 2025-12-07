const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    viewportHeight: 768,
    viewportWidth: 1366,
    experimentalStudio: false,
    defaultCommandTimeout: 60000,
    e2e: {
        specPattern: [
            "e2e/test/features/**"
        ],
        supportFile: "e2e/src/cypress/support/e2e.js",

        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });
            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config);

            const profileDir = path.join(__dirname, ".cypress-profile");

            on("before:browser:launch", (browser, launchOptions) => {
                if (browser.name === 'chrome') {
                    launchOptions.args.push(`--user-data-dir=${profileDir}`);
                }
                return launchOptions
            });

            on("task", {
                getLatestFile(folder) {
                    const files = fs.readdirSync(folder);
                    const sorted = files
                        .map(name => ({
                            name,
                            time: fs.statSync(path.join(folder, name)).mtime.getTime()
                        }))
                        .sort((a, b) => b.time - a.time);
                    return sorted.length ? sorted[0].name : null;
                },

                deleteDownloadedFiles(downloadFolder) {
                    return new Promise((resolve, reject) => {
                        fs.readdir(downloadFolder, (err, files) => {
                            if (err) return reject(err);

                            files.forEach(file => {
                                fs.unlink(path.join(downloadFolder, file), err => {
                                    if (err) reject(err);
                                });
                            });

                            resolve(null);
                        });
                    });
                }
            });
            return config;
        },
        downloadsFolder: "e2e/src/cypress/downloads",
    },
});