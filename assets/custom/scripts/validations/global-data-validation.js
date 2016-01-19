var GlobalDataValidation = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    var handleValidation = function(){
        /* ________________________________________________ Begin TFO Type ________________________________________________ */
            $('#form-tfo-type').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[TFOTypeName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'tfo/checkTFOType',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[TFOTypeName]':{
                        remote: 'This name already exists!'
                    }  
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    error.insertAfter(element); // just perform default behavior
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
            /* _________________________________________________ End TFO Type _________________________________________________ */
            /* __________________________________________________ Begin TFO  __________________________________________________ */
            $('#form-tfo').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[TFOTypeID]': {
                        required: true
                    },
                    'data[TFOName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'tfo/checkTFO',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[TFOName]':{
                        remote: 'This name already exists!'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    error.insertAfter(element); // just perform default behavior
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
            /* ___________________________________________________ End TFO  ___________________________________________________ */
            /* ______________________________________________ Begin Requirement _______________________________________________ */
            $('#form-requirement').validate({
                onfocusout:false,
                onkeyup:false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[RequirementName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'requirement/checkRequirement',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[RequirementName]':{
                        remote: 'This name already exists!'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
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
            /* ________________________________________________ End Requirement ________________________________________________ */
            /* _______________________________________________ Begin Citizenship _______________________________________________ */
            $('#form-citizenship').validate({
                onfocusout:false,
                onkeyup:false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[CitizenshipName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'citizenship/checkCitizenship',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[CitizenshipName]':{
                        remote: 'This name already exists!'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
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
            /* ________________________________________________ End Citizenship ________________________________________________ */
            /* _____________________________________________ Begin Ownership Type ______________________________________________ */
            $('#form-ownership-type').validate({
                onfocusout:false,
                onkeyup:false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[OwnershipTypeName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'ownership_type/checkOwnershipType',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[OwnershipTypeName]':{
                        remote: 'This name already exists!'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
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
            /* ______________________________________________ End Ownership Type _______________________________________________ */
            /* _____________________________________________ Begin Occupancy Type ______________________________________________ */
            $('#form-occupancy-type').validate({
                onfocusout:false,
                onkeyup:false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[OccupancyTypeName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'occupancy_type/checkOccupancyType',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[OccupancyTypeName]':{
                        remote: 'This name already exists!'
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.radio-list').size() > 0) { 
                        error.appendTo(element.parents('.radio-list').attr("data-error-container"));
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
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
            /* ______________________________________________ End Occupancy Type _______________________________________________ */
            /* _________________________________________________ Begin Province ________________________________________________ */
            $('#form-province').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[ProvinceName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'location/checkProvince',
                            type: 'POST'
                        }
                    }
                },
                messages: {
                    'data[ProvinceName]' :{
                        remote: "Province name already exists!"
                    }
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    error.insertAfter(element); // just perform default behavior
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
            /* _________________________________________________ End Province _________________________________________________ */
            /* ____________________________________________ Begin City Municipality ___________________________________________ */            
            $('#form-citymunicipality').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[ProvinceID]' : {
                        required: true
                    },
                    'data[CityMunicipalityName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'location/checkCityMunicipality',
                            type: 'POST',
                            data: {
                                'data[ProvinceID]': function(){
                                    return $('#input-province').val();
                                }
                            }
                        }
                    },
                    'data[CityMunicipalityType]' : {
                        required: true
                    }
                },
                messages: {
                    'data[CityMunicipalityName]' : {
                        remote: "City/Municipality name already exists!"
                    }
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    error.insertAfter(element); // just perform default behavior
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
            /* _____________________________________________ End City Municipality ____________________________________________ */
            /* _________________________________________________ Begin Barangay _______________________________________________ */          
            $('#form-barangay').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: true, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[CityMunicipalityID]' :{
                        required: true
                    },
                    'data[BarangayName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'location/checkBarangay',
                            type: 'POST',
                            data: {
                                'data[CityMunicipalityID]': function(){
                                    return $('#input-citymunicipality').val();
                                }
                            }
                        }
                    }
                },
                messages: {
                    'data[BarangayName]' :{
                        remote: "Barangay name already exists!"
                    }
                },
                errorPlacement: function (error, element) { // render error placement for input type
                    if(element)
                    error.insertAfter(element); // just perform default behavior
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
            /* __________________________________________________ End Barangay ________________________________________________ */
    }
    return{
        init:function(){
            handleValidation();
        }
    }
}();