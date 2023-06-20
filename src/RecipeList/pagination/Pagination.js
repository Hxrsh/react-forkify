import "./Pagination.css";
import pag_r from "../../img/right-arrow-pag.svg";
import pag_l from "../../img/left-arrow-pag1.svg";
import { useEffect, useState } from "react";
const Pagination = (props) => {
  console.log("render pagination");
  const [currPage, setCurrPage] = useState(1);
  const itemsDisplayed = 9;
  const totalPages = Math.ceil(props.onListLoadDataLength / itemsDisplayed);
  let prevBtnStyle = "pag_btn";
  let nextBtnStyle = "pag_btn";

  //PAgination button hiding logic
  if (currPage === 1 && currPage !== totalPages) {
    prevBtnStyle = " pag_hide";
  } else if (currPage !== 1 && currPage === totalPages) {
    nextBtnStyle = " pag_hide";
  } else if (currPage === 1 && currPage === totalPages) {
    nextBtnStyle = " pag_hide";
    prevBtnStyle = " pag_hide";
  }

  const paginationRange = (currPage) => {
    const start = (currPage - 1) * itemsDisplayed;
    const end = currPage * itemsDisplayed;
    return { start: start, end: end };
  };

  useEffect(() => {
    props.onPaginationClicked(paginationRange(currPage));
  }, [currPage]);

  return (
    <div className="pagination_wrap">
      <button
        className={prevBtnStyle}
        onClick={() => {
          if (currPage > 1) {
            setCurrPage(currPage - 1);
          } else return;
        }}
      >
        <img src={pag_l} className="pagination_arr " />
        <span>Page {currPage - 1}</span>
      </button>
      <button
        className={nextBtnStyle}
        onClick={() => {
          if (currPage < totalPages) {
            setCurrPage(currPage + 1);
          } else return;
        }}
      >
        <span>Page {currPage + 1}</span>
        <img src={pag_r} className="pagination_arr" />
      </button>
    </div>
  );
};
export default Pagination;
