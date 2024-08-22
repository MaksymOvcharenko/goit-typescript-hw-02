import s from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  return (
    <div className={s.item}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image.alt_description, image.urls.regular)}
        height={"240px"}
      />
    </div>
  );
};

export default ImageCard;
