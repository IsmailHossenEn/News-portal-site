import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { CreateNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name Must be 5 Charecters Long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 8) {
      setError({ ...error, password: "password Must be 8 Charecters Long" });
      return;
    }

    console.log({ name, email, photo, password });

    CreateNewUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
      updateUserProfile({
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          e.target.reset();
          navigate("/");
        })
        .catch((err) => {
          console.log("error check:", err);
        });
    });
  };

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 ">
        <h2 className="text-center font-semibold mb-5 text-4xl">
          Register with Your Email
        </h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full border border-gray-500"
              placeholder="Name"
            />
            {error.name && (
              <label className="label text-xs text-red-600">{error.name}</label>
            )}
            <label className="label">PhotoUrl</label>
            <input
              name="photo"
              type="text"
              className="input w-full border border-gray-500"
              placeholder="Photo url"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full border border-gray-500"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full border border-gray-500"
              placeholder="Password"
            />
            {error.password && (
              <label className="label text-xs text-red-600">
                {error.password}
              </label>
            )}
            <button className="btn flex w-full btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p>
          Already Have an Account!
          <Link className="text-red-600" to="/auth/login">
            Login
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

export default SignUp;
