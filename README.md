# SlimeVR Docs Site

Official SlimeVR Documentation: https://docs.slimevr.dev

The Documentation is created using [mdBook](https://github.com/rust-lang/mdBook) with the following extensions: 
- [Comprehensive Rust's i18nhelpers](https://github.com/google/mdbook-i18n-helpers)
- [mdbook-admonish plugin](https://github.com/tommilligan/mdbook-admonish)
- [mdbook-toc plugin](https://github.com/badboy/mdbook-toc)

## Contributions

By contributing to this project you are placing all your code under MIT or less restricting licenses, and you certify that the code you have used is compatible with those licenses or is authored by you. If you're doing so on your work time, you certify that your employer is okay with this.

## How To Use

1. Obtain Rust from the Rust Website [Install Rust Page](https://www.rust-lang.org/tools/install).

2. Obtain dependencies by running in repository root:

```shell
$ cargo setup
```
3. Launch local server by calling:

```shell
$ cargo start
```

or by calling:
```shell
$ cargo start-open
``` 
so it also opens browser when local server is started.

4. Once you finished making changes, verify internal links by running following command:
```shell
$ cargo check-links
``` 