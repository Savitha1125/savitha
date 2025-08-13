function validate(){
      var name=document.getElementById("name").value;
      if(name==""){
            document.getElementById("error").innerHTML="Name is required";
      }

      else if(!/^[A-Za-z ]{2,20}$/.test(name)){
            document.getElementById("error").innerHTML="Name must be 2 to 20 characters";
      }
      else{
            document.getElementById("error").innerHTML="";
      }

      var dob=document.getElementById("dob").value;
      if(dob==""){
            document.getElementById("db").innerHTML="Date of birth is required";
      }
       else if(!/^\d{4}-\d{2}-\d{2}$/.test(dob)){
             document.getElementById("db").innerHTML="Date of birth must be in yyyy-mm-dd ";
      }
      else{
            document.getElementById("db").innerHTML="";
      }

      var age=document.getElementById("age").value;
      if(age==""){
            document.getElementById("ag").innerHTML="Age is required";
      }
      else if(!/^[0-9]{1,2}$/.test(age)){
            document.getElementById("ag").innerHTML="Age must be a number between 1 and 99";
      }
      else{
            document.getElementById("ag").innerHTML="";
      }

      var email=document.getElementById("email").value;
      if(email==""){
            document.getElementById("em").innerHTML="Email is required";
      }
      else if(!/^[a-z0-9.@]{2,}$/.test(email)){
            document.getElementById("em").innerHTML="Email must be at least 2 characters";
      }
      else{
            document.getElementById("em").innerHTML="";
      }

      var password=document.getElementById("password").value;
      if(password==""){
            document.getElementById("pas").innerHTML="password is required";
      }
      else if(!/^[A-Za-z0-9@#_]{4,8}$/.test(password)){
            document.getElementById("pas").innerHTML="password must be 4 to 8 characters";
      }
      else{
            document.getElementById("pas").innerHTML="";
      }

      var mobile=document.getElementById("mobile").value;
      if(mobile==""){
            document.getElementById("mob").innerHTML="Mobile number is required";
      }
      else if(!/^[0-9]{10}$/.test(mobile)){
            document.getElementById("mob").innerHTML="Mobile number must be 10 digits";
      }
      else{
            document.getElementById("mob").innerHTML="";
      }

      var address=document.getElementById("address").value;
      if(address==""){
            document.getElementById("add").innerHTML="Address is required";
      }
      else if(!/^[A-Za-z0-9 ]+$/.test(address)){
            document.getElementById("add").innerHTML="Address must be alphanumeric";
      }
      else{
            document.getElementById("add").innerHTML="";
      }

      var pincode=document.getElementById("pincode").value;
      if(pincode==""){
            document.getElementById("pin").innerHTML="Pincode is required";
      }
      else if(!/^[0-9]{6}$/.test(pincode)){
            document.getElementById("pin").innerHTML="Pincode must be 6 digits";
      }
      else{
            document.getElementById("pin").innerHTML="";
      }
      var country=document.getElementById("country").value;
      if(country==""){
            document.getElementById("co").innerHTML="Please Select your country";
      }
      else{
            document.getElementById("co").innerHTML="";
      }
      var gender=document.querySelector('input[name=gender]:checked');
      if(gender==null){
            document.getElementById("gen").innerHTML="select your gender";
      }
      else{
            document.getElementById("gen").innerHTML="";
      }
      var file=document.getElementById("files").value;
      if(file==""){
            document.getElementById("fi").innerHTML="Please upload your file";
      }
      // else if(!/^(.*\.(jpg|png|pdf|svg|gif|mp4|avi|mov|mp3|wav|ogg))$/.test(file)){
      //       document.getElementById("fi").innerHTML="File must be a jpg, png, or pdf";
      // }
      else{
            document.getElementById("fi").innerHTML="";
      }
      document.getElementById("item").innerHTML="Successfully Registered";
      alert("successfully registered")
}