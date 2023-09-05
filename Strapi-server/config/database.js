module.exports = ({ env }) => ({
  connection: {
    client: "pg", // changed from 'mysql' to 'pg'
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432), // default PostgreSQL port is 5432
      database: env("DATABASE_NAME", "school_data"),
      user: env("DATABASE_USERNAME", "postgres"), // default PostgreSQL user is 'postgres'
      password: env("DATABASE_PASSWORD", "password"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
