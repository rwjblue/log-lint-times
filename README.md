log-lint-times
==============================================================================

Prints out the total time for running eslint during each build / rebuild.

This was created to help answer the question posed in [ember-cli/rfcs#121](https://github.com/ember-cli/rfcs/pull/121):

> Do we have any numbers what speedup this might yield on average?

Installation
------------------------------------------------------------------------------

```
ember install log-lint-times
```


Usage
------------------------------------------------------------------------------

To use, run your ember-cli build and serve commands with instrumentation:

```
EMBER_CLI_INSTRUMENTATION=1 ember serve
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd log-lint-times`
* `yarn install`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
