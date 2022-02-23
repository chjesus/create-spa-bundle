#!/usr/bin/env node

import { runCommand, Info, Validate } from './helpers/actions';

import {
  GIT_CLONE,
  CD_FILE,
  INSTALL_DEPS,
  MESSAGE_CREATE,
  MESSAGE_SPECIFY,
  MESSAGE_WELCOME,
  MESSAGE_INSTALL,
  MESSAGE_START,
  MESSAGE_BUILD,
  MESSAGE_TYPING,
  PATH,
} from './helpers/constants';

const [, , repoName] = process.argv;

if (!repoName) {
  console.log(`${MESSAGE_SPECIFY}`);
  console.log('\nExample:');
  console.log(` ${Info('npm new-spa-app')} ${Validate('<name-project>')}`);
  process.exit();
}

console.log(`\n${MESSAGE_CREATE} ${Validate(PATH)}`);

const gitClone = `${GIT_CLONE} ${repoName}`;

const checkoutGitClone = runCommand(gitClone);

if (!checkoutGitClone) process.exit(-1);

const installDeps = `${CD_FILE} ${repoName} && ${INSTALL_DEPS}`;

console.log(`\n${MESSAGE_INSTALL} ${Info(repoName)} \n`);

const checkoutInstall = runCommand(installDeps);

if (!checkoutInstall) process.exit(-1);

console.log(`${MESSAGE_WELCOME}\n`);

console.log(` ${Info('npm run start')}\n`);
console.log(`  ${MESSAGE_START}\n`);
console.log(` ${Info('npm run build')}\n`);
console.log(`  ${MESSAGE_BUILD}\n`);
console.log(`${MESSAGE_TYPING}\n`);
console.log(` ${Info('cd')} ${repoName}\n`);
console.log(` ${Info('npm run start')}\n`);
