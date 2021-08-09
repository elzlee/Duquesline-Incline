

function validate(){

  var phone = $("#phone").val();
  if(phone.length != 5 || isNaN(phone)){
      alert("Zip Code is not valid or not in a valid format.");
      return false;
  }
}