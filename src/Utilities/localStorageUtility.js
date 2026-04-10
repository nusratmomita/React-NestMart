export const saveUserToLS = (user) => {
    localStorage.setItem("currentUser" , JSON.stringify(user));
}