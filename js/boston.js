var images = ["images/boston/DSC00899.jpg", "images/boston/DSC00965.jpg", "images/boston/IMG_1547.jpg", "images/boston/IMG_1369.jpg"];
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