$(document).ready(function(){
var checkbox_a=0;
var checkbox_b=0;
var checkbox_c=0;
var checkbox_d=0;
var true_id=0;
var is_true_false=0;
var j=0;
var i=0;
var flag=0;

$(document).on('click','#true',function(){
	 true_id= 1;
});
$(document).on('click','#false',function(){
	 true_id= 2;
});	
// pre ka code id hai ye question no le ra hai or database me check kar ra hai
$("#prev").click(function(){
	flag=1;
var btn ="pre";
//alert(btn);
prepart();
var ques_no = $("#ques_no").val();
var datano='no='+ques_no;
//alert(datano);

findshow(datano);
 });

// find no in database 
function findshow(datano)
{
$.ajax({
type: "POST",
url: "findno.php",
data:datano,
cache: false,
success: function(data){
 
var h=$.trim(data);
// alert("php:"+h);
 matchshow(h); // yaha pe hum check karne ke liye bhejege match
  // $('#faltu').val(data);
}


});
}


function matchshow(data)
{
var ques_no = $("#ques_no").val();
//alert("a:"+ques_no);
if($.trim(data)==ques_no)
{
var ques_no = $("#ques_no").val();// dono string check hongi
var datano='no='+ques_no;
show(datano);
}
else
{
$(tinymce.get('ques_text').getBody()).html("");
//$("#ques_text").val("");
}

}
function true_false(x)
{ 
if(x==1)
{
$(tabletrue).show();
$(tablemcq).hide();
}
else{
$(tablemcq).show();
$(tabletrue).hide();
}
}

// data  show karne ke liye database se vaue uthaye ga
function show(dataString)
{
$.ajax({
type: "POST",
url: "show_question.php",
data: dataString,
cache: false,
success: function(result){
showform(result);
}

});

}

// form me store kardega

function showform(result)
{
//alert("aa gaya"+result);
var seprate=result.split('##');
i=0;
while(i<seprate.length)
{
var x=seprate[i].toString();
var x=$.trim(x);
$("#ques_no").val(x);
i++;
var x=seprate[i].toString();
$(tinymce.get('ques_text').getBody()).html(x);
//$("#ques_text").val(x);
i++;
var x=seprate[i];
$("#max_marks1").val(x);
i++;
var x=seprate[i];
var x=$.trim(x);
if (x==1) {
var checkbox_a="A<input name='checkbox_a' id='checkbox_a' checked class='checkbox_a' type='checkbox' value=1 onchange='myFunction(this);' /><input name='option_a' id='option_a' type='text' style='width:75%'/>";
	$('#checkbox_a_container').html(checkbox_a);}
else 
if (x==0) {
	var checkbox_a="A<input name='checkbox_a' id='checkbox_a' class='checkbox_a' type='checkbox' value=1 onchange='myFunction(this);' /><input name='option_a' id='option_a' type='text' style='width:75%'/>";
	$('#checkbox_a_container').html(checkbox_a);}

i++;
var x=seprate[i];
$("#checkbox_b").val(x);
if (x==1) {
var checkbox_b="B<input name='checkbox_b' id='checkbox_b' checked class='checkbox_b' type='checkbox' value=2 onchange='myFunction(this);' /><input name='option_b' id='option_b' type='text' style='width:75%'/>";
	$('#checkbox_b_container').html(checkbox_b);}
else 
if (x==0) {
	var checkbox_b="B<input name='checkbox_b' id='checkbox_b' class='checkbox_b' type='checkbox' value=2 onchange='myFunction(this);' /><input name='option_b' id='option_b' type='text' style='width:75%'/>";
	$('#checkbox_b_container').html(checkbox_b);}
i++;
var x=seprate[i];
$("#checkbox_c").val(x);
if (x==1) {
var checkbox_c="C<input name='checkbox_c' id='checkbox_c' checked class='checkbox_c' type='checkbox' value=3 onchange='myFunction(this);' /><input name='option_c' id='option_c' type='text' style='width:75%'/>";
	$('#checkbox_c_container').html(checkbox_c);}
else 
if (x==0) {
	var checkbox_c="C<input name='checkbox_c' id='checkbox_c' class='checkbox_c' type='checkbox' value=3 onchange='myFunction(this);' /><input name='option_c' id='option_c' type='text' style='width:75%'/>";
	$('#checkbox_c_container').html(checkbox_c);}
i++;
var x=seprate[i];
$("#checkbox_d").val(x);
if (x==1) {
var checkbox_d="D<input name='checkbox_d' id='checkbox_d' checked class='checkbox_d' type='checkbox' value=4 onchange='myFunction(this);' /><input name='option_d' id='option_d' type='text' style='width:75%'/>";
	$('#checkbox_d_container').html(checkbox_d);}
else 
if (x==0) {
	var checkbox_d="D<input name='checkbox_d' id='checkbox_d'  class='checkbox_d' type='checkbox' value=4 onchange='myFunction(this);' /><input name='option_d' id='option_d' type='text' style='width:75%'/>";
	$('#checkbox_d_container').html(checkbox_d);}
i++;
var x=seprate[i].toString();
$("#option_a").val(x);
i++;
var x=seprate[i].toString();
$("#option_b").val(x);
i++;
var x=seprate[i].toString();
var x=$.trim(x);
$("#option_c").val(x);
i++;
var x=seprate[i].toString();
$("#option_d").val(x);
i++;
var x=seprate[i];
if (x==1) {
var true_id="<input name='radiobtn' checked type='radio' id='true' /> TRUE"
	$('#is_true_container').html(true_id);}
else 
if (x==2) {
	var true_id="<input name='radiobtn' checked type='radio' id='false' /> FALSE"
	$('#is_false_container').html(true_id);}
i++;
var x=seprate[i];
if (x==1) {
var true_false_id="IS TRUE/FALSE?&nbsp<input id='is_true_false' type='checkbox' checked value=5 onclick='true_false(this);' onchange='myFunction(this);' />"
	$('#is_true_false_container').html(true_false_id);
	true_false(x);
	}
else 
if (x==0) {
	var true_false_id="IS TRUE/FALSE?&nbsp<input id='is_true_false' type='checkbox' value=5 onclick='true_false(this);' onchange='myFunction(this);' />"
	$('#is_true_false_container').html(true_false_id);
	true_false(x);
	}
i++;

}

}


// function ko decrease karne ka method
function prepart()
{
var temp=$("#ques_no").val();
var len=temp.length;
var arr=temp.split('.');
var last=arr[arr.length-1];
if(last>1)
{last--;}
var newno="";
for(i=0;i<arr.length-1;i++)
{
newno+=arr[i]+".";
}
newno=newno+last;
$("#ques_no").val(newno);
}

//// similarly for nexbtn
function nextperform()
{
var btn ="pre";
//alert(btn);
increaseno();
var ques_no = $("#ques_no").val();
var datano='no='+ques_no;
//alert(datano);

findshow(datano);
}

// to next increase no
function increaseno()
{
var temp=$("#ques_no").val();
var len=temp.length;
var arr=temp.split('.');
var last=arr[arr.length-1];
if(last>0)
{last++;}
var newno="";
for(i=0;i<arr.length-1;i++)
{
newno+=arr[i]+".";
}
newno=newno+last;
$("#ques_no").val(newno);

}

function alterperform()
{alert(100);
var option_a = $("#option_a").val();
var option_b = $("#option_b").val();
var option_c = $("#option_c").val();
var option_d = $("#option_d").val();
var checkbox_a = $("#checkbox_a1").val();
var checkbox_b = $("#checkbox_b1").val();
var checkbox_c = $("#checkbox_c1").val();
var checkbox_d = $("#checkbox_d1").val();
var ques_no = $("#ques_no").val();
var ques_text= tinyMCE.get('ques_text').getContent();//$("#ques_text").val();
var max_marks = $("#max_marks1").val();
var is_true_false= $("#is_true_false1").val();
if(is_true_false=="")
{
is_true_false=0;
}
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'option_a='+option_a + '&option_b='+ option_b + '&option_c='+ option_c + '&option_d='+ option_d+ '&checkbox_a='+ checkbox_a+ '&checkbox_b='+ checkbox_b + '&checkbox_c='+ checkbox_c + '&checkbox_d='+ checkbox_d+ '&ques_no='+ ques_no+ '&ques_text='+ques_text + '&max_marks='+max_marks+ '&true_id='+true_id+ '&is_true_false='+is_true_false;
alert(dataString);
if(is_true_false==0)
{
if(ques_text==''||max_marks==''||option_a==''||option_b==''||option_c==''||option_d=='') 
{     
//alert("please fill all the fields");
swal("Please Fill All Fields"," ","error"); 
j=1;
}
else
if (j==0) {
 {alert(j);
	// AJAX Code To Enter question in database
$.ajax({
type: "POST",
url: "alter_mcq.php",
data: dataString,
cache: false,
success: function(result){
swal({title: "",   text:result,   timer: 1000 });	
	
}
});	
}
}
}
else
if(is_true_false==1)
{
if(ques_text==''||max_marks==''||true_id=='') 
{     
swal("Please Fill All Fields"," ","error"); 
j=1;
}
else
alert(j);
if (j==0) {

 { alert("check");
	// AJAX Code To Enter quetion in database
	$.ajax({
type: "POST",
url: "alter_mcq.php",
data: dataString,
cache: false,
success: function(result){
swal({title: "",   text:result,   timer: 1000 });	
	
}
});	
}
}
//return false;
}

}
	
$("#next").click(function(){
	
var ques_no = $("#ques_no").val();
// Returns successful data submission message when the entered information is stored in database.
//var dataString = 'ques_no='+ques_no;
//alert(ques_no);
 {
	// AJAX Code To Enter quetion in database
$.ajax({
type: "POST",
url: "check_mcq.php",
data: {ques_no:ques_no},
cache: false,
success: function(result){
	if(result==1)
	{	
		nextperform();
		
}
else if(result==0)
swal({   title: "Are you sure?",   text: "Question will not be saved",   type: "warning",   showCancelButton:false});
}
});
}
return false;
});

$("#rem_ques").click(function(){
	
var ques_no = $("#ques_no").val();
// Returns successful data submission message when the entered information is stored in database.
//var dataString = 'ques_no='+ques_no;
//alert(ques_no);
 {
	// AJAX Code To Enter quetion in database
$.ajax({
type: "POST",
url: "delete_record.php",
data: {ques_no:ques_no},
cache: false,
success: function(result){
	swal({title: "",   text:result,   timer: 1000 });
}
});
}
return false;
});


$("#add_ques").click(function(){
	
if(flag==1)
{
	alterperform();
}
else

var option_a = $("#option_a").val();

var option_b = $("#option_b").val();

var option_c = $("#option_c").val();

var option_d = $("#option_d").val();

var checkbox_a = $("#checkbox_a1").val();

var checkbox_b = $("#checkbox_b1").val();

var checkbox_c = $("#checkbox_c1").val();

var checkbox_d = $("#checkbox_d1").val();

var ques_no = $("#ques_no").val();
var ques_text= tinyMCE.get('ques_text').getContent();//$("#ques_text").val();
var max_marks = $("#max_marks1").val();
var is_true_false= $("#is_true_false1").val();
if(is_true_false=="")
{
is_true_false=0;
}
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'option_a='+option_a + '&option_b='+ option_b + '&option_c='+ option_c + '&option_d='+ option_d+ '&checkbox_a='+ checkbox_a+ '&checkbox_b='+ checkbox_b + '&checkbox_c='+ checkbox_c + '&checkbox_d='+ checkbox_d+ '&ques_no='+ ques_no+ '&ques_text='+ques_text + '&max_marks='+max_marks+ '&checkbox_a='+ checkbox_a+ '&checkbox_b='+checkbox_b+ '&checkbox_c='+checkbox_c+ '&checkbox_d='+checkbox_d+ '&true_id='+true_id+ '&is_true_false='+is_true_false;
if(is_true_false==0)
{
if(ques_text==''||max_marks==''||option_a==''||option_b==''||option_c==''||option_d=='') 
{     
//alert("please fill all the fields");
swal("Please Fill All Fields"," ","error"); 
i=1;
}
else
if (i==0) {
 {
	// AJAX Code To Enter question in database
$.ajax({
type: "POST",
url: "entry_mcq.php",
data: dataString,
cache: false,
success: function(result){

swal({title: "",   text:result,   timer: 1000 });
//swal(result," ","success") 
}
});
}
}
}
else
if(is_true_false==1)
{
if(ques_text==''||max_marks==''||true_id=='') 
{     
swal("Please Fill All Fields"," ","error"); 
i=1;
}
else

if (i==0) {

 {
	// AJAX Code To Enter quetion in database
$.ajax({
type: "POST",
url: "entry_mcq.php",
data: dataString,
cache: false,
success: function(result){
swal({title: "",   text:result,   timer: 1000 });
//swal(result," ","success") 
}
});
}
}

}
return false;
});

});

 
