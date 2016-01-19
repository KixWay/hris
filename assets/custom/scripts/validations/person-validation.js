var PersonValidation = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    var handleValidation = function(){
        $('#form-person').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[FirstName]': {
                        required: true
                    },
                    'data[MiddleName]' :{
                        required: true
                    },
                    'data[LastName]' :{
                        required: true
                    },
                    'data[Birthday]' :{
                        required: true
                    },
                    'data[BarangayID]' :{
                        required: true,
                    }
                    
                },
                messages:{
                    'data[FirstName]':{
                        required: 'FirstName is required'
                    },
                    'data[MiddleName]':{
                        required: 'MiddleName is required'
                    },
                    'data[LastName]':{
                        required: 'LastName is required'
                    },
                    'data[Birthday]':{
                        required: 'Date of Birth is required'
                    },
                    'data[BarangayID]':{
                        required: 'Address is required'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    error.appendTo(element.attr("data-error-container"));
                },
                invalidHandler: function (event, validator) { //display error alert on form submit              
                    $('.alert-success', $(this)).hide();
                    $('.alert-danger', $(this)).show();
//                    Metronic.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .closest('.form-group').removeClass('has-error'); // set success class to the control group
                },

                submitHandler: function (form) {
                    $('.alert-success', $(this)).show();
                    $('.alert-danger', $(this)).hide();
                    form.submit();
                }
            });
    }
    return{
        init: function(){
            handleValidation();
        }
    }
}();