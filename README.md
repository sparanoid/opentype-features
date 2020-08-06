# OpenType Features in CSS

[![Built with Almace Scaffolding](https://d349cztnlupsuf.cloudfront.net/amsf-badge.svg)](https://sparanoid.com/lab/amsf/)
[![CircleCI](https://circleci.com/gh/sparanoid/opentype-features.svg?style=svg)](https://circleci.com/gh/sparanoid/almace-scaffolding)
[![devDependency Status](https://david-dm.org/sparanoid/opentype-features/dev-status.svg)](https://david-dm.org/sparanoid/opentype-features#info=devDependencies)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/sparanoid/opentype-features)

The Complete CSS Demo for OpenType Features

-----

## Contributing

If you find something wrong or I just missed some OpenType features of cool fonts, you can just edit [./_app/_data/opentype-features.yml](https://github.com/sparanoid/opentype-features/blob/master/_app/_data/opentype-features.yml) this data file via GitHub and send me Pull Request.

### Development Notes

#### List GSUB/GPOS Features

```shell
$ brew install lcdf-typetools
$ otfinfo -f font.ttf
```

#### Compress to WOFF2

```shell
$ brew install woff2
$ woff2_compress font.ttf
```

## Donate

Wanna buy me a cup of coffee? [Great](https://sparanoid.com/donate/).

## Author

**Sparanoid**

- Twitter: @[sparanoid](https://twitter.com/sparanoid)
- GitHub: @[sparanoid](https://github.com/sparanoid)

## Licenses

All files and directories are licensed under the [MIT](https://opensource.org/licenses/mit-license.php) unless explicitly stated.

© Sparanoid, Inc.
