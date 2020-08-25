tf.loadModel('/python/model.json').then(model => {
    var videoId = 'webcam';
    var video  = document.getElementById(videoId);
    var scaleFactor = 0.25;
    function capture() {
        var w = video.videoWidth * scaleFactor;
        var h = video.videoHeight * scaleFactor;
        var dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l' ,'m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
        var canvas = document.getElementById('preview');
        canvas.width  = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
        var image = tf.fromPixels(canvas);
        image = image.toFloat().div(tf.scalar(255));
        image = tf.image.resizeBilinear(image, [28,28]);
        var processed = document.getElementById("processed");
        tf.toPixels(image, processed);
        ctx = processed.getContext('2d');
        var imgPixels = ctx.getImageData(0, 0, 28, 28);
        for(var y = 0; y < imgPixels.height; y++){
            for(var x = 0; x < imgPixels.width; x++){
                var i = (y * 4) * imgPixels.width + x * 4;
                var avg = (0.2126*imgPixels.data[i]) + (0.7152*imgPixels.data[i + 1]) + (0.0722*imgPixels.data[i + 2]);
                imgPixels.data[i] = avg; 
                imgPixels.data[i + 1] = avg; 
                imgPixels.data[i + 2] = avg;
            }
        }
        var grayscale = document.getElementById("grayscale");
        ctx = grayscale.getContext('2d');
        ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        image = tf.fromPixels(grayscale);
        image = image.expandDims(0);
        image = image.toFloat().div(tf.scalar(255));
        image = image.slice([0, 0, 0, 2]);
        var index = model.predict(image).argMax(1);
        $('#output').text(dict[index.get([0])]);
    }
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream){
        video.srcObject = stream;
    });
    setInterval(capture, 200);
});

