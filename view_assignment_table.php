<?php
session_start();
if (@$_SESSION['user_id']==false) {
        // user unauth
        $loc = "../../login/login1.php";
        header('Location:'.$loc);
        die();
    }
//echo $_SESSION['assignment_id'];
?>
 
 
<script src="../../js/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
 
 
<style>
 
 
 
.tabledesign
{
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size:15px;
    margin: 20px;
    margin-right:20px;
    width: 90%;
    text-align: left;
    border-collapse: collapse;
}
.tabledesign th
{
    font-size: 13px;
    font-weight: normal;
    padding: 8px;
    background: #666666;
        border: 1px solid #ccc;
        font-weight: bold;
    color: #FFFFFF;
}
.tabledesign td
{
    padding: 8px;
    border: 1px solid #ccc;
    color: #669;
     
    background: #eee;
}
.tabledesign tfoot tr td
{
    background: #e8edff;
    font-size: 12px;
    border: 1px solid #ccc;
    color: #99c;
}
.tabledesign tbody tr:hover td
{
    background: #CCCCCC;
 
        color: #333333;
}
.tabledesign .create:hover
{
//font-size:10px;
font-style:italic;
color: #663333;
text-decoration:underline;
}
.tabledesign .modify:hover
{
//font-size:10px;
font-style:italic;
color: #663333;
text-decoration:underline;
}
.tabledesign .dispatch:hover
{
//font-size:10px;
font-style:italic;
color: #663333;
text-decoration:underline;
}
 
</style>
 
 
 
<script type="text/javascript">
$(document).on('click','.infocreate',function(){
var assignment_id3 = $(this).parent().parent().find('.assignment_id3').text();
     
var subject_name3 = $(this).parent().parent().find('.subject_name3').text();
 
var assignment_topic3 = $(this).parent().parent().find('.assignment_topic3').text();
 
var submission_date3 = $(this).parent().parent().find('.submission_date3').text();
 
var issue_date3 = $(this).parent().parent().find('.issue_date3').text();
var assignment_type3 = $(this).parent().parent().find('.assignment_type3').text();
var max_marks = $(this).parent().parent().find('.max_marks').text();
var passing_marks = $(this).parent().parent().find('.passing_marks').text();
 
    //alert(assignment_id3);
 
    var assign_id='assignment_id3='+assignment_id3+'&subject_name3='+subject_name3+'&assignment_topic3='+assignment_topic3+'&submission_date3='+submission_date3+'&assignment_type3='+assignment_type3+'&issue_date3='+issue_date3+'&max_marks='+max_marks+'&passing_marks='+passing_marks;
     
    $.ajax({
        url:"assigmentcreation.php",
        type:"POST",
        data:assign_id,
        success:function(dat){
           
            alert(dat);
              
             
        }
       });
     
    });
 
 
</script>
 
<?php
$user_no=$_SESSION['user_id'];
{           require 'db_connect.php';
$res=mysql_query("select * from mst_assignment,mst_subject WHERE faculty_id=$user_no and mst_assignment.subject_id=mst_subject.subject_id");   
    echo "<center><table  class='tabledesign'>
    <tr style='width:500px'>
    <th>Subject&nbsp;Name</th>
    <th>Ass.&nbsp;Id </th>
    <th>Ass.&nbsp;Topic</th>
    <th>Submission&nbsp;Date</th>
    <th>Issue&nbsp;Date</th>
     
    <th>CREATE</th> 
     
    <th>DISPATCH</th>
    </tr>";
     
 
 
 
 
 
 
    while($row=mysql_fetch_array($res))
    {
     
    echo "<tr>";
    echo "<td class='subject_name3'>" . $row['subject_name'] . "</td>";
    echo "<td class='assignment_id3'>" . $row['assignment_id'] . "</td>";
    //;
     
    //echo $assignment_id;
    //echo $assignment_idp;
    echo "<td  class='assignment_topic3'>" . $row['assignment_topic'] . "</td>";
    echo "<td  class='submission_date3'>" . $row['submission_date'] . "</td>";
    echo "<td  class='issue_date3'>" . $row['issue_date'] . "</td>";
    echo"<td style='display:none'  class='assignment_type3'>" . $row['assignment_type'] . "</td>";
      echo"<td style='display:none'  class='max_marks'>" . $row['max_marks'] . "</td>";
        echo"<td style='display:none'  class='passing_marks'>" . $row['passing_marks'] . "</td>";
//$_SESSION['myValue']=$assignment_idp; // You can set the value however you like.
 
//echo "<td class='create'><a class='info_edit' style='cursor:pointer'>CREATE</a>
//</td>";
//header( "refresh:3;url=assigmentcreation.php" );
echo "<td><a class='infocreate' href='assigmentcreation.php'>CREATE</a>
   </td>";
   
   echo "<td class='dispatch'><a class='info_edit2' style='cursor:pointer'>DISPATCH</a>
   </td>";
  
    echo "</tr>";
 
}
    echo "</table></center>";
     
  
    }
     
    //echo $ff;
     
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";echo "<br>";echo "<br>";echo "<br>";echo "<br>";
echo "<br>";
    echo "<br>";
    echo "<br>";
      
 
      
?>
