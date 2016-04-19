var images = ["images/paris/DSC02874.JPG", "images/paris/DSC02836.JPG", "images/paris/DSC02872.JPG", "images/paris/DSC02733.JPG"];
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
