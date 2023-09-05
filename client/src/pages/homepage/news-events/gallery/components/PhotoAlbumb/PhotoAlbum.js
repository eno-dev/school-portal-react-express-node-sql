import Style from '../../Jiu-Jitsu/Style.module.scss';
import { GetImageById } from '../../hooks/GetImageById';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';

const PhotoAlbum = () => {
  let { id } = useParams();

  const { data, loading, error } = GetImageById(id);

  return (
    <div className={Style.galleryContent}>
      <div className={Style.galleryTitle}>
        <h3>{!loading && data.data.attributes.Heading}</h3>
      </div>
      <div className={Style.images}>
      {!loading && !error &&
          data.data.attributes.Images.data.map(img => (
            <div className={Style.imageContainer} key={img.id}>
              <Image src={`${process.env.REACT_APP_URL}${img.attributes.url}`} rootClassName={Style.imgPreview} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
