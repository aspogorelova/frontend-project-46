install:
	npm ci

make gendiff:
	node bin/gendiff.js

lint:
	npx eslint .