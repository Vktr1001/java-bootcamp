// Task 3: import { getServerURL } from './task1.js';

export async function addUser(first_name, last_name, email) {
  const base = getServerURL();

  const getRes = await fetch(`${base}/users`);
  if (!getRes.ok) {
    throw new Error(`GET /users failed: ${getRes.status} ${getRes.statusText}`);
  }
  const users = await getRes.json();

  const maxId = users.reduce((max, u) => Math.max(max, Number(u.id) || 0), 0);
  const newUser = { id: maxId + 1, first_name, last_name, email };

  const postRes = await fetch(`${base}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(newUser),
  });
  if (!postRes.ok) {
    throw new Error(`POST /users failed: ${postRes.status} ${postRes.statusText}`);
  }
  const created = await postRes.json();
  console.log(created);
  return created;
}addUser(first_name, last_name, email)

