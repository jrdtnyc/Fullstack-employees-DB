import db from "./client.js";
async function seedEmployees() {
  const SQL = `
        DROP TABLE IF EXISTS employees;
        CREATE TABLE employees(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL UNIQUE,
            birthday date,
            salary INT
        );
  INSERT INTO employees(name, birthday, salary) VALUES ('Peter Grisham', '2000-05-20', 4000 );
   INSERT INTO employees(name, birthday, salary) VALUES ('Brenda Hoskins', '1976-04-12', 3000 );
    INSERT INTO employees(name, birthday, salary) VALUES ('Danny Wolf', '1987-07-19', 2000 );
     INSERT INTO employees(name, birthday, salary) VALUES ('Jenny Cohen', '1992-05-02', 5000 );
      INSERT INTO employees(name, birthday, salary) VALUES ('Andy Pope', '1997-03-05', 4000 );
       INSERT INTO employees(name, birthday, salary) VALUES ('Harrison Knox', '1986-02-21', 5000 );
        INSERT INTO employees(name, birthday, salary) VALUES ('Joe Larkin', '1985-04-13', 3000 );
         INSERT INTO employees(name, birthday, salary) VALUES ('Andy Vance', '2001-01-16', 2000 );
          INSERT INTO employees(name, birthday, salary) VALUES ('Sue Kendal', '2000-07-31', 7000 );
           INSERT INTO employees(name, birthday, salary) VALUES ('Ethan Miller', '1999-08-13', 3000 );
            INSERT INTO employees(name, birthday, salary) VALUES ('Brian Craig', '1999-12-01', 1500 );
             INSERT INTO employees(name, birthday, salary) VALUES ('Doug Lowell', '2001-08-03', 1500 );
              INSERT INTO employees(name, birthday, salary) VALUES ('Grover Martin', '2001-08-03', 1500 );
  
  `;

  await db.query(SQL);
  console.log("🌱 Database seeded.");
}
await db.connect();
await seedEmployees();
await db.end();
export default seedEmployees;
