oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g freeze-pkg
$ freeze-pkg COMMAND
running command...
$ freeze-pkg (--version)
freeze-pkg/0.0.1 linux-x64 node-v16.18.1
$ freeze-pkg --help [COMMAND]
USAGE
  $ freeze-pkg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`freeze-pkg freeze`](#freeze-pkg-freeze)
* [`freeze-pkg hello PERSON`](#freeze-pkg-hello-person)
* [`freeze-pkg hello world`](#freeze-pkg-hello-world)
* [`freeze-pkg help [COMMAND]`](#freeze-pkg-help-command)
* [`freeze-pkg plugins`](#freeze-pkg-plugins)
* [`freeze-pkg plugins:install PLUGIN...`](#freeze-pkg-pluginsinstall-plugin)
* [`freeze-pkg plugins:inspect PLUGIN...`](#freeze-pkg-pluginsinspect-plugin)
* [`freeze-pkg plugins:install PLUGIN...`](#freeze-pkg-pluginsinstall-plugin-1)
* [`freeze-pkg plugins:link PLUGIN`](#freeze-pkg-pluginslink-plugin)
* [`freeze-pkg plugins:uninstall PLUGIN...`](#freeze-pkg-pluginsuninstall-plugin)
* [`freeze-pkg plugins:uninstall PLUGIN...`](#freeze-pkg-pluginsuninstall-plugin-1)
* [`freeze-pkg plugins:uninstall PLUGIN...`](#freeze-pkg-pluginsuninstall-plugin-2)
* [`freeze-pkg plugins update`](#freeze-pkg-plugins-update)
* [`freeze-pkg test [FILE]`](#freeze-pkg-test-file)

## `freeze-pkg freeze`

Freeze dependencies in `package.json`.

```
USAGE
  $ freeze-pkg freeze -f <value> --pkgManager <value>

FLAGS
  -f, --file=<value>    (required) [default: package.json]
  --pkgManager=<value>  (required) [default: pnpm]

DESCRIPTION
  Freeze dependencies in `package.json`.
```

_See code: [dist/commands/freeze/index.ts](https://github.com/nafkhanzam/freeze-pkg/blob/v0.0.1/dist/commands/freeze/index.ts)_

## `freeze-pkg hello PERSON`

Say hello

```
USAGE
  $ freeze-pkg hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/nafkhanzam/freeze-pkg/blob/v0.0.1/dist/commands/hello/index.ts)_

## `freeze-pkg hello world`

Say hello world

```
USAGE
  $ freeze-pkg hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `freeze-pkg help [COMMAND]`

Display help for freeze-pkg.

```
USAGE
  $ freeze-pkg help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for freeze-pkg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `freeze-pkg plugins`

List installed plugins.

```
USAGE
  $ freeze-pkg plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ freeze-pkg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `freeze-pkg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ freeze-pkg plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ freeze-pkg plugins add

EXAMPLES
  $ freeze-pkg plugins:install myplugin 

  $ freeze-pkg plugins:install https://github.com/someuser/someplugin

  $ freeze-pkg plugins:install someuser/someplugin
```

## `freeze-pkg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ freeze-pkg plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ freeze-pkg plugins:inspect myplugin
```

## `freeze-pkg plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ freeze-pkg plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ freeze-pkg plugins add

EXAMPLES
  $ freeze-pkg plugins:install myplugin 

  $ freeze-pkg plugins:install https://github.com/someuser/someplugin

  $ freeze-pkg plugins:install someuser/someplugin
```

## `freeze-pkg plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ freeze-pkg plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ freeze-pkg plugins:link myplugin
```

## `freeze-pkg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ freeze-pkg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ freeze-pkg plugins unlink
  $ freeze-pkg plugins remove
```

## `freeze-pkg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ freeze-pkg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ freeze-pkg plugins unlink
  $ freeze-pkg plugins remove
```

## `freeze-pkg plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ freeze-pkg plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ freeze-pkg plugins unlink
  $ freeze-pkg plugins remove
```

## `freeze-pkg plugins update`

Update installed plugins.

```
USAGE
  $ freeze-pkg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `freeze-pkg test [FILE]`

describe the command here

```
USAGE
  $ freeze-pkg test [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ freeze-pkg test
```

_See code: [dist/commands/test.ts](https://github.com/nafkhanzam/freeze-pkg/blob/v0.0.1/dist/commands/test.ts)_
<!-- commandsstop -->
