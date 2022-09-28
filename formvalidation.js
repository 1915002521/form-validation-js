function Fname() {
	var fname= document.getElementById('fname').value;

	if(fname==null || fname=="")
	{
		window.alert("Fill in the First Name");
		return false;
	}

}
function Lname() {
	var lname= document.getElementById('lname').value;

	if(lname==null || lname=="")
	{
		window.alert("Fill in the Last Name");
		return false;
	}

}
function Phone() {
	var phone= document.getElementById('phone').value;
	var patt= (?=.*[0-9]);

	if(phone.length==11 && phone==patt)
	{
		return true;
	}
	else{
		window.alert("Invalid Phone Number");
		return false;
	}

}
function Nid() {
	var nid= document.getElementById('nid').value;
	var patt= (?=.*[0-9]);

	if(nid.length==16 && nid==patt)
	{
		return true;
	}
	else{
		window.alert("Invalid NID Number");
		return false;
	}

}
function Division() {
	var division= document.getElementById('division').value;

	if(division==null || division=="")
	{
		window.alert("Fill in the Division");
		return false;
	}

}
function Zila() {
	var zila= document.getElementById('zila').value;

	if(zila==null || zila=="")
	{
		window.alert("Fill in the Zila");
		return false;
	}

}
function Upazila() {
	var upazila= document.getElementById('upazila').value;

	if(upazila==null || upazila=="")
	{
		window.alert("Fill in the Upazila");
		return false;
	}

}
function Zip() {
	var zip= document.getElementById('zip').value;
	var patt= /(?=.*[0-9])/;

	if(zip.length==4 && zip==patt)
	{
		return true;
	}
	else{
		window.alert("Invalid Zip Code");
		return false;
	}
}
function Email() {
	var email= document.getElementById('email').value;
	var patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email==patt)
	{
		return true;
	}
	else{
		window.alert("Invalid email address");
		return false;
	}

}
function Password() {
	var email= document.getElementById('email').value;
	var patt=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email==patt)
	{
		return true;
	}
	else{
		window.alert("Invalid email address");
		return false;
	}

}
function Submit(){
	var text1="form submitted"
document.getElementById("text").innerHTML = text1;

}
