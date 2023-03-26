
import './App.css';
import React from 'react';


function SignupForm() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [captcha, setcaptcha] = React.useState('');

  function handleSubmit(event){
    event.preventDefault()
    console.log({email,password})
  }



  function handleclick(){
     setIsDarkMode(!isDarkMode)

  }
  return (
    <div> 
    <form onSubmit={handleSubmit}>
      <Field
        id="name"
        label="username"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Field
        id="email"
        type="email"
        label="Email Address"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
       <Field
        id="password"
        type="password"
        label="password"
        value={password}
        onChange={(event) => {
          setpassword(event.target.value);
        }}
      />
      <Field
          id="re-enter password"
          type='password'
          label="re-enter password"
          grow={2}
          value={password}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
      <div className="row">
      <Field
          id="captcha"
          label="Enter-captcha"
          grow={1}
          value={captcha}
          onChange={(event) => {
            setcaptcha(event.target.value);
          }}
        />
        <div>
          captcha code
          <h2  id='captch'style={{backgroundColor:'red', color:'blue'}}>XHhb</h2>
        </div>
        
      </div>
      <button>Sign up</button>
    </form>
    <button onClick={handleclick}   style={{ background: `${isDarkMode ? "rgba(255,255,255,1)" : "#333"}` }}>dark mode</button>
    </div>
  );
}

function Field({
  id,
  label,
  type = 'text',
  grow,
  value,
  onChange,
}) {
  return (
    
    <div
      className="field"
      style={{ '--grow': grow }}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SignupForm;