class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
        return this.collection.length
	}
	pageCount() {
	// returns the number of pages
        return  Math.ceil(this.itemCount()/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
        const last_page = this.pageCount() - 1;
        const last_page_items = this.itemCount() - (last_page * this.itemsPerPage);
        if (pageIndex === last_page && last_page_items > 0) {
            return last_page_items;
        } else if (pageIndex >= 0 && pageIndex < last_page) {
            return this.itemsPerPage;
        } else {
            return -1;
        }
    }
	
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1
        }   
        return Math.floor(itemIndex / this.itemsPerPage)
	}
}