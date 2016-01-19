var FormValidation = function () {
    /* for more info visit the official plugin documentation: http://docs.jquery.com/Plugins/Validation */
    
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    
    /* __________________________________________________ Begin Business Validation __________________________________________________ */
    var BusinessValidation = function() {
            /* ____________________________________________ Begin Business Nature ____________________________________________ */
            $('#form-business-nature').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[BusinessNatureName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'business_nature/checkBusinessNature',
                            type: 'POST'
                        }
                    }
                },
                messages:{
                    'data[BusinessNatureName]':{
                        remote: 'This name already exists'
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
            /* _____________________________________________ End Business Nature _____________________________________________ */
            /* ___________________________________ Begin Business Nature Template Schedule ___________________________________ */
            $('#form-business-nature-template-schedule').validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[TFOTemplateID][]': {
                        required: true,
                    }
                },
                messages: { // custom messages for checkboxes
                    'data[TFOTemplateID][]': {
                        required: "Please select  at least 1 Template"
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.checkbox-list').size() > 0) { 
                        error.appendTo(element.parents('.checkbox-list').attr("data-error-container"));
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
            /* ____________________________________ End Business Nature Template Schedule ____________________________________ */
            /* __________________________________________ Begin Business TFO Template _________________________________________ */
            $('#form-business-tfo-template').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[TFOTemplateName]': {
                        required: true,
                        remote: {
                            url: $ifoureSite+'business_tfo_template/checkTFOTemplate',
                            type: 'POST'
                        }
                    },
                    'data[TFOTemplateDescription]': {
                        required: true
                    }
                },
                messages:{
                    'data[TFOTemplateName]':{
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
            /* ___________________________________________ End Business TFO Template __________________________________________ */
            /* __________________________________________ Begin Business TFO Schedule _________________________________________ */
            $('#form-business-tfo-schedule').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                messages: {
                    select_multi: {
                        maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                        minlength: jQuery.validator.format("At least {0} items must be selected")
                    }
                },
                rules: {
                    'data[TransactionType]': {
                        required: true
                    },
                    'data[TFOID]' : {
                        required: true
                    },
                    'data[Basis]' : {
                        required: true
                    },
                    'data[ModeOfComputation]' : {
                        required: true
                    },
                    'data[Amount]' : {
                        required: function(element){
                            return $('.input-mode-of-computation:checked').val()=='constant'
                        }
                    },
                    'data[FormulaType]' : {
                        required: function(element){
                            return $('.input-mode-of-computation:checked').val()=='formula'
                        }
                    },
                    'data[Formula]' : {
                        required: function(element){
                            return $('.input-mode-of-computation:checked').val()=='formula'
                        }
                    },
                    'data[NumberOfRange]' : {
                        required: function(element){
                            return $('.input-mode-of-computation:checked').val()=='range'
                        }
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
            /* ___________________________________________ End Business TFO Schedule __________________________________________ */
            /* __________________________________________ Begin Business Requirement __________________________________________ */
            $('#form-business-requirement').validate({
                onfocusout: false,
                onkeyup: false,
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",  // validate all fields including form hidden input
                rules: {
                    'data[TransactionType]': {
                        required: true,
                    },
                    'data[RequirementID][]': {
                        required: true,
                    }
                },
                messages: { // custom messages for checkboxes
                    'data[RequirementID][]': {
                        required: "Please select  at least 1 Requirement"
                    }
                },
                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.parents('.checkbox-list').size() > 0) { 
                        error.appendTo(element.parents('.checkbox-list').attr("data-error-container"));
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
            /* ___________________________________________ End Business Requirement ___________________________________________ */
    }
    /* ____________________________________________________ End Business Validation ____________________________________________________ */
    
    /* _________________________________________________ Begin Global Data Validation __________________________________________________ */
    var GlobalDataValidation = function() {
        /* __________________________________________ Begin Business Requirement __________________________________________ */
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
            /* _____________________________________________ Begin User Validation ____________________________________________ */
            /*Begin Initial Validation*/
            $('#form-user').validate({
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
                    'data[Username]' :{
                        required: true
                    },
                    'data[Password]' :{
                        required: function(element){
                            if($('#input-password').attr('data-is-required')=='1'){return true}else{return false}
                        },
                        minlength: function(element){
                            if($('#input-password').attr('data-is-required')=='1'){return 4} else {return 0}
                        }
                    },
                    ConfirmPassword :{
                        equalTo: '#input-password'
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
                    'data[Username]':{
                        required: 'Username is required',
                        remote: 'Username already exists!'
                    },
                    'data[Password]':{
                        required: 'Password is required'
                    },
                    ConfirmPassword:{
                        equalTo: 'Password do not match'
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
            if($("#input-username").attr("data-is-unique")=="1"){
                $("#input-username").rules("add",{
                    remote: {
                            url: $ifoureSite+'user/checkUsername',
                            type: 'POST'
                        }
                });
            }
            /*remote: {
                            url: $ifoureSite+'user/checkUsername',
                            type: 'POST'
                        }*/
            /*End Initial Validation*/
           
            /* ______________________________________________ End User Validation _____________________________________________ */
    }
    /* ____________________________________________________ End Global Data Validation ____________________________________________________ */
    
    return {
        //main function to initiate the module
        init: function () {
            BusinessValidation();
            GlobalDataValidation();
        }
    };
}();