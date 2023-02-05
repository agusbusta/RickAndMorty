import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';


const Form = ({login}) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });


  function handleInputChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    login(userData);
  }

  return (
    <div className={style.formContainer}>
      <img className={style.logoForm} alt="logo" src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" style={{ color: '#48fb47', fontSize: '18px'}}><strong>Username:</strong></label>
        <input className={style.input} type="text" name="username" value={userData.username} onChange={handleInputChange} />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
     
        <label htmlFor="password" style={{ color: '#48fb47', fontSize: '18px'}}><strong>Password:</strong></label>
        <input className={style.input} type="password" name="password" value={userData.password} onChange={handleInputChange} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}<br></br>

        <button className={style.loginBtn}>LOGIN</button>
       
        
      </form>
    </div>
  );
};

export default Form;
