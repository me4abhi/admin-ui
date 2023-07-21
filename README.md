
# ADMIN UI
`GEEKTRUST CHALLENGE`

[**LIVE LINK**](https://admin-ui-m4a.netlify.app/) |
[**API ENDPOINT**](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)

### PROBLEM STATEMENT
You work at a startup that is building an interface for admins to see and delete users. The users will be provided via an API. Your job is to build out a working UI. See image below for reference.


### REQUIREMENTS

- Column titles must stand out from the entries.
- There should be a search bar that can filter on any property.
- You should be able to edit or delete rows in place.(There is no expectation of persistence. Edit and delete are expected to only happen in memory.)
- You need to implement pagination: Each page contains 10 rows. Buttons at the bottom allow you to jump to any page including special buttons for first page, previous page, next page and last page. Pagination must update based on search/filtering. If there are 25 records for example that match a search query, then pagination buttons should only go till 3.
- You should be able to select one or more rows. A selected row is highlighted with a grayish background color. Multiple selected rows can be deleted at once using the 'Delete Selected' button at the bottom left.
- Checkbox on the top left is a shortcut to select or deselect all displayed rows. This should only apply to the ten rows displayed in the current page, and not all 50 rows.

### FEATURES & ASSUMPTIONS

- Icon Loading (While fetching from API)
- Icon + Message - No Results (if search not found or all items in list are deleted)
- DeleteSelected-Btn &rarr; Error (if no user is selected)
- DeleteSelected-Btn & Pagination-Bar &rarr; Hidden (when no data is displaying)
- **Edit Button**
   * Clicking anywhere except SAVE button will CANCEL the editing operation (previous values remain).
   * Clicking on EDIT button of another user will SWITCH the current editing operation to that user.
   * The property of any user cannot be edited to an EMPTY STRING.
