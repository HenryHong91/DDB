import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const { loading, login } = useLogin();

  const handleChange = (e) => {
    e.preventDefault();
    setActive(!false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl flex justify-center	 items-center alig font-semibold text-center text-gray-300">
          <span className="text-fuchsia-800">Hey There! </span>
          <img
            src="/hand.gif"
            alt="Hand waving"
            style={{ width: "40px", height: "40px", verticalAlign: "middle" }} // 이미지 크기 및 수직 정렬 설정
          />
        </h1>

        <form onSubmit={handleSubmit}>
          {active && (
            <>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full input input-bordered h-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full input input-bordered h-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>{" "}
            </>
          )}

          <div>
            {active ? (
              <button
                className={`btn btn-block btn-sm mt-2  hover:bg-fuchsia-800 hover:text-white ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            ) : (
              <button
                className={`animate-bounce btn btn-block btn-sm mt-5  hover:bg-fuchsia-800 hover:text-white ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={loading}
                onClick={handleChange}
              >
                Start
              </button>
            )}
          </div>
        </form>
        <div className="flex justify-center">
          <Link
            to="/signup"
            className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
