export function CardLivro({ title, authors, shelf, thumbnail }) {
  return (
    <div className="CardLivro d-flex justify-content-center">
      <img src={thumbnail} />
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{authors}</p>
          <p className="card-text">{shelf}</p>
          <a href="#" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}
