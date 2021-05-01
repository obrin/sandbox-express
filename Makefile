build:
	pack build jordanyong/sandbox-express --builder gcr.io/buildpacks/builder:v1
publish:
	docker push jordanyong/sandbox-express
release:
	helm upgrade --install sandbox-express charts