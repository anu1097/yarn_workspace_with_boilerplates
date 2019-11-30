#! /bin/bash

yarn build_server

# heroku steps
heroku container:push --app=model-airbnb web
heroku container:release --app=model-airbnb web