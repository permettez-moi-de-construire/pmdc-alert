# PMDC alert

## Installation
Alert module for PMDC

Either `npm install` it or import via `<script>`

## Dependencies
The lib depends on lodash (only lodash/once actually), and looks for a `window._` variable when imported through `<script>`. Ensure to import lodash the same way right before importing the lib.

## Polyfills
The libs uses window.CustomEvent which should be polyfilled accordingly

## Usage