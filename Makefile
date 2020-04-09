help:     ## Show this help.
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)

install: ## install
	npm i

clean: ## clean
	rm -rf .cache

dev: clean ## dev
	@npm run start

build: clean ## build
	@npm run build

serve: ## serve
	@npm run serve

deploy: ## deploy
	cp CNAME public/
	git add public
	git commit -m "updated" & true
	git subtree push --prefix=public origin master

