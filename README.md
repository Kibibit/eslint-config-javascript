<p align="center">
  <a href="https://github.com/Kibibit/eslint-config-javascript" target="blank"><img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" width="150" alt="repo Logo" />
  </a>
  <h2 align="center">
    @kibibit/eslint-config-javascript
  </h2>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@kibibit/eslint-config-javascript"><img src="https://img.shields.io/npm/v/@kibibit/eslint-config-javascript/latest.svg?style=for-the-badge&logo=npm&color=CB3837"></a>
</p>
<p align="center">
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"></a>
 <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors"></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>
<p align="center">
  Shared ESLint config for JavaScript
</p>
<hr>

## Installation
```
npm install --save-dev @kibibit/eslint-config-javascript
```

## Usage Example

```javascript
module.exports = {
  'parserOptions': {
    'ecmaVersion': 2017
  },

  env: {
    node: true
  },
  plugins: [
    'unused-imports',
    'simple-import-sort',
    'import'
  ],
  'extends': '@kibibit/eslint-config-javascript'
};

```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://thatkookooguy.kibibit.io/"><img src="https://avatars3.githubusercontent.com/u/10427304?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Neil Kalman</b></sub></a><br /><a href="https://github.com/Kibibit/eslint-config-javascript/commits?author=Thatkookooguy" title="Code">💻</a> <a href="https://github.com/Kibibit/eslint-config-javascript/commits?author=Thatkookooguy" title="Documentation">📖</a> <a href="#design-Thatkookooguy" title="Design">🎨</a> <a href="#maintenance-Thatkookooguy" title="Maintenance">🚧</a> <a href="#infra-Thatkookooguy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Kibibit/eslint-config-javascript/commits?author=Thatkookooguy" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Stay in touch

- Author - [Neil Kalman](https://github.com/thatkookooguy)
- Website - [https://github.com/kibibit](https://github.com/kibibit)
- StackOverflow - [thatkookooguy](https://stackoverflow.com/users/1788884/thatkookooguy)
- Twitter - [@thatkookooguy](https://twitter.com/thatkookooguy)
- Twitter - [@kibibit_opensrc](https://twitter.com/kibibit_opensrc)
