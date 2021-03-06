// import { Waterfall } from './waterfall';

var waterfall = new Waterfall({
  boxSelector: ".waterfallBox",
  rootContainer: "root",
  colNum: 4,
});

(function () {
  window.onscroll = function () {
    while (isReachEnd()) {
      box = waterfall.appendBox(newLoadNode()());
      waterfall.boxes.push(box);
    }
  }
}());
// loadMore();

function isReachEnd() {
  let currScrollHeight = (document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight);
  let currMinHeightIndex = waterfall.getMinHeightCol();
  // console.log(document.documentElement.offsetHeight);
  let currMinCol = waterfall.columns[currMinHeightIndex];
  let currMinHeight = currMinCol.offsetHeight + currMinCol.offsetTop;
  return currMinHeight < currScrollHeight;
}

//load new image
function newLoadNode() {
  let size = ['660x250', '300x400', '350x500', '200x320', '300x300'];
  let color = ['E97452', '4C6EB4', '449F93', 'D25064', 'E59649'];
  let i = parseInt(Math.random() * 5);

  return function () {
    let box = document.createElement('div');
    box.className = 'waterfallBox';
    let image = document.createElement('img');
    image.src = "http://placehold.it/" + size[i] + '/' + color[i] + '/fff';
    box.appendChild(image);
    let content = document.createElement('div');
    content.className = 'content';
    let title = document.createElement('h3');
    title.appendChild(document.createTextNode('Heading'));
    content.appendChild(title);
    let p = document.createElement('p');
    p.appendChild(document.createTextNode('Content'));
    content.appendChild(p);
    box.appendChild(content);
    return box;
  }
}

(function clickAndDisplay() {
  let waterfall = document.getElementById("root");
  waterfall.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      let mask = document.getElementsByClassName("hidden")[0];
      console.log(mask.getElementsByTagName("img")[0]);
      mask.getElementsByTagName("img")[0].src = event.target.src;
      mask.classList.remove("hidden");

      mask.addEventListener("click", function () {
        mask.classList.add("hidden");
      })
    }
  })
}());