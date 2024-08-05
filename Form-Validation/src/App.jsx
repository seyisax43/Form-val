import { useState } from 'react'

import './App.css'
import FormInput from './components/FormInput'



function App() {
  const [values, setValues] = useState({
    username: "",
     email: "",
      birthday: "",
       Password: "",
        confirmPassword:""
  })
  // create an input array instead of writtin tem one by one
  const inputs = [
    {
    id:1,
      name: "username",
      type: "text",
      placeholder: "Username",
     errorMessage:"Username should be 3-16 characters and it shouldnt include any special characters",
      label: "username",
      // regex code or pattern
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,

    
    },
      {
    id:2,
      name: "email",
      type: "email",
      placeholder: "Email",
     errorMessage:"Email Address",
        label: "Email",
      required:true,
      
      
    
      },
        {
    id:3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
     errorMessage:"",
          label: "Birthday",
      
      
      
    
        },
          {
    id:4,
      name: "password",
      type: "password",
      placeholder: "Password",
     errorMessage:"password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
            label: "Password",
            pattern:'(?=^.{0-9}$)((?=.*d)|(?=.*W+))(?![.n])(?=.*[A-Z])(?=.*[a-z]).*$',
      required:true,
      
      
    
          },
            {
    id:5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
     errorMessage:"password don't match",
              label: "Confirm Password",
              pattern: values.password,
      required:true,
      
      
    
  }
]
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      
     
        <button>Submit</button>
        <div className="copyright">&copy; SeyiScope 2024</div>
     </form>
    </div>
  )
}

export default App
