/**
 * A function verifies the existence of a certain person in the database.
 * @package PeronFunctions
 * @author RedCrisostomo
 * @type person-functions_L4.person-functionsAnonym$0|Function
 */
var PersonFunctions = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    /* _____________________________________________ BEGIN HANDLING PERSON ____________________________________________ */
    var handlePerson = function ()
    {
        
        function checkPerson(){
            $('#person-list').remove();
            var $firstname = $('input.input-firstname').val();
            var $middlename = $('input.input-middlename').val();
            var $lastname = $('input.input-lastname').val();
            var $extensionname = $('input.input-extensionname').val();
            var $birthday = $('input.input-birthday').val();
            var $url = $('input.input-firstname').attr('data-url');
            if($firstname.length==0 || $middlename.length==0 || $lastname.length==0){return false;}
            $.ajax({
               url: $ifoureSite+'person/checkPerson',
               method: 'POST',
               data:{firstname:$firstname,middlename:$middlename,lastname:$lastname,extensionname:$extensionname,birthday:$birthday},
               dataType:'json',
               success: function($result){
                    if($result){
                        var $html_content = '';
                        $html_content += "<div class='modal fade bs-modal-lg' id='person-list' tabindex='-1' role='dialog' aria-hidden='true'>";
                        $html_content +="<div class='modal-dialog modal-lg'>";
                        $html_content +="<div class='modal-content'>";
                        $html_content +="<div class='modal-header'>";
                        $html_content +="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'></button>";
                        $html_content +="<h4 class='modal-title bold text-info'>A person with the same name already exists in the database. Click attach if that is the same person, click close if not.</h4>";
                        $html_content +="</div>";
                        $html_content +="<div class='modal-body'>";

    //                        $html_content += "<div class='col-md-12 bg-grey-steel' id='person-result'><h5>There are records with the same name: Click attach if that is the same person click close if not.</h5> <button class='btn btn-default btn-xs pull-right btn-exit' formnovalidate data-target='#person-result'>Close <i class='fa fa-close'></i></button>";
    //                        
                            $html_content += "<table class='table table-responsive table-striped font-sm' id='table1'>";
                            $html_content += "<thead>";
                            $html_content += "<tr>";
                            $html_content += "<th>Item</th>";
                            $html_content += "<th>Name</th>";
                            $html_content += "<th>Birthday</th>";
                            $html_content += "<th>Gender</th>";
                            $html_content += "<th>MaritalStatus</th>";
                            $html_content += "<th>Address</th>";
                            $html_content += "<th>Attach</th>";
                            $html_content += "</tr>";
                            $html_content += "<tbody>";
                            var $i=1;
                        $.each($result,function($key,$data){
                            $html_content += "<tr>";
                            $html_content += "<td>"+$i+"</td>";
                            $html_content += "<td>"+$data['FirstName']+" "+$data['MiddleName']+" "+$data['LastName']+" "+$data['ExtensionName']+"</td>";
                            $html_content += "<td>"+$data['Birthday']+"</td>";
                            $html_content += "<td>"+$data['Gender']+"</td>";
                            $html_content += "<td>"+$data['MaritalStatus']+"</td>";
                            $html_content += "<td>"+$data['BarangayName']+", "+$data['CityMunicipalityName']+", "+$data['ProvinceName']+"</td>";
                            $html_content += "<td><a href='"+$url+"person_id/"+$data['PersonID']+"' class='btn btn-xs btn-default'>Attach</a></td>";
                            $html_content += "</tr>";
                            $i++;
                        });
                            $html_content += "</tbody>";
                            $html_content += "</table>";
                            $html_content +="</div>";
                            $html_content +="<div class='modal-footer'>";
                            $html_content +="<button type='button' class='btn default' data-dismiss='modal'>Close</button>";
                            $html_content +="</div>";
                            $html_content +="</div>";
                            $html_content +="</div>";
                            $html_content +="</div>";
                            $('.input-firstname').parents('.form-group').append($html_content);
                                $('#person-list').modal('show');
                    }
               },
               error: function($error){
                   console.log($error);
               }
            });
        }
        
        /*Begin On Blur Process*/
        $(".input-firstname").blur(function(){
            checkPerson();
        });
        $(".input-middlename").blur(function(){
            checkPerson();
        });
        $(".input-lastname").blur(function(){
            checkPerson();
        });
        /*End On Blur Process*/
    }
    /* ______________________________________________ END HANDLING PERSON _____________________________________________ */
    return {
        init: function(){
            handlePerson();
        }
    }
}();