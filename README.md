# AVAILABILITY API
Node API for calculating the best meeting slots across time zones for multiple users.

## Getting Started
Create a dotenv file with the following environment variables  
- DATABASE_CONNECTION_STRING=
- TEST_DATABASE_CONNECTION_STRING=
- API_KEY=

### Docker file
First build docker by running:
```sh
docker build -t app .
```
then run the docker image:
```sh
docker run -p 7000:7000 -it app
```
That's it you're all set.

### Test Suite:
To run the test suite, run:
```sh
npm test
```
