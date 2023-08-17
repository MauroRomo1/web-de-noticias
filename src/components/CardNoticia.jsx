const CardNoticia = ({ noticia }) => {
  const imgDefault =
    "https://www.educaciontrespuntocero.com/wp-content/uploads/2019/03/noticias-destacadas-web.jpg";

  const handleImageError = (e) => {
    e.target.src = imgDefault;
  };

  return (
    <div className="col">
      <div className="card shadowCard h-100">
        <img
          src={noticia.image_url || imgDefault}
          className="card-img-top img-noticias"
          alt={noticia.title}
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{noticia.title}</h5>
          <small className="text-body-secondary">
            Diario: {noticia.source_id}
          </small>
          <p className="card-text mt-2">{noticia.description}</p>
        </div>
        <div className="card-footer border-0 bg-white">
          <div className="d-grid gap-2">
            <a className="btn btn-primary" href={noticia.link} target="_blank">
              ver la noticia completa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNoticia;
