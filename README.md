## Docker
# For building docker image for arm64 use buildx (building takes really long time, about  870.5s)
sudo docker run --rm --privileged docker/binfmt
sudo docker run --rm --privileged docker/binfmt:a7996909642ee92942dcd6cff44b9b95f08dad64

docker buildx create --name mybuilder
docker buildx use mybuilder
docker buildx inspect --bootstrap

docker buildx build --platform linux/arm64 ......
docker buildx build --platform linux/arm64/v8 ......

# Build docker image
docker build -t abajo .

# Build docker image for prod
docker build -f Dockerfile.prod -t abajo .

# Send image via scp
docker save abajo > abajo.tar
scp ./abajo.tar kirill@orange:/home/kirill/abajo.tar

# Load image on an instance
docker load < abajo.tar
docker run -it --rm -p 1337:80 abajo
