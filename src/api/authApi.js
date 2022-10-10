export function RegisterUser(data){
return fetch('http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/auth/register',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
})
}
export function LoginUser(data){
return fetch('http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/auth/login',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
})
}
