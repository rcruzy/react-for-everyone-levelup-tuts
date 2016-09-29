module.exports = {
    // point to actual development code
    entry: [
        // path to App.js
        './src/App.js' // this will be changed to lowercase app.js
    ],
    // output into home directory
    output: {
        // home directory
        path: __dirname,
        // from the App.js above
        filename: 'app.js'
    },
    // will look for loader
    module: {
        loader: [{
            test: /\.jsx?$/, // pattern to look for jsx file
            loader: 'babel' // will handle any jsx file that we need
        }]
    }
};
