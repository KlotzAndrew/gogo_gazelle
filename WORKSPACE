workspace(
    name = "gogo_gazelle",
)

### START COPY FROM:
#### https://github.com/aspect-build/rules_js#installation
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "aspect_rules_js",
    sha256 = "7ab9776bcca823af361577a1a2ebb9a30d2eb5b94ecc964b8be360f443f714b2",
    strip_prefix = "rules_js-1.32.6",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.32.6/rules_js-v1.32.6.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

# For convenience, npm_translate_lock does this call automatically.
# Uncomment if you don't call npm_translate_lock at all.
#load("@bazel_features//:deps.bzl", "bazel_features_deps")
#bazel_features_deps()

load("@aspect_rules_js//npm:repositories.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

### END COPY

### TS Docs
### https://docs-legacy.aspect.build/aspect-build/rules_ts/v1.0.4/docs/repositories-docgen.html

http_archive(
    name = "aspect_rules_ts",
    sha256 = "ace5b609603d9b5b875d56c9c07182357c4ee495030f40dcefb10d443ba8c208",
    strip_prefix = "rules_ts-1.4.0",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.4.0/rules_ts-v1.4.0.tar.gz",
)
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")
# curl --silent https://registry.npmjs.org/typescript/5.2.2 | jq -r '.dist.integrity'
rules_ts_dependencies(
    ts_version_from = "//:package.json",
    ts_integrity = "sha512-mI4WrpHsbCIcwT9cF4FZvr80QUeKvsUsUvKDoR+X/7XHQH98xYD8YHZg7ANtz2GtZt/CBq2QJ0thkGJMHfqc1w=="
)

http_archive(
    name = "aspect_rules_jest",
    sha256 = "52dc08fd252add240124ef7ccc46df3a505121758dfb96578a3d5f2ebb4c2b40",
    strip_prefix = "rules_jest-0.18.1",
    url = "https://github.com/aspect-build/rules_jest/releases/download/v0.18.1/rules_jest-v0.18.1.tar.gz",
)
load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")
rules_jest_dependencies()
