export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  id,
  handleshowModal,
}) => {
  return (
    <li>
      <img
        width="380px"
        src={webformatURL}
        srcSet={largeImageURL}
        alt=""
        key={id}
        onClick={handleshowModal}
      />
    </li>
  );
};
