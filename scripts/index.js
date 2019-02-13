var ru = "pages/";

function listingCallback(event, obj) {
  if (event.readyState == 4 && event.status == 200) {
    obj.innerHTML = event.responseText;
  }
  if (event.readyState == 4 && event.status == 404) {
    obj.innerHTML = "Page not found";
  }
}

function listing(path, obj){
  var listingAjax = new XMLHttpRequest();
  listingAjax.open("GET", path, true);
  listingAjax.onreadystatechange = function () {listingCallback(this, obj)};
  listingAjax.send(null);
}


function read(path, folder, file){
  //listing(path + "Header.htm", header);
  //listing(path + "Footer.htm", footer);
  listing(path + folder + '/left.htm', left);
  listing(path + folder + '/' + file + ".htm", middle);
  //listing(path + folder + '/right.htm', right);
}

if( window.location.search != "" ){
  var arr = window.location.search.substr(1).split('&');
  var size = arr.length;
  if( size==2 ){
    // имя страницы в rus
    read(ru, arr[0], arr[1]);
  }
} else {
  // главная страница rus
  read(ru, "2", "1");
}
