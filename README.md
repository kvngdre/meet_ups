# AVAILABILITY API

## API for calculating the best meeting slots across time zones

### To Start The Project:
#### Dotenv
Create a dotenv file with the following environment variables  
`DATABASE_CONNECTION_STRING`
`TEST_DATABASE_CONNECTION_STRING`
`API_KEY`

#### Docker
 - Build docker
* `docker build -t app .`
- Run docker image
* `docker run -p 7000:7000 -it app`

### To Run The Test Suite:
Run
* `npm test`

### REasons For Using API and Third Party Packages
- Luxon: Luxon is an amazing npm package for working with date and time. It provides easy to use methods and also handles the issue of daylight saving time.

- Calendarific: They provide an API services for fetching holidays of any country and allow specification of the year, month and day. Using this help enable the solution to be holiday aware.
