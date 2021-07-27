var grid = document.querySelector(".masonry");
var msnry = new Masonry(grid, {
  itemSelector: ".masonry-item",
  columnWidth: 300,
  horizontalOrder: true,
  fitWidth: true,
});
