import { GetLearningMaterials } from '../hooks/GetLearningMaterial';
import Style from '../Style.module.scss';
const MyPdf = ({ grade, subject, link }) => {
  const { data, loading, error } = GetLearningMaterials(grade, subject);

  const checkFileExt = filename => {
    if (filename === '.pdf') {
      return <i class="cid-file-pdf"></i>;
    }
  };

  return (
    <>
   {!loading && !error &&
        data.data.map(obj => (
          <div className={Style.container} key={obj.id}>
            <div className={Style.text}>
              <h3>{obj.attributes.Heading}</h3>
            </div>
            {/* <iframe src={`${process.env.REACT_APP_URL}${data.data[0].attributes.Material.data[0].attributes.url}`}
                        frameBorder="0"
                        height="100%"
                        width="100%">
                    </iframe> */}
            <div className={Style.objectContainer}>
              <object
                data={`${process.env.REACT_APP_URL}${data.data[0].attributes.Material.data[0].attributes.url}`}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Alternative text - include a link{' '}
                  {checkFileExt(data.data[1].attributes.Material.data[0].attributes.ext)}
                  <a
                    href={`${process.env.REACT_APP_URL}${data.data[1].attributes.Material.data[0].attributes.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    to the PDF!
                  </a>
                </p>
              </object>
            </div>
          </div>
        ))}
    </>
  );
};

export default MyPdf;
