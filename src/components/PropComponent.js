import React from "react";
import { datiIncompleti } from "../data";
import PropTypes from "prop-types";

const defaultImage =
  "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg";

const PropComponent = () => {
  return (
    <div>
      {datiIncompleti.map((el) => {
        return <Prodotto key={el.id} {...el} />;
      })}
    </div>
  );
};

const Prodotto = ({ nome, prezzo, image }) => {
  const img = image && image.url;
  return (
    <article className="container card shadow my-3 p-2 col-3">
      <div className="card-body d-flex flex-column align-items-center">
        <img
          src={img || defaultImage}
          alt={nome || "divano bello"}
          className="card-img-top"
          style={{ borderRadius: "10px" }}
        />
        <div className="card-text mt-3">
          <h4 className="card-title">{nome || "divano bello"}</h4>
          <p className="card-subtile">€{prezzo || 7.99}</p>
        </div>
      </div>
    </article>
  );
};

Prodotto.propTypes = {
  nome: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default PropComponent;
