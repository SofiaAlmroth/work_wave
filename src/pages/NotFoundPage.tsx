import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-grid justify-content-center align-content-center">
      <h1 className="fw-bold text-center">Oops...</h1>
      <p className="m-3 text-center">Page Not Found!</p>
      <div className="d-grid justify-content-center">
        <button onClick={() => navigate("/")} className="btn btn-primary">
          Tillbaka
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
