var btn=document.getElementById('btn')
btn.addEventListener('click',displaydetails)

var row=1;

function displaydetails(){
    var FirstName=document.getElementById('FirstName').value
    var lastName=document.getElementById('lastName').value
    var Address=document.getElementById('Address').value
    var Pincode=document.getElementById('Pincode').value
    var gender = document.getElementsByName("Gender")
    var genderValue;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genderValue = gender[i].value
      }}
    var food = document.getElementsByName("food")
    var foodList = []
    var fooditems = 0;
    console.log(food)
      for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
          foodList.push(food[i].value)
          fooditems++;
        }
      }
      if(foodList.length >=2){
        result=(foodList.join(", "))
      }
      else{
        result=alert("Must choose at least 2 out of 5 options")
      }
    var state=document.getElementById('State').value
    var country=document.getElementById('Country').value
 var title=document.getElementById('title')
 title.style.visibility="visible";
 var remove=document.getElementById('clearbtn')
 remove.style.visibility="visible"
 var table=document.getElementById('formlist')
 table.style.visibility="visible"
 var newRow=table.insertRow(row)
 var cell1=newRow.insertCell(0)
 var cell2=newRow.insertCell(1)
 var cell3=newRow.insertCell(2)
 var cell4=newRow.insertCell(3)
 var cell5=newRow.insertCell(4)
 var cell6=newRow.insertCell(5)
 var cell7=newRow.insertCell(6)
 var cell8=newRow.insertCell(7)
 cell1.innerHTML=FirstName;
 cell2.innerHTML=lastName;
 cell3.innerHTML=Address;
 cell4.innerHTML=Pincode;
 cell5.innerHTML=genderValue;
 cell6.innerHTML=foodList;
 cell7.innerHTML=state;
 cell8.innerHTML=country;
 row++;
}
