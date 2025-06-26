{
  description = "Server app for SlimeVR ecosystem";

  inputs.nixpkgs.url = "nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  inputs.rust-overlay.url = "github:oxalica/rust-overlay";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    rust-overlay,
  }:
    flake-utils.lib.eachDefaultSystem
    (
      system: let
        overlays = [(import rust-overlay)];
        pkgs = import nixpkgs {
          inherit system overlays;
        };
        nativeBuildInputs = with pkgs; [
          curl
          gcc
          openssl
          pkg-config
          which
          zlib
          rust-bin.stable.latest.default
          mdbook
          mdbook-toc
          mdbook-admonish
          mdbook-i18n-helpers

          freetype
          expat
        ];
        buildInputs = with pkgs; [
          pkg-config
          openssl.out
          glib.out
        ];
      in {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs =
            nativeBuildInputs
            ++ [
            ];
          buildInputs =
            buildInputs
            ++ [
            ];
        };
      }
    );
}
