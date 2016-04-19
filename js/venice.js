var images = ["images/venice/DSC03365.JPG", "images/venice/DSC03232.JPG", "images/venice/DSC03324.JPG", "images/venice/DSC03202.JPG"];
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
