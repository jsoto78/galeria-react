const Card = ({ url, id, des, likes }) => {
  return (
    <>
      <div className="container text-center mt-4">
        <div className="card">
          <img src={url} className="card-img-top" alt={id} />
          <div className="card-body">
            <h5 className="card-title ">
              <span className="float-start"> Autor: {id} </span>
              <span className="float-end">
                <i
                  className="fas fa-heart me-1"
                  style={{
                    color: "#dc3545",
                  }}
                ></i>
                {likes}
              </span>
            </h5>
            <p className="card-text "></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
