# AVAILABILITY API

## API for calculating the best meeting slots across time zones

### How To Start The Project
#### Dotenv
Create a dotenv file with the following environment variables  
`DATABASE_CONNECTION_STRING`
`TEST_DATABASE_CONNECTION_STRING`
`API_KEY`

#### Docker
* Build docker
* `docker build -t app .`
* Run docker image
* `docker run -p 7000:7000 -it app`

### How To Run The Test Suite
Run
* `npm test`