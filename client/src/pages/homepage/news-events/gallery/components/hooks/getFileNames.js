export const getFileNames = () => {
    // import all function
    const importAll = (r) => {
        return r.keys().map(r);
    }

    // Get all image names
    const images = importAll(require.context(`assets/img/flagday`, false, /\.(png|jpe?g|svg)$/));

    // Fix file name
    const sortedFileName = images.map(test => {
        let firstPartFileName = test.replace('/static/media/', '').split('.')[0]
        let secondPartFileName = test.replace('/static/media/', '').split('.')[2]
        let fullFileName = firstPartFileName.concat('.', secondPartFileName)
        return fullFileName
    })

    // Find unique values and store them in and array
    let unique = [...new Set(sortedFileName)];
    // convert unique array
    const uniqueObj = Object.assign({}, unique)

    // Store result array
    var result = [];
    // Add id and value as property
    Object.keys(uniqueObj).forEach(key => {
        result.push({ 'id': parseInt(key), 'image': uniqueObj[key] });
    });

    return result
}