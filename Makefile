include .env

build:
	docker build -t nuxtjs-tutorial .

run:
	docker run -p 3000:3000 nuxtjs-tutorial .