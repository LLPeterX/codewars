/* 
https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
 */

 import java.util.List;

// TODO: complete this object/class

public class PaginationHelper<T> {

    private List<T> collection;
    private int itemsPerPage;
    private int pages;

    /**
     * The constructor takes in an array of items and a integer indicating how
     * many items fit within a single page
     */
    public PaginationHelper(List<T> collection, int itemsPerPage) 
    {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.pages=this.pageCount();
    }

    /**
     * returns the number of items within the entire collection
     */
    public int itemCount() {
        return this.collection.size();
    }

    /**
     * returns the number of pages
     */
    public int pageCount() {
        return (int)Math.ceil((double)this.collection.size()/(double)this.itemsPerPage);
    }

    /**
     * returns the number of items on the current page. page_index is zero
     * based. this method should return -1 for pageIndex values that are out of
     * range
     */
    public int pageItemCount(int pageIndex) {
        if(pageIndex<0 || pageIndex>this.pages-1 || this.collection.size()==0) return -1;
        if(pageIndex<this.pages-1) return this.itemsPerPage;
        return this.collection.size()%itemsPerPage;
    }

    /**
     * determines what page an item is on. Zero based indexes this method should
     * return -1 for itemIndex values that are out of range
     */
    public int pageIndex(int itemIndex) {
      if(itemIndex<0 || itemIndex>this.collection.size() || this.collection.size()==0) return -1;
      return itemIndex/itemsPerPage;
    }
}