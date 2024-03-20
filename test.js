var imgArray = new Array();
imgArray[0] = "scott0.jpg";
imgArray[1] = "scott1.jpg";
imgArray[2] = "scott2.jpg";
imgArray[3] = "scott3.jpg";
imgArray[4] = "scott4.jpg";

function showImage()
{
    var imgNum = Math.floor(Math.random()*5);
    var objImg = document.getElementById("introImg");
    objImg.src = imgArray[0];
}