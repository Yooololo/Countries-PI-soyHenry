import React from "react";
import "./Paginado.css";

export default function Paginado({
  countriesPerPage,
  allCountries = [],
  paginado,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCountries.length / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const btns = document.getElementsByClassName("botoncitos");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }

  return (
    <nav className="ordenapag">
      <ul className="paginado">
        <li className="pagespage" key={1}>
          <button
            className="botoncitos active"
            onClick={() => paginado(1)}
            id="1"
          >
            1
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) =>
            number === 1 ? (
              ""
            ) : (
              <li key={number} className="pagina">
                <button className="botoncitos" onClick={() => paginado(number)}>
                  {number}
                </button>
              </li>
            )
          )}
      </ul>
    </nav>
  );
}
