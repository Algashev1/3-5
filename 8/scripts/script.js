$(document).ready(function () {
  $("#my-form").submit(function (event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    return false;
  });
});
