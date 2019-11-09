/**
 @author Konstantin Bogdanoski (konstantin.b@live.com)
 */
let images = {
    1: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    2: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    3: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
};

showImage = function () {
    document.getElementById("img").setAttribute("src", images[(Math.floor(Math.random() * 3) + 1).toString()]);
};