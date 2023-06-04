import "./Pagination.css";
import pag_r from "../../img/right-arrow-pag.svg";
import pag_l from "../../img/left-arrow-pag1.svg";
const Pagination = (props) => {
  const paginationLogic = (page) => {
    const start = (page - 1) * 10;
    const end = page * 10;
    return [start, end];
  };
  const onPrevPageHandler = (page) => {
    if (page > 0) return;
  };
  const onNextPageHandler = (page) => {
    if (page > 0) return;
  };
  return (
    <div className="pagination_wrap">
      <button className="pag_btn " onClick={onPrevPageHandler}>
        <img src={pag_l} className="pagination_arr " />
        <span>Page 1</span>
      </button>
      <button className="pag_btn" onClick={onNextPageHandler}>
        <span>Page 2</span>
        <img src={pag_r} className="pagination_arr" />
      </button>
    </div>
  );
};
export default Pagination;
