import client from "./client.js";

async function seedEmployees() {
  //
  const SQL = `
  INSERT INTO employees(name, birthday, salary) VALUES ('Peter Grisham', '2000-05-20', 4000 )
   INSERT INTO employees(name, birthday, salary) VALUES ('Brenda Hoskins', '1976-04-12', 3000 )
    INSERT INTO employees(name, birthday, salary) VALUES ('Danny Wolf', '1987-07-19', 2000 )
     INSERT INTO employees(name, birthday, salary) VALUES ('Jenny Cohen', '1992-05-02', 5000 )
      INSERT INTO employees(name, birthday, salary) VALUES ('Andy Pope', '1997-03-05', 4000 )
       INSERT INTO employees(name, birthday, salary) VALUES ('Harrison Knox', '1986-02-21', 5000 )
        INSERT INTO employees(name, birthday, salary) VALUES ('Joe Larkin', '1985-04-13', 3000 )
         INSERT INTO employees(name, birthday, salary) VALUES ('Andy Vance', '2001-01-16', 2000 )
          INSERT INTO employees(name, birthday, salary) VALUES ('Sue Kendal', '2000-07-31', 7000 )
           INSERT INTO employees(name, birthday, salary) VALUES ('Ethan Miller', '1999-08-13', 3000 )
  
  `;
  console.log("🌱 Database seeded.");
}

export default client;

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");
