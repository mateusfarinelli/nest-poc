import { Person } from 'src/modules/person/entities/person.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "docker",
  password: "postgres",
  database: "nest-poc",
  migrations: ["dist/src/shared/infra/typeorm/migrations/*.ts"],
  entities: [Person],
  cli: {
    "migrationsDir": "./src/shared/infra/typeorm/migrations",
    "entitiesDir": "./src/modules/**/entities/"
  },
  synchronize: true,
}

export default config