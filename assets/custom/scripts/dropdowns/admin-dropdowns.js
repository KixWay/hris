var AdminDropdowns = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    var handleDropdowns = function(){
        /* ______________________________________ BEGIN USER ROLE ______________________________________ */
        if($(".select-user-role").length>0){
            $.ajax({
                url:$ifoureSite+'userrole/getUserRole',
                dataType:'json',
                success:function($userrole){
                   $('.select-user-role').removeClass('select2-offscreen').select2({
                        data:$userrole,
                        placeholder:'Select Role',
                        allowClear:true
                    });
                }
            });
        }
        /* _______________________________________ END USER ROLE _______________________________________ */
        /* ______________________________________ BEGIN USER MENU ______________________________________ */
        /*Menu Type*/
        if($(".select-menu-type").length>0){
            var $menu_types = [{id:"page",text:"Page"},{id:"static",text:"Static"},{id:"internal link",text:"Internal Link"},{id:"external link",text:"External Link"}];
            $(".select-menu-type").select2({
                data: $menu_types,
                placeholder:"Select Menu Type",
                allowClear: true
            });
        }
        /* _______________________________________ END USER MENU _______________________________________ */
    }
    return{
        init: function(){
            handleDropdowns();
        }
    }
}();