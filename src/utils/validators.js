export function isValidEmail(email) {
  // Simple email regex validation
  const re = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

export function isStrongPassword(password) {
  // Password must be at least 6 characters
  return password.length >= 6;
}
