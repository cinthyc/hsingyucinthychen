var images = ["../images/venice/DSC03365.jpg", "../images/venice/DSC03232.jpg", "../images/venice/DSC03324.jpg", "../images/venice/DSC03202.jpg"];
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