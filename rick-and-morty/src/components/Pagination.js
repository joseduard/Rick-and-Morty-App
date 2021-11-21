import React from "react";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  //Onclick execute un ene function
  // la logica que va ser definida por el component que usa este component, c'est dire que doit etre defini dnas app et enbvoye au component a travers de props ex onprevoous
  const handlePrevious = () => {
    // Ces fucntions viens du app
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {/* ternaire */}
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previus
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
