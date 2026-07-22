import db from "#db/client"; //<--Database set in client.js this points to the database in .env

/** @returns the employee created according to the provided details */
export async function createEmployee({ newEmployee }) {
  const { name, birthday, salary } = newEmployee;
  const SQL = `
        INSERT INTO employees (name, birthday, salary) 
        VALUES ($1, $2, $3)
        RETURNING *
    `;
  const response = await db.query(SQL, [name, birthday, salary]);
  return response.rows[0];
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const SQL = `
        SELECT *
        FROM employees
    `;
  const response = await db.query(SQL);
  return response.rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const SQL = `
        SELECT *
        FROM employees
        WHERE id = $1
    `;
  const response = await db.query(SQL, [id]);

  return response.rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ updatedEmployee }) {
  const { id, name, birthday, salary } = updatedEmployee;
  const SQL = `
        UPDATE employee
        SET name = $1, birthday = $2, salary = $3
        WHERE id=$4
        RETURNING *
    `;
  const response = await db.query(SQL, [
    name,
    description,
    price,
    rating,
    image,
    id,
  ]);
  return response.rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  const SQL = `
        DELETE
        FROM employees
        WHERE id = $1
    `;
  const response = await db.query(SQL, [id]);
}
