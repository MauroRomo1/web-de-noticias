const ListaNoticias = () => {
  return (
    <section className="container my-5">
      <h4 className="text-center my-3">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Newspaper.png"
          alt="Newspaper"
          className="mx-2"
          width="50"
          height="50"
        />
        Lista de noticas
      </h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <div className="col">
          <div className="card shadow h-100">
            <img
              src="https://www.infobae.com/new-resizer/Mu1gU7QqCWmQpqv8TZuvDHnKft8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/AFM6YGRKUZHFNEMKLCTAXSRUMI.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Titulo de la noticia</h5>
              <small className="text-body-secondary">Diario: La gaceta</small>
              <p className="card-text mt-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer border-0 bg-white">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  ver la noticia completa
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100">
            <img
              src="https://www.infobae.com/new-resizer/Mu1gU7QqCWmQpqv8TZuvDHnKft8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/AFM6YGRKUZHFNEMKLCTAXSRUMI.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Titulo de la noticia</h5>
              <small className="text-body-secondary">Diario: La gaceta</small>
              <p className="card-text mt-2">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer border-0 bg-white">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  ver la noticia completa
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow h-100">
            <img
              src="https://www.infobae.com/new-resizer/Mu1gU7QqCWmQpqv8TZuvDHnKft8=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/AFM6YGRKUZHFNEMKLCTAXSRUMI.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Titulo de la noticia</h5>
              <small className="text-body-secondary">Diario: La gaceta</small>
              <p className="card-text mt-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer border-0 bg-white">
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  ver la noticia completa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListaNoticias;
