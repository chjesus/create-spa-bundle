import { execSync } from 'child_process';

const colors = require('colors');

/**
 * 
 * @param n Name
 * @returns 
*/
export const Info = (n: string) => colors.cyan(n);

/**
 * 
 * @param n Name
 * @returns 
 */
export const Warn = (n: string) => colors.yellow(n);

/**
 * 
 * @param n Name
 * @returns 
 */
export const Error = (n: string) => colors.red(n);

/**
 * 
 * @param n Name
 * @returns 
 */
export const Validate = (n: string) => colors.green(n);

/**
 * 
 * @param c Command to execute
 * @returns 
 */
export const runCommand = (c: string) => {
  try {
    execSync(`${c}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${c}`, error);
    return false;
  }
  return true;
};
