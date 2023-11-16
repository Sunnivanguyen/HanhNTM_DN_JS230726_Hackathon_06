// const BASE_API = "http://localhost:8000";

const RegisterForm: React.FC<{
  username: string;
  setUsername: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onHandleLogin: (e: React.FormEvent) => void;
}> = ({ username, setUsername, password, setPassword, onHandleLogin }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        padding: "50px",
        boxSizing: "border-box",
        gap: "50px",
        width: "100%",
      }}
    >
      <div style={{ width: "50%", height: "100%" }}>
        <img
          src="../../public/images/signin_bg.jpg"
          alt="back_ground"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
        }}
      >
        <h1>Sign In</h1>
        <form
          onSubmit={onHandleLogin}
          style={{
            width: "80%",
            height: "80%",
            margin: "50px auto",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "400px",
                height: "40px",
                borderRadius: "5px",
                border: "2px solid gray",
              }}
              placeholder="Enter your username"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label style={{ fontWeight: "bold", fontSize: "20px" }}>
              Password:
            </label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "400px",
                height: "40px",
                borderRadius: "5px",
                border: "2px solid gray",
              }}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            style={{
              width: "150px",
              height: "45px",
              borderRadius: "5px",
              border: "2px solid #f7f5ef",
              backgroundColor: "#ebb002",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
