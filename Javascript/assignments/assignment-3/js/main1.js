
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteURL");


var bookmarkList = [];

function addBookmark(e) {
    debugger;
    // e.preventDefault(); 
    // debugger;

    var bookmark = {
        sitename:siteNameInput.value,
        siteurl: siteUrlInput.value,
    }

    bookmarkList.push(bookmark);
    console.log("bookmark", bookmark, "bookmarkList", bookmarkList);

    localStorage.setItem("bookmarkContainer", JSON.stringify(bookmarkList));
    
}

// function addBookmark(   ) {
//     // event.preventDefault(); // Prevent form submission from reloading the page
//     debugger;
//     alert("Test...");
//     var bookmark = {
//         sitename: siteNameInput.value,
//         siteurl: siteUrlInput.value,
//     };

//     bookmarkList.push(bookmark);
//     console.log("bookmark", bookmark, "bookmarkList", bookmarkList);

//     localStorage.setItem("bookmarkContainer", JSON.stringify(bookmarkList));

//     // Optionally clear inputs after adding
//     // siteNameInput.value = "";
//     // siteUrlInput.value = "";
// }

console.log("out .... ", bookmarkList);


