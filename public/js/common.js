// $("#postTextarea").keyup((event) => {
//   var textbox = $(event.target);
//   var value = textbox.val().trim();

//   var submitButton = $("#submitPostButton");

//   if (submitButton.length == 0) return alert("no submit button");

//   if (value == "") {
//     submitButton.prop("disabled", true);
//     return;
//   }

//   submitButton.prop("disabled", false);
// });

const textbox = document.getElementById("postTextarea");
const submitButton = document.getElementById("submitPostButton");

if (!submitButton) {
  alert("no submit button");
}

textbox.addEventListener("keyup", (event) => {
  const value = event.target.value.trim();

  if (value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

$("#submitPostButton").click((event) => {
  var button = $(event.target);
  var textbox = $("#postTextarea");

  var data = {
    content: textbox.val(),
  };

  $.post("/api/posts", data, (postData) => {
    var html = createPostHtml(postData);
    $(".postsContainer").prepend(html);
    textbox.val("");
    button.prop("disabled", "true");
  });
});

function createPostHtml(postData) {
  return postData.content;
}
