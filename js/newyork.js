var images = ["images/newyork/dsc00861.jpg", "images/newyork/img_3338.jpg", "images/newyork/dsc00789.jpg", "images/newyork/dsc01211.jpg"];
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