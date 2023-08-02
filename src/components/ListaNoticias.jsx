import CardNoticia from "./CardNoticia";

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
        <CardNoticia />
      </div>
    </section>
  );
};

export default ListaNoticias;
