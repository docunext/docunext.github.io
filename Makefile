
develop:
	@npm run start

build:
	rm -rf .cache
	@npm run build

serve:
	@npm run serve

deploy:
	git add public && git commit -m "updated"
	git subtree push --prefix=public origin master
