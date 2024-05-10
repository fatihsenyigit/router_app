import Pagination from "react-bootstrap/Pagination";

const Paginate = ({ setActivePage, activePage, totalPages }) => {
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};
export default Paginate;
