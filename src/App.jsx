import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./services/api";

import Keys from "./services/ApiKEY.json";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { ProgressBar } from "react-loader-spinner";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const notify = (message) => toast.error(message);

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [modalUrls, setModalUrls] = useState("");
  const [alt, setAlt] = useState("");
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.query.value;
    if (!search) {
      return notify("Please enter query");
    }
    setQuery(search);
    setImages([]);
    setLoading(true);
    setError(false);
    form.reset();
  };

  useEffect(() => {
    if (query) {
      const ApiKey = Keys.ApiKey;

      const fetchDatas = async () => {
        try {
          setError(false);
          const res = await fetchData(ApiKey, query, page);

          setImages((prev) => [...prev, ...res.results]);
          setIsVisible(false);
          if (page < res.total_pages) {
            setIsVisible(true);
          }
        } catch (error) {
          setIsVisible(false);
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchDatas();
    }
  }, [query, page]);
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const openModal = (alt, modalUrls) => {
    setModalIsOpened(true);
    setAlt(alt);
    setModalUrls(modalUrls);
  };
  const closeModal = () => {
    setModalIsOpened(false);
    setAlt("");
    setModalUrls("");
  };

  return (
    <div>
      Gallery
      <SearchBar handleSubmit={handleSubmit} />
      <Toaster />
      {loading && (
        <ProgressBar
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && notify("Please try again...")}
      <ImageGallery
        images={images}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isVisible && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal
        openModal={modalIsOpened}
        closeModal={closeModal}
        modalUrls={modalUrls}
        alt={alt}
      />
    </div>
  );
};

export default App;
