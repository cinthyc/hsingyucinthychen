var images = ["images/paris/dsc02874.jpg", "images/paris/dsc02836.jpg", "images/paris/dsc02872.jpg", "images/paris/dsc02733.jpg"];
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