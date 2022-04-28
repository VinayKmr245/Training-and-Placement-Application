

const UserLogin = (userName,password) =>{
  const UserName=userName, Password=password;
  const [AuthStatus,setAuthStatus] = useState('NotValid');
  const [Message,SetMessage] = useState('');
  const [AccessToken,setAccessToken] = useState('');
  const CheckUserName = (e) =>{ 
   setUserName(e.target.value); console.log(UserName);
   
  }
  const CheckPassword = (e)=>{
   setPassword(e.target.value); console.log(UserName);
  }


async function submitLogin (e){
   
     
   await  axios.post('http://localhost:5000/auth/User/Login',  {
       UserName:UserName,
       Password:Password
   }).then(Response=>{
       console.log(Response.data);   
       if (typeof Response.data.resval === 'string' || Response.data.resval instanceof String)
       SetMessage(Response.data.resval);
       const accessToken=Response.data.token;
       if(accessToken ){console.log("token from login->");
           console.log(Response.data.token);
           try{console.log(UserName);
      localStorage.setItem(`User ${UserName}`,accessToken);
           }catch(error){console.log("error->");
               console.log(error);
           }
      setAccessToken(localStorage.getItem(`User ${UserName}`));
       
   }
       if(Response.data.resval)
       SetMessage(Response.data.resval);
   
  console.log(AccessToken);
   })

 
    .catch(error=>{
          console.log("error while Logging in");
              console.log(error);
    })
   

const token = localStorage.getItem(`User ${UserName}`);
console.log("fetched from local->")
  console.log(token);
  if(token)
await axios.get('http://localhost:5000/auth/TokenValidate', {headers:{"authorization" : `Bearer ${token}`  }}).then(Response=>{
       
     if(Response.data.resval === "TokenVerified")
     { window.location.replace(`/Alumni/${UserName}`);
       
      
     }
   console.log(Response.data); 
   
}).catch(error=>{
   console.log(error);
})

}
}