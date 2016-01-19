var Login = function() {
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    if($ifoure_hostname=='localhost')
    {
        $ifoure_hostname += '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    var handleLogin = function() {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                'data[User]': {
                    required: true,
                },
                'data[Password]': {
                    required: true,
                    
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
                },
                
            },

            invalidHandler: function(event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
                $('.alert-success', $('.login-form')).hide();
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
                $('.alert-success', $('.login-form')).show();
                $('.alert-danger', $('.login-form')).hide();
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

    

    return {
        //main function to initiate the module
        init: function() {

            handleLogin();
        }

    };

}();