import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { signInWithGoogle, setUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button
          className="btn text-[10px] md:text-xs font-normal md:font-semibold flex gap-[4px]"
          onClick={handleGoogleLogin}
        >
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn text-[10px] md:text-xs font-normal md:font-semibold">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
