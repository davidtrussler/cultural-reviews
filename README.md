# cultural reviews

My reviews of art, films, books, music and all other cultural curiosities. 

## Set up

- `git clone https://github.com/davidtrussler/cultural-reviews.git` creates a clone of the repo
- `cd cultural-reviews`
- `npm install` installs dependencies
- `npm run dev` starts a development server
- `npm test` to run automated tests

The site is designed to use a Postgres database, though this is ommitted in the Beta release in favour of hard-coded JSON data. When that is required it will need to be installed and set up locally.
- To download and install use the [Postgres documentation](https://www.postgresql.org/download/)
- To set up locally
  - Use the sample data provided to populate a local database
  - `cp .env-example .env` to create a .env file
    - populate this with database login data for the local environment
