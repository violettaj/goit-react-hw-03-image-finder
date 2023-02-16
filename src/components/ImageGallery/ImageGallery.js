import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.js';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, handleshowModal }) => {
  return (
    <ul className={css.gallery}>
      {images &&
        images.map(img => {
          return (
            <ImageGalleryItem
              webformatURL={img.webformatURL}
              largeImageURL={img.largeImageURL}
              key={img.id}
              handleshowModal={handleshowModal}
            />
          );
        })}
    </ul>
  );
};
