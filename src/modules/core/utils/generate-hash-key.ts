/**
 * - It generate the hash key with the combination with date and time
 */
export const generateUniqueHashKey = () => {
  // Get the current timestamp
  const timestamp = Date.now().toString();

  // Generate a random number
  const randomNum = Math.random().toString(36).substring(2, 10); // Random string from base-36

  // Combine both and return as a hash
  const uniqueHash = timestamp + randomNum;

  return uniqueHash;
};
