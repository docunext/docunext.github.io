
clean:
	rm -rf .cache

dev: clean
	@npm run start

build: clean
	@npm run build

serve:
	@npm run serve

deploy:
	git add public && git commit -m "updated"
	git subtree push --prefix=public origin master
