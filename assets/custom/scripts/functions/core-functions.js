var CoreFunctions = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    
    /* _________________________________ BEGIN DISABLE FORM SUBMISSION ON HITTING ENTER KEY _________________________________ */
    var disableKeyPressSubmit = function()
    {
        $(document).on("keypress", ":input:not(textarea)", function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        });
    }
    /* __________________________________ END DISABLE FORM SUBMISSION ON HITTING ENTER KEY _________________________________ */
    /* ___________________________________________ BEGIN TOASTER NOTIFICATION ____________________________________________ */
    var handleToastrNotification = function() {
        $(document).ready(function() {
            var $type = $('#toastr-notification').attr('data-notification-type');
            var $heading = $('#toastr-notification').attr('data-notification-heading');
            var $content = $('#toastr-notification').attr('data-notification-content');
            if($type && $heading && $content) 
            {   
                Command: toastr[$type]($content, $heading)

                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-top-full-width",
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                  }
            }
        });
    }
    /* ___________________________________________ END TOASTER NOTIFICATION ___________________________________________ */
    /* ___________________________________ BEGIN SETTING SWITCH ACTIVE OR NOT ACTIVE __________________________________ */
    var handleSetActive = function(){
        $('.input-set-active').on('switchChange.bootstrapSwitch', function(event, state) {
            var $id = $(this).attr('data-record-id');
            var $dbtable = $(this).attr('data-db-table');
            var $keyfield = $(this).attr('data-key-field');
            var $value;
            if(state===true){$value =1 }else {$value = 0}

            $.ajax({
                url:$ifoureSite+'main/setActive',
                method: 'POST',
                data:{id:$id, dbtable:$dbtable,keyfield:$keyfield,value:$value},
                success:function($result){
                }
            });
        //  console.log($object); // true | false
        //  console.log($data); // true | false
        //  console.log($id); // true | false
        //  console.log($dbtable); // true | false
        //  console.log($dbfield); // true | false
        //  console.log($value); // true | false
        //  console.log(this); // DOM element
        //  console.log(event); // jQuery event
        //  console.log(state); // true | false
        });
    }
    /* ____________________________________ END SETTING SWITCH ACTIVE OR NOT ACTIVE ___________________________________ */
    /* __________________________________ BEGIN SETTING SWITCH DEFAULT OR NOT DEFAULT _________________________________ */
    var handleSetDefault = function(){
        $('.input-set-default').on('switchChange.bootstrapSwitch', function(event, state) {
            var $id = $(this).attr('data-record-id');
            var $dbtable = $(this).attr('data-db-table');
            var $keyfield = $(this).attr('data-key-field');
            var $value;
            if(state===true){$value =1 }else {$value = 0}

            $.ajax({
                url:$ifoureSite+'main/setDefault',
                method: 'POST',
                data:{id:$id, dbtable:$dbtable,keyfield:$keyfield,value:$value},
                success:function($result){
                }
            });
        });
    }
    /* ___________________________________ END SETTING SWITCH DEFAULT OR NOT DEFAULT __________________________________ */
    /* _____________________________________________ BEGIN DELETING ITEM ______________________________________________ */
    var handleSetDelete = function(){
        $('.btn-set-delete').on('click', function() {
            var $id = $(this).attr('data-record-id');
            var $dbtable = $(this).attr('data-db-table');
            var $keyfield = $(this).attr('data-key-field');
            var $value;
            var $confirm = confirm("Are you sure you want to delete this record?");
            if ($confirm == true) {
                $.ajax({
                    url:$ifoureSite+'main/setDelete',
                    method: 'POST',
                    data:{id:$id, dbtable:$dbtable,keyfield:$keyfield},
                    success:function($result){
                    }
                });
            }
        });
    }
    /* ______________________________________________ END DELETING ITEM _______________________________________________ */
    return{
        init: function(){
            disableKeyPressSubmit();
            handleToastrNotification();
            handleSetActive();
            handleSetDefault();
            handleSetDelete();
        }
    }
}();