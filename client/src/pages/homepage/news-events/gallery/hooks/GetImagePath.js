const GetImagePath = (imageName, galleryName) => {
  return require(`assets/img/${galleryName}/${imageName}`);
};

export default GetImagePath;
