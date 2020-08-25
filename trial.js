var tf = require('@tensorflow/tfjs-node');
tf.loadModel('/python/model.json').then(model => {
    var dataForge = require('data-forge');
    var dataFrame = dataForge.readFileSync('/python/sign_mnist_test.csv').parseCSV();
    console.log(dataFrame);
});

