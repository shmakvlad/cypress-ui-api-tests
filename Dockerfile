# How to run ?
# 1. docker run -it -v $PWD:/e2e -w /e2e cypress/included:5.4.0
# 2. docker build -t cypress .
# 3. docker-compose up cypress || docker-compose up --exit-code-from cypress
# 4. docker-compose run cypress-chrome

FROM cypress/base:10
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run-dashboard"]