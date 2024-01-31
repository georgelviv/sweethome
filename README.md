# Sweet Home
Sweet Home Dashboard

## Commands
- `$ docker build . -t sweethome:latest  --platform linux/amd64` - build image
- `$ docker run -p 9501:9501 --env-file .env -v ./certs/:/app/certs/ --name sweethome sweethome:latest` - run image
- `$ docker tag sweethome:latest $hubname/sweethome:latest` - add tag
- `$ docker push $hubname/sweethome:latest` - publish image
- `$ docker login -u $username` - to login 