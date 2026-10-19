// Task 2: listUsers()
import { getServerURL } from './task1.js';

export async function listUsers() {
  const res = await fetch(`${getServerURL()}/users`);
  if (!res.ok) {
    throw new Error(`GET /users failed: ${res.status} ${res.statusText}`);
  }
  const users = await res.json();
  console.log(users);
  return users;
}