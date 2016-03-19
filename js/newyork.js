var images = ["../images/newyork/DSC00861.jpg", "../images/newyork/IMG_3338.jpg", "../images/newyork/DSC00789.jpg", "../images/newyork/DSC01211.jpg"];
var count = 0

$("#next").on("click",function(){
  count = count + 1;
  if (count == 4){
    count = 0;
  }
  $("img").attr("src",images[count]);
});

$("#previous").on("click",function(){
  count = count - 1;
  if (count == -1){
    count = 4;
  }
  $("img").attr("src",images[count]);
});