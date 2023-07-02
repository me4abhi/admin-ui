`Requirements`

1. Column titles must stand out from the entries.
2. There should be a search bar that can filter on any property.
3. You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
4. You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
5. You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
6. Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

`Other Features/Assumptions`

1. Icon - Loading (While fetching from API)
2. Icon + Message - No Results (if search not found or all items in list are deleted)

3. DeleteSelected-Btn - Error (if no user is selected)
4. DeleteSelected-Btn & Pagination-Bar - Hidden (if no data is displaying)

5. Edit-Button -
   1. Clicking anywhere except SAVE button will CANCEL the editing operation (previous values remain).
   2. Clicking on EDIT button of another user will SWITCH the current editing operation to that user.
   3. The property of any user cannot be edited to an EMPTY STRING.
