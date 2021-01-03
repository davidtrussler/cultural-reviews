# cultural reviews

My reviews of art, films, books, music and all other cultural curiosities. 

## Set up

- `git clone https://github.com/davidtrussler/cultural-reviews.git` creates a clone of the repo
- `cd cultural-reviews`
- `npm install` installs dependencies
- `npm run dev` starts a development server

The site uses a Postgres database. To use this in development: 
- Some dummy data exists in `sql/cultural_reviews.sql`
- `cp .env-example .env` to create a .env file
  - pupulate this with connection data for the local database instance
