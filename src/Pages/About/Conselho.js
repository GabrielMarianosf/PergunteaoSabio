import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../Styles/style.scss";

function Conselho() {
  // Hook useState
  let [conselho, setconselho] = useState();
  // Hook useEffect
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((resp) => {
        setconselho(resp.data.slip.advice);
      })
      .catch(() => {
        alert("Houve algum problema com a API do Conselho ;(");
      });
  }, []);

  return (
    <>
      <section className="main__conselho">
        <article className="article__conselho">
          <p>Ask the Sage !</p>
        </article>
      </section>
      <section className="conselho__texto">
        <section className="conselho__texto2">
          <section className="conselho">
            <p>{conselho}</p>
            <section className="button__voltar">
              <Link to="/" className="button">
                Voltar
              </Link>
            </section>
          </section>
          <section>
            <figure className="figure__img">
              <img
                className="conselho__img"
                src="https://picsum.photos/id/1025/200/300"
                alt="Sábio"
              />
            </figure>
          </section>
        </section>
      </section>
    </>
  );
}

export default Conselho;
