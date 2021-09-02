var grid = document.querySelector(".masonry");
var msnry = new Masonry(grid, {
  itemSelector: ".masonry-item",
  horizontalOrder: true,
  percentPosition: true,
  // columnWidth: 300,
  // fitWidth: true,
});
