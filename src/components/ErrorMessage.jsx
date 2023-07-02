function ErrorMessage({ errorMessage }) {
  return (
    <div
      className="d-flex justify-content-center mb-3"
      style={{ color: "red" }}
    >
      {errorMessage}
    </div>
  );
}

export default ErrorMessage;
