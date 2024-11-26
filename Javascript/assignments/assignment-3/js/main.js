
var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var bookmarksContainer = document.querySelector(".bookmarks-container");
var modal = document.querySelector(".modal");
var modalMessage = document.querySelector(".modal-message");
var closeModalBtn = document.querySelector(".close-modal");


var bookmarks = [];

if (localStorage.getItem("bookmarksList")) {
  bookmarks = JSON.parse(localStorage.getItem("bookmarksList"));
  displayBookmarks();
}


var nameRegex = /^[a-zA-Z0-9 ]{3,40}$/;
// for this I used google >> gemini 🙃
var urlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;


function showError(input, message) {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  input.nextElementSibling.innerText = message;
}


function clearError(input) {
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
  input.nextElementSibling.innerText = "";
}

// check the name when user type
siteName.addEventListener("input", function () {
  if (!nameRegex.test(siteName.value.trim())) {
    showError(siteName, "Name must be 3-40 characters and no special characters!");
  } else {
    clearError(siteName);
  }
});

// chek the URL when the user type
siteURL.addEventListener("input", function () {
  if (!urlRegex.test(siteURL.value.trim())) {
    showError(siteURL, "Enter a valid URL!");
  } else {
    clearError(siteURL);
  }
});

function addBookmark() {
  // prevent default behavior 
  event.preventDefault();

  if (!nameRegex.test(siteName.value.trim())) {
    showModal("Invalid site name! Name must be 3-40 characters and no special characters.");
    return;
  }
  if (!urlRegex.test(siteURL.value.trim())) {
    showModal("Invalid site URL! Please enter a valid URL.");
    return;
  }

  var isDuplicateName = false;

  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].name.toLowerCase() === siteName.value.trim().toLowerCase()) {
      isDuplicateName = true;
      break; 
    }
  }

  if (isDuplicateName) {
    showModal("The bookmark name already exists. Please use a different name.");
    return;
  }


  var bookmark = {
    name: siteName.value.trim(),
    url: siteURL.value.trim(),
  };

  //   add website to the array
  bookmarks.push(bookmark);

  // update LocalStorage
  localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));


  displayBookmarks();

 
  siteName.value = "";
  siteURL.value = "";
  clearError(siteName);
  clearError(siteURL);
}

function displayBookmarks() {
  bookmarksContainer.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    var card = document.createElement("div");
    card.className = "card custom-card mb-3";

    card.innerHTML = `
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-1 text-center">
            <strong>${index + 1}</strong>
          </div>
          <div class="col-5">
            <strong>${bookmark.name}</strong>
          </div>
          <div class="col-3 text-center">
            <button class="btn btn-visit action-btn" onclick="visitBookmark(${index})">
              <i class="bi bi-eye"></i> Visit
            </button>
          </div>
          <div class="col-3 text-center">
            <button class="btn btn-delete action-btn" onclick="deleteBookmark(${index})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    `;
    bookmarksContainer.appendChild(card);
  });
}


function visitBookmark(index) {
  var url = bookmarks[index].url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  window.open(url, "_blank");
}


function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarksList", JSON.stringify(bookmarks));
  displayBookmarks();
}


function showModal(message) {
  modalMessage.innerText = message;
  modal.classList.remove("d-none");
}

closeModalBtn.addEventListener("click", function () {
  modal.classList.add("d-none");
});
