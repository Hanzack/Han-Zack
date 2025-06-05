// src/helpers.ts

/**
 * Generate a unique ID string (UUID v4).
 * You can replace this with 'uuid' library if installed.
 */
export const generateUniqueId = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Format a Date object to a readable string.
 * Example: "2025-06-06 14:30"
 */
export const formatDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

/**
 * Debounce function to limit how often a function can fire.
 * Useful for optimizing user input handlers.
 */
export function debounce<F extends (...args: any[]) => any>(func: F, delay: number): F {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  return function (this: any, ...args: Parameters<F>) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  } as F;
}

/**
 * Check if a string is a valid email format.
 */
export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
