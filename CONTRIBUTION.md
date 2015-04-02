# Contribution

The project is in such an early phase and it may seem ridiculous to add a contribution guide, but at the moment
I use it as self documentation for decisions I made.


## Git commit messages

Inspired by the [angular guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit)


    <type>(<scope>): <subject> (<issue>)
    <BLANK LINE>
    <further description if neccessary>

Examples...

    feat(kuiperArrayUtils): add inArray method to arrayUtils service (#1)

    chore(grunt): add grunt task 'test' (#2)

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change.
For example a module name like `kuiperArrayUtils` or 'grunt' if the Gruntfile was changed.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

## Issue
Id of a related github issue. If a commit closes a ticket just write `closes <issue id>`.

### Further description

Only if necessary!
