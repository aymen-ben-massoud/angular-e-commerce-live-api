function open() {
  let menu = document.getElementById("sidebarCollapse");

  menu.onclick = (eo) => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
  };
}

function close() {
  let menu = document.getElementById("sidebarCollapseX");

  menu.onclick = (eo) => {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
  };
}
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active");
  });

  $("#sidebarCollapseX").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function () {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
      console.log("it's working!");
    }
  });

  $("#sidebarCollapseX").on("click", function () {
    $(".overlay").removeClass("visible");
  });
});
