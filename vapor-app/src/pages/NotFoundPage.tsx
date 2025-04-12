import { Link } from "react-router-dom";

function NotFoudPage() {
  return (
    <>
      <h1>Page not found!</h1>
      <Link to={"/"}>
        <button>Go Back Home</button>
      </Link>
    </>
  );
}

export default NotFoudPage;
