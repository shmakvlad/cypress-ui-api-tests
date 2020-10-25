# How to run ?
# 1. docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0
# 2. docker build -t cypress .

FROM cypress/base:10
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run-dashboard"]