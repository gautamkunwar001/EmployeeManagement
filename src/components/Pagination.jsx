import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="d-flex justify-content-center my-3">
      <button
        className="btn btn-secondary mx-2"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
