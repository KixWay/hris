var LoginValidation = function ()
{
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    /* ______________________________________________________ Begin Login Validation ___________________________________________________ */
    var handleValidation = function() {
        $('.login-form').validate({
            onfocusout: false,
            onkeyup: false,
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                'data[User]': {
                    required: true,
                },
                'data[Password]': {
                    required: true,
                    remote: {
                            url: $ifoureSite+'main/login',
                            type: 'POST',
                            data: {
                                'data[User]': function(){
                                    return $('#input-user').val();
                                }
                            }
                        }
                }
//                remember: {
//                    required: false
//                }
            },

            messages: {
                'data[User]': {
                    required: "Username is required."
                },
                'data[Password]': {
                    required: "Password is required.",
                    remote: "Invalid username and/or password."
                },

            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                $('.alert-danger', $(this)).show();
                $('.alert-success', $(this)).hide();
            },

            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function(error, element) {
//                if (element.parent(".input-icon").size() > 0) {
//                    error.appendTo(element.parents('.input-icon').attr("data-error-container"));
//                }
                error.insertAfter(element);
            },

            submitHandler: function(form) {
                $('.alert-success', $(this)).show();
                $('.alert-danger', $(this)).hide();
                form.submit(); // form validation success, call ajax form submit
            }
        });
        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }

        });
    }
    /* _______________________________________________________ End Login Validation ____________________________________________________ */
    return {
        //main function to initiate the module
        init: function () {
            handleValidation();
        }
    };
}();