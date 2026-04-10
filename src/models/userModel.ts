export const fetchUserFromAPI = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user with ID ${userId}`);
  }

  return await response.json();
};
