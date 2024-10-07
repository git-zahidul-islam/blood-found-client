import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import Swal from "sweetalert2";
import img from "../../assets/Images/home-page/sign-up-page.jpg";
import { toast } from "react-toastify";

const SignIn = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    // console.log(userInfo);
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          Swal.fire({
            title: "Good job!",
            text: "login successfully!",
            icon: "success",
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div className="md:w-[30%] w-[90%] mx-auto border border-[#ce3d61]/40 md:my-24 my-10">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-2 border border-black/30 outline-none"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-2 border border-black/30 outline-none"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control">
          {/* TODO: make disabled true */}
          <input
            disabled={false}
            className="bg-[#991747] p-2 text-white rounded-md "
            type="submit"
            value="Login"
          />
        </div>
        <p className="text-center">
          New here{" "}
          <Link
            className="text-base font-medium text-[#991747]"
            to={"/sign-up"}
          >
            Create an account
          </Link>
        </p>

        <hr  className="mt-2 mb-3"/>

        {/* social section */}
        <div className="flex justify-center">
            <SocialLogin></SocialLogin>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
