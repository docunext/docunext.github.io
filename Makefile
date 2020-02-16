.PHONY install:
	npm i
clean:
	rm -rf .cache

dev: clean
	@npm run start

build: clean
	@npm run build

serve:
	@npm run serve

deploy:
	git add public
	git commit -m "updated" & true
	git subtree push --prefix=public origin master
