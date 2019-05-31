import chalk from 'chalk';

const strCoercion = (message) => {
  if (typeof message !== 'string') {
    return JSON.stringify(message);
  }

  return message;
};

export const logger = {
  // eslint-disable-next-line no-console
  error: (message) => console.log(chalk.red(strCoercion(message))),
  // eslint-disable-next-line no-console
  idle: (message) => console.log(chalk.yellow(strCoercion(message))),
  // eslint-disable-next-line no-console
  running: (message) => console.log(chalk.blue(strCoercion(message))),
  // eslint-disable-next-line no-console
  success: (message) => console.log(chalk.green(strCoercion(message))),
};
