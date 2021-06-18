let user;

export const setUser= (userdata) =>{
    user = userdata;
}
export const getUser = () =>{
  return user;
}
export const getUserId = () =>{
    return user.uid;
}