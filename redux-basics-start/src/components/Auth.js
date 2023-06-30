import { useSelector } from 'react-redux';
import classes from './Auth.module.css';

const Auth = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  console.log('auth', isAuthenticated)

  const submitHandler = (e) => {
    e.preventDefault();

  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
