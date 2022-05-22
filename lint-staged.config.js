module.exports = {
  '**/*.(ts|tsx)': (filenames) => [
    'yarn tsc --noEmit',
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
