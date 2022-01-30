import Card from "./Card";
import { Buscar } from "../hooks/Buscar";
import Loading from "./Loading";
const Cards = () => {
  const data = Buscar();
  const { images, handleSumbmit, loading } = data;

  return (
    <>
      <form onSubmit={handleSumbmit}>
        <div className="row mb-1">
          <div className="col-9">
            <input
              className="form-control w-100"
              type="text"
              style={{
                height: "3.5rem",
              }}
              placeholder="Buscar"
              name="inputText"
            />{" "}
          </div>
          <div className="col-3 text-start p-0 ">
            <button
              type="submit"
              className="btn btn-secondary "
              style={{
                height: "3.5em",
                width: "100%",
              }}
            >
              <i className="fas fa-search fs-1"></i>
            </button>
          </div>
        </div>
      </form>
      <hr />
      {loading && <Loading />}
      <div className="row">
        {images
          .filter((i) => {
            if (i == null) {
              return <p>no hay resultados</p>;
            }
            return true;
          })
          .map((i) => {
            let nombre = i.user !== null && i.user.first_name;
            const apellido = i.user.last_name !== null ? i.user.last_name : "";
            nombre = nombre + " " + apellido;
            return (
              <Card
                className="w-100"
                url={i.urls.regular}
                key={i.id}
                id={nombre}
                des={i.alt_description}
                likes={i.user.total_likes}
              />
            );
          })}
      </div>
    </>
  );
};

export default Cards;
