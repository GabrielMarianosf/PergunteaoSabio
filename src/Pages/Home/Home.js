import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/style.scss";

function Home() {
  return (
    <>
      <main className="container__texto">
        <p className="texto">
          Ask the Sage !
          <article className="container__button">
            <Link to="/conselho" className="button">
              Pedir Conselho
            </Link>
          </article>
        </p>
        <article className="container__image">
          <figure>
            <img
              className="home__img"
              src="https://picsum.photos/id/1025/200/300"
              alt="Sábio"
            />
          </figure>
        </article>
      </main>
    </>
  );
}

export default Home;
