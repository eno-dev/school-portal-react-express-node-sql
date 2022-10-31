const fs = require('fs')

const getFileNames = (req, res) => {
    gallery = req.params.name
    const textObj = []
    fs.readdirSync(`./client/src/assets/img/${gallery}`).forEach((file) => {
        textObj.push(file)
    })
    // Find unique values and store them in and array
    let unique = [...new Set(textObj)];
    // convert unique array
    const uniqueObj = Object.assign({}, unique)
    // Store result array
    var result = [];
    // Add id and value as property
    Object.keys(uniqueObj).forEach(key => {
        result.push({ 'id': parseInt(key), 'image': uniqueObj[key] });
    });
    res.send(result)
}

module.exports = {
    getFileNames
}