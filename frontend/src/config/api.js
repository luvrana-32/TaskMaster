const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000"
).replace(/\/+$/, "");

export const API_URL = `${API_BASE_URL}/api`;
export const TASKS_API_URL = `${API_URL}/tasks`;
