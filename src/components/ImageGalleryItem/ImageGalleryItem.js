import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  id,
  handleShowModal,
}) => {
  return (
    <li>
      <img
        width="380px"
        src={webformatURL}
        srcSet={largeImageURL}
        alt=""
        key={id}
        onClick={handleShowModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};
