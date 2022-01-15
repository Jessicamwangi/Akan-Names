function getAkanName() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var genders = document.getElementById("genders");
  var gender = genders.elements["gender"].value;

  if (day <= 0 || day > 31) {
    alert("Please Enter a Valid Date");
    return;

  }
  else if (month <= 0 || month > 12) {
    alert("Please Enter a valid Month")
    return;
  };

  var c = year.slice(0, 2);
  var cc = parseInt(c);
  var y = year.slice(2, 5);
  var yy = parseInt(y);
  var mm = parseInt(month);
  var dd = parseInt(day);
  var dayOfWeek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  if (gender === "Female") {
    function female() {
        var d = dayOfWeek.toFixed();
        var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        switch (d) {
            case '1':
                alert("Your Akan name is: " + female[0]);
                break;

            case '2':
                alert("Your Akan name is: " + female[1]);
                break;

            case '3':
                alert("Your Akan name is: " + female[2]);
                break;

            case '4':
                alert("Your Akan name is: " + female[3]);
                break;

            case '5':
                alert("Your Akan name is: " + female[4]);
                break;

            case '6':
                alert("Your Akan name is: " + female[5]);
                break;

            case '0':
                alert("Your Akan name is: " + female[6]);
                break;
        }
    }
    female();
  }
  if (gender === "Male") {
    function male() {
      var d = dayOfWeek.toFixed();
      var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
      switch (d) {
          case '1':
              alert("Your Akan name is: " + male[0]);
              break;

          case '2':
              alert("Your Akan name is: " + male[1]);
              break;

          case '3':
              alert("Your Akan name is: " + male[2]);
              break;

          case '4':
              alert("Your Akan name is: " + male[3]);
              break;

          case '5':
              alert("Your Akan name is: " + male[4]);
              break;

          case '6':
              alert("Your Akan name is: " + male[5]);
              break;

          case '0':
              alert("Your Akan name is: " + male[6]);
              break;
      }
    }

    male();
  }
  if (gender === "") {
    alert("Please Choose A Gender");
  }



};