/* eslint-disable */
module.exports = {
  //   Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    'tsc --noEmit',
    `eslint`,
    `prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
