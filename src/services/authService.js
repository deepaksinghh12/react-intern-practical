// Auth service — handles user registration, login, logout, and updates via localStorage

const USERS_KEY = 'users';
const SESSION_KEY = 'session';

export function loadUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register({ name, email, password }) {
  const users = loadUsers();
  if (users.find(u => u.email === email)) throw new Error('Email already registered');
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: newUser.id }));
}

export function login({ email, password }) {
  const users = loadUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) throw new Error('Invalid credentials');
  localStorage.setItem(SESSION_KEY, JSON.stringify({ id: user.id }));
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getCurrentUser() {
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  if (!session) return null;
  const users = loadUsers();
  return users.find(u => u.id === session.id) || null;
}

export function updateProfile(id, updates) {
  const users = loadUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) throw new Error('User not found');
  users[index] = { ...users[index], ...updates };
  saveUsers(users);
  return users[index];
}
