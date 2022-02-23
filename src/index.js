#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var actions_1 = require("./helpers/actions");
var constants_1 = require("./helpers/constants");
var _a = process.argv, repoName = _a[2];
if (!repoName) {
    console.log("".concat(constants_1.MESSAGE_SPECIFY));
    console.log('\nExample:');
    console.log(" ".concat((0, actions_1.Info)('npm new-spa-app'), " ").concat((0, actions_1.Validate)('<name-project>')));
    process.exit();
}
console.log("\n".concat(constants_1.MESSAGE_CREATE, " ").concat((0, actions_1.Validate)(constants_1.PATH)));
var gitClone = "".concat(constants_1.GIT_CLONE, " ").concat(repoName);
var checkoutGitClone = (0, actions_1.runCommand)(gitClone);
if (!checkoutGitClone)
    process.exit(-1);
var installDeps = "".concat(constants_1.CD_FILE, " ").concat(repoName, " && ").concat(constants_1.INSTALL_DEPS);
console.log("\n".concat(constants_1.MESSAGE_INSTALL, " ").concat((0, actions_1.Info)(repoName), " \n"));
var checkoutInstall = (0, actions_1.runCommand)(installDeps);
if (!checkoutInstall)
    process.exit(-1);
console.log("".concat(constants_1.MESSAGE_WELCOME, "\n"));
console.log(" ".concat((0, actions_1.Info)('npm run start'), "\n"));
console.log("  ".concat(constants_1.MESSAGE_START, "\n"));
console.log(" ".concat((0, actions_1.Info)('npm run build'), "\n"));
console.log("  ".concat(constants_1.MESSAGE_BUILD, "\n"));
console.log("".concat(constants_1.MESSAGE_TYPING, "\n"));
console.log(" ".concat((0, actions_1.Info)('cd'), " ").concat(repoName, "\n"));
console.log(" ".concat((0, actions_1.Info)('npm run start'), "\n"));
