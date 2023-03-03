{
  description = "Server app for SlimeVR ecosystem";

  inputs.nixpkgs.url = "nixpkgs/nixos-22.11";
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
          pkgconfig
          which
          zlib
          rust-bin.stable.latest.default

          freetype
          expat
        ];
        buildInputs = with pkgs; [
          pkg-config
          openssl.out
          glib.out
          mdbook
          nodePackages_latest.markdownlint-cli

          # Some nice things to have
          exa
          fd
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

          shellHook = ''
            cargo install mdbook-toc

            export PATH="$HOME/.cargo/bin:$PATH"
            alias ls=exa
            alias find=fd
          '';
        };
      }
    );
}
