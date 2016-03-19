var images = ["images/boston/dsc00899.jpg", "images/boston/dsc00965.jpg", "images/boston/img_1547.jpg", "images/boston/img_1369.jpg"];
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