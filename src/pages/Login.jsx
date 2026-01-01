import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInWithGoogle, userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 ">
        <h2 className="text-center font-semibold mb-5 text-4xl">
          Login With Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            {error.login && (
              <label className="text-sm text-red-600">{error.login}</label>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn flex w-full btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          New to the website?{" "}
          <Link className="text-red-600" to="/auth/signup">
            Register
          </Link>
        </p>
        <p>
          Or
          <Link className="text-red-600" to="/">
            Login With Google
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
