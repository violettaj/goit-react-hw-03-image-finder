import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.js';


export const ImageGallery = ({ images, handleshowModal }) => {
  return (
    <ul>
      {images && images.map(img => {
          return (
            <ImageGalleryItem
            webformatURL={img.webformatURL}
            largeImageURL={img.largeImageURL}
              key={img.id}
              handleshowModal={handleshowModal}
            />
          )})}
    </ul>
  );
};