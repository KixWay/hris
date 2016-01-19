var GlobalDropdowns = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    
    var handleDropdowns = function(){
        /* ________________________________________ BEGIN GENDER _________________________________________ */
        if($(".select-gender").length>0)
        {
            var $gender = [{id:'male',text:'Male'},{id:'female',text:'Female'}]
            $('.select-gender').select2({
                data: $gender,
                placeholder:'Select Gender',
                allowClear: true
            });
        }
        /* _________________________________________ END GENDER __________________________________________ */
        /* ____________________________________ BEGIN MARITAL STATUS _____________________________________ */
        if($(".select-marital-status").length>0)
        {
            var $marital_status = [{id:'single',text:'Single'},{id:'married',text:'Married'},{id:'widow',text:'Widow'},{id:'widower',text:'Widower'},{id:'separated',text:'Separated'},{id:'annulled',text:'Annuleed'},{id:'divorced',text:'Divorced'}]
            $('.select-marital-status').select2({
                data: $marital_status,
                placeholder:'Select Marital Status',
                allowClear: true
            });
        }
        /* _____________________________________ END MARITAL STATUS ______________________________________ */
        /* ______________________________________ BEGIN CITIZENSHIP ______________________________________ */
        if($(".select-citizenship").length>0)
        {
            $.ajax({
                url:$ifoureSite+'citizenship/getCitizenship',
                dataType:'json',
                success:function($citizenship){
                   $('.select-citizenship').removeClass('select2-offscreen').select2({
                        data:$citizenship,
                        placeholder:'Select Citizenship',
                        allowClear:true
                    });
                }
            });
        }
        /* _______________________________________ END CITIZENSHIP _______________________________________ */
        /* ________________________________________ BEGIN PERSON _________________________________________ */
        /*Dropdown Multiple Person*/
        if($(".select-person-multiple").length>0){
            $(".select-person-multiple").select2({
                placeholder: "",
                tags: true,
                multiple: true,
                allowClear: true,
                minimumInputLength: 1,
                ajax: {
                    url: $ifoureSite+"person/searchPerson",
                    dataType:"json",
                    data: function (term) {
                        return {
                            q: term, // search term
                        };
                    },
                    results: function(data){
                        return {results:data};
                    }
                },
                initSelection: function (element, callback) {
    //                callback({ id: 1, text: 'Text' });
                    var $id = $("input.select-person-multiple").attr('data-value');
                    console.log($id);
                    if($id)
                    {
                        $.ajax($ifoureSite+"tricycle/getTricycleOwner", {
                        method:'POST',
                        data: {id: $id},
                        dataType: "json"
                        }).done(function(data) {
                            callback(data);
                        });
                    }
                }
            });
        }
        /* _________________________________________ END PERSON __________________________________________ */
        /* ____________________________________ BEGIN OWNERSHIP TYPE _____________________________________ */
        if($(".select-ownership-type").length>0)
        {
            $.ajax({
               url: $ifoureSite+"ownership_type/getOwnershipType",
               dataType:'json',
               success: function($ownership){
                   $('.select-ownership-type').removeClass('select2-offscreen').select2({
                        data:$ownership,
                        placeholder:'Select',
                        allowClear:true
                    });
               }
            });
        }
        /* _____________________________________ END OWNERSHIP TYPE ______________________________________ */
        /* ____________________________________ BEGIN OCCUPANCY TYPE _____________________________________ */
        if($(".select-occupancy-type").length>0)
        {
            $.ajax({
               url: $ifoureSite+"occupancy_type/getOccupancyType",
               dataType:'json',
               success: function($occupancy){
                   $('.select-occupancy-type').removeClass('select2-offscreen').select2({
                        data:$occupancy,
                        placeholder:'Select',
                        allowClear:true
                    });
               }
            });
        }
        /* _____________________________________ END OCCUPANCY TYPE ______________________________________ */
        /* _________________________________________ BEGIN TFO ___________________________________________ */
        if($(".select-tfo").length>0)
        {
            $.ajax({
               url: $ifoureSite+"tfo/getTFO",
               dataType:'json',
               success: function($tfo){
                   $('.select-tfo').removeClass('select2-offscreen').select2({
                        data:$tfo,
                        placeholder:'Select',
                        allowClear:true
                    });
               }
            });
        }
        /* __________________________________________ END TFO ____________________________________________ */
        /* _______________________________________ BEGIN TFO TYPE ________________________________________ */
        if($(".select-tfo-type").length>0)
        {
            $.ajax({
               url: $ifoureSite+"tfo/getTFOType",
               dataType:'json',
               success: function($tfo_type){
                   $('.select-tfo-type').removeClass('select2-offscreen').select2({
                        data:$tfo_type,
                        placeholder:'Select',
                        allowClear:true
                    });
               }
            });
        }
        /* ________________________________________ END TFO TYPE _________________________________________ */
    }
    return{
        init: function(){
            handleDropdowns();
        }
    }
}();