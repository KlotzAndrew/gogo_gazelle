setup:
	nvm use
	npm install -g pnpm
	pnpm install

build:
	pnpm run build

run: build
	pnpm run start

test:
	pnpm run test

delete-build-files:
	find . -type f -name 'BUILD.bazel' \
		! -path "./BUILD.bazel" \
		-delete

bazel-gen: delete-build-files
	bazelisk configure