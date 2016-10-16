module.exports = {
    // point to actual development code
    entry:
        // path to App.js
        './src/App.js', // this will be changed to lowercase app.js
    // output into home directory
    output: {
        // home directory
        path: 'path.resolve(__dirname/build, "build")',
        filename: 'app.js'
    },
    // will look for loader
    module: {
        loader: [{
            test: /\.jsx?$/, // pattern to look for jsx file
            exclude: /node_modules/,
            loader: 'babel', // will handle any jsx file that we need
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
