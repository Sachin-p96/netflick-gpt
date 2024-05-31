export const checkEmailPassword = (email, password) => {
  const isEmailVaild = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailVaild) {
    return "Email is Not valid";
  }
  if (!isPasswordValid) {
    return "Password not vaild";
  }
};
