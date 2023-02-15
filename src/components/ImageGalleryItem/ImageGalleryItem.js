export const ImageGalleryItem = ({ webformatURL, largeImageURL,id,handleshowModal }) => {
    return (
      <li>
        <img src={webformatURL}
      srcSet={largeImageURL}
         alt=""
         key={id}
         onClick ={handleshowModal} />
      </li>
    );
  };
  