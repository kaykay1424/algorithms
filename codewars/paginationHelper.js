// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  // If pageIndex is out of range
  if ((pageIndex + 1) > this.pageCount() || pageIndex < 0) return -1;  
  // If the page should have the full amount of items as specified by itemsPerPage
  if (this.itemsPerPage * (pageIndex + 1 ) < this.itemCount()) 
    return this.itemsPerPage;
  // If it is the last page and the amount of items left (from the 1st page to the 2nd to last page) is smaller than itemsPerPage
  return this.itemCount() - (this.itemsPerPage * pageIndex);
}

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  // If itemIndex is out of range
  if (itemIndex + 1 > this.itemCount() || itemIndex < 0) return -1;
  
  return Math.floor((itemIndex + 1) / this.itemsPerPage);
}
