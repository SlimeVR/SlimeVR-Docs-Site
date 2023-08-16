# SlimeVR Docs Site

https://docs.slimevr.dev

## Contributions

By contributing to this project you are placing all your code under MIT or less restricting licenses, and you certify that the code you have used is compatible with those licenses or is authored by you. If you're doing so on your work time, you certify that your employer is okay with this.

## Building

The docs use [mdBook](https://github.com/rust-lang/mdBook), [Comprehensive Rust's i18nhelpers](https://github.com/google/mdbook-i18n-helpers), [mdbook-admonish plugin](https://github.com/tommilligan/mdbook-admonish), and the [mdbook-toc plugin](https://github.com/badboy/mdbook-toc). Install both tools with:

```shell
$ cargo install mdbook mdbook-i18n-helpers mdbook-toc mdbook-admonish
```

Then run

```shell
$ mdbook serve -o
```

to start a web server with the docs. It will open a tab in your browser because of the ``-o`` flag
