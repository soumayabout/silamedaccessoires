  export const getUsersFromStorage = () => {
    const usersData = localStorage.getItem('users');
    return usersData ? JSON.parse(usersData) : [];
  };
  
  export const addUserToDatabase = (user) => {
    const users = getUsersFromStorage();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  };
  
  export const findUserByEmail = (email) => {
    const users = getUsersFromStorage();
    return users.find((user) => user.email === email);
  };
  
  export const authenticateUser = (email, password) => {
    const user = findUserByEmail(email);
    return user && user.password === password;
  };

  