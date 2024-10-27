up: docker-up
	# docker stats

down:
	docker compose -f koa-knex-realworld-example/docker-compose.yml down

docker-up:
	docker compose -f koa-knex-realworld-example/docker-compose.yml up --build -d

run:
	cd mediumclone_vue; npm run serve

