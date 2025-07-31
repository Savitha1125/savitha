function formvalidation(){
      var name=document.getElementById("name").value;
      var dob=document.getElementById("dob").value;
      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      var gender=document.querySelector('input[name="gender"]:checked').value;
      var mobile=document.getElementById("mobile").value;
      var address=document.getElementById("address").value;
      var pincode=document.getElementById("pincode").value;
      var country=document.getElementById("country").value;
      var state=document.getElementById("state").value;
      document.write("<h1 style='color: green; text-align: center;'>Successfully Registered!</h1>");
      console.log("Name:", name);
      console.log("DOB:", dob);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Gender:", gender);
      console.log("Mobile:", mobile);
      console.log("Address:", address);
      console.log("Pincode:", pincode);
      console.log("Country:", country);
      console.log("State:", state);
}
