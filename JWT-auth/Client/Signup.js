const UserName=userName, Password=password;
const [AuthStatus,setAuthStatus] = useState('NotValid');
const [Message,SetMessage] = useState('');
const CheckUserName = (e) =>{
 setUserName(e.target.value); console.log(UserName);
 
}
const CheckPassword = (e)=>{
 setPassword(e.target.value); console.log(Password);
}


async function submitSignUp (e){
 
   
 await  axios.post('http://localhost:5000/auth/User/SignUp',  {
     UserName:UserName,
     Password:Password
 }).then(Response=>{
     console.log(Response.data);   
     if (typeof Response.data === 'string' || Response.data instanceof String)
     SetMessage(Response.data);
     const accessToken=Response.data.AccessToken;
     if(accessToken){
     localStorage.setItem(`User ${UserName}`, accessToken);
     
 }
     if(Response.data.resval)
     SetMessage(Response.data.resval);
const AccessToken = localStorage.getItem(`User ${UserName}`);
console.log(AccessToken);
 })


  .catch(error=>{
        console.log("error while Signing Up");
            console.log(error);
  })
 

const token = localStorage.getItem(`User ${UserName}`);
console.log("fetched from local->")
console.log(token);

await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${token}`  }}).then(Response=>{
     
   if(Response.data.resval === "TokenVerified")
   { window.location.replace(`/Queries/${UserName}`);
     
    
   }
 console.log(Response.data); 
 
}).catch(error=>{
 console.log(error);
})

}