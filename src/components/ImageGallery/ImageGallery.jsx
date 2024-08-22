import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, openModal, closeModal }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard
              image={image}
              openModal={openModal}
              closeModal={closeModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
