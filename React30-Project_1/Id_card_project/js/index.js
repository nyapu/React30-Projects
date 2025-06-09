
function generateCard() {
    // Get value of Student name from form input 

    const name = document.getElementById('name').value;
    console.log(name)

    // Assign the value of student name to generated card

    document.getElementById('cardName').innerHTML = name;

    // Get value of college name from form input 
    const college = document.getElementById('collegeName').value;

    // Assign the value of college name to generated card

    document.getElementById('cardCollegeName').innerHTML = college
    //get value of phone number from input
    const number=document.getElementById("phonenumber").value;
    document.getElementById("phonenum").innerHTML=number;

    // Get value of location name from form input 

    const location = document.getElementById('location').value;

    // Assign the value of location name to generated card
    document.getElementById('cardLocation').innerHTML = location;

    // Display final generated card to user     
 
    document.getElementById("collegeCard").style.display = "block";

 // Image Upload Handling
    const photoInput = document.getElementById("photoUpload");
    const userImage = document.getElementById("userImage");

    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            userImage.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        userImage.src = ""; // fallback if no image uploaded
    }


}
/*
easy to write and understand way
 document.getElementById("cardName").innerText = document.getElementById("name").value;
    document.getElementById("cardCollegeName").innerText = document.getElementById("collegeName").value;
    document.getElementById("cardLocation").innerText = document.getElementById("location").value;
    document.getElementById("cardPhoneNumber").innerText = document.getElementById("phonenumber").value;
    */
   