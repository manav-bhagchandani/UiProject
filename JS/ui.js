function clickHere(){
    var img = document.getElementById("flipkartLogoImg");
    var para = document.getElementById("flipkartPara");
      if (img.style.display === "none") {
        img.style.display = "block";
        para.style.display = "none";
      } else {
        img.style.display = "none";
        para.style.display = "block";
      }
}