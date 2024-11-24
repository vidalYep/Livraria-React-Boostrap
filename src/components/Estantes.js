export function Estantes({ IcoEstante, TitleEstante }) {
  return (
    <div className="Estantes border border-black">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <img
              src={IcoEstante}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <h3 className="mb-0">{TitleEstante}</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
