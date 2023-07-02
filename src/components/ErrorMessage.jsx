function ErrorMessage({ errorMessage }) {
  return (
    <div
      className="d-flex justify-content-center my-4"
      style={{ color: "red" }}
    >
      {errorMessage}
    </div>
  );
}

export default ErrorMessage;
