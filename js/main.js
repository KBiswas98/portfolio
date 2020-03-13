let _dataFilter = "ALL";

$(document).ready(function() {
  $(".button").click(cos => {
    console.log(cos);
    $(".button").removeClass("active");
    $(`#${cos.target.id}`).addClass(" active");
    console.log(cos.target.id);
    switch (cos.target.id) {
      case "design":
        $(".design").fadeIn('show');

        $(".website, .app").fadeOut('fast');
        break;
      case "website":
        $(".website").fadeIn('show');
        $(".design, .app").fadeOut('fast');
        break;
      case "app":
        $(".app").fadeIn('show');
        $(".design, .website").fadeOut('fast');
        break;
      default:
        $(".all").fadeIn('show');
    }
  });
});
