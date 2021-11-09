import React from "react";
import "./Paginado.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="ordenapag">
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className="pagina">
              <button className="botoncitos" onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
