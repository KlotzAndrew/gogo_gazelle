# gogo_gazelle

A toy app for getting started with gazelle

## Install & Setup

```bash
nvm use
npm install -g pnpm
pnpm install

# validate everything works
make test
make run
```

The program outputs this string on success:
> app,dogs,great,are,dogs,food,utilmsg,great,are,pets

## Using Gazelle and Bazel

This currently does not work

### Generate build files:
```bash
bazelisk configure
# or
make bazel-gen
```

### Using Bazel (not working)
```
bazel query //...
```

<details close><summary>errors with:</summary>

ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/src/app/pets/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in src/app/pets/. You must set the tsconfig attribute on @//src/app/pets:pets.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/src/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in src/. You must set the tsconfig attribute on @//src:src.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/libs/dogs/src/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in libs/dogs/src/. You must set the tsconfig attribute on @//libs/dogs/src:src.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/src/app/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in src/app/. You must set the tsconfig attribute on @//src/app:app.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/libs/dogs/src/paws/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in libs/dogs/src/paws/. You must set the tsconfig attribute on @//libs/dogs/src/paws:paws.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/src/app/food/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in src/app/food/. You must set the tsconfig attribute on @//src/app/food:food.
ERROR: Traceback (most recent call last):
	File "/Users/andrewklotz/workspace/bazel_js_playground/gogo_gazelle/src/utils/BUILD.bazel", line 3, column 11, in <toplevel>
		ts_project(
	File "/private/var/tmp/_bazel_andrewklotz/088ec916b4fc655548e899ea2cc40be4/external/aspect_rules_ts/ts/defs.bzl", line 273, column 17, in ts_project
		fail("No tsconfig.json file found in {}/. You must set the tsconfig attribute on {}.".format(
Error in fail: No tsconfig.json file found in src/utils/. You must set the tsconfig attribute on @//src/utils:utils.
ERROR: package contains errors: src/app/food
ERROR: package contains errors: libs/dogs/src/paws
ERROR: package contains errors: src/app/pets
ERROR: package contains errors: src/utils
ERROR: package contains errors: libs/dogs/src
ERROR: package contains errors: src/app
ERROR: package contains errors: src
ERROR: Error evaluating '//...': error loading package 'libs/dogs/src/paws': Package 'libs/dogs/src/paws' contains errors
Loading: 8 packages loaded
Error: bazel exited with exit code: 7

</details>
