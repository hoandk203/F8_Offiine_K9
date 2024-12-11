/** @format */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDog } from "./service/dogService";
import PropTypes from "prop-types";

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="skeleton-loader">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="skeleton-item"></div>
    ))}
  </div>
);

// Dog List Component
const DogList = ({ dogs }) => (
  <ul>
    {dogs?.map((dog) => (
      <li key={dog.id} style={{ margin: "10px 0", listStyle: "none" }}>
        {dog.title}
      </li>
    ))}
  </ul>
);

// Error Component
const ErrorComponent = ({ onRetry }) => (
  <div>
    <p style={{ color: "red" }}>Đã có lỗi xảy ra! Vui lòng thử lại.</p>
    <button
      onClick={onRetry}
      style={{ padding: "10px 15px", cursor: "pointer" }}>
      Tải lại
    </button>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const { Dog, status } = useSelector((state) => state.dogs);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchDog());
  }, [dispatch]);

  const reFetch = () => {
    dispatch(fetchDog());
  };

  return (
    <div className="App" style={{ marginTop: 24 }}>
      <header className="App-header">
        {status === "loading" && <LoadingSkeleton />}
        {status === "succeeded" && Dog.length > 0 && <DogList dogs={Dog} />}
        {status === "failed" && <ErrorComponent onRetry={reFetch} />}
        {status === "succeeded" && Dog.length === 0 && (
          <p>No dogs available.</p>
        )}
      </header>
    </div>
  );
}

export default App;

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ErrorComponent.propTypes = {
  onRetry: PropTypes.func.isRequired,
};
