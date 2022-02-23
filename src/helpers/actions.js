"use strict";
exports.__esModule = true;
exports.runCommand = exports.Validate = exports.Error = exports.Warn = exports.Info = void 0;
var child_process_1 = require("child_process");
var colors = require('colors');
/**
 *
 * @param n Name
 * @returns
*/
var Info = function (n) { return colors.cyan(n); };
exports.Info = Info;
/**
 *
 * @param n Name
 * @returns
 */
var Warn = function (n) { return colors.yellow(n); };
exports.Warn = Warn;
/**
 *
 * @param n Name
 * @returns
 */
var Error = function (n) { return colors.red(n); };
exports.Error = Error;
/**
 *
 * @param n Name
 * @returns
 */
var Validate = function (n) { return colors.green(n); };
exports.Validate = Validate;
/**
 *
 * @param c Command to execute
 * @returns
 */
var runCommand = function (c) {
    try {
        (0, child_process_1.execSync)("".concat(c), { stdio: 'inherit' });
    }
    catch (error) {
        console.error("Failed to execute ".concat(c), error);
        return false;
    }
    return true;
};
exports.runCommand = runCommand;
