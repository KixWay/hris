var AdminFunctions = function (){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    /* ___________________________________________ BEGIN HANDLING USER MENU ___________________________________________ */
    var handleUserMenu = function()
    {
        /* BEGIN SHOW & HIDE PERMALINK : Adding and Editing Menu*/
        /*Define variable*/
        var $permalink = $("input.input-menu-permalink").val();
        /*Hide permalink by default when it has no value*/
        if($permalink)
        {
            $("#menu-permalink").show();
        }
        else
        {
            $("#menu-permalink").hide();
        }
        /*Menu Type onchange*/
        $("input.select-menu-type").change(function(){
            var $type = $(this).val();
            if($type){
                if($type=='page' || $type=='internal link' || $type=='external link'){
                    $("#menu-permalink").show();
                }
                else{
                    $("#menu-permalink").hide();
                }
            }
            else{
                $("#menu-permalink").hide();
            }
        });
        /*Menu Icon onload*/
        var $group = $("input.input-menu-icon-group:checked").val();
        if($group)
        {
            if($group.length>0)
            {
                var $menu_icon = $("#menu-icon-list").attr("data-menu-icon");
                $.ajax({
                    url:$ifoureSite+'assets/files/icons.json',
                    dataType:'json',
                    success:function($result){
                        var $icons = $result[$group];
                        var $html_content="";
                        $.each($icons,function($key,$value){
                           console.log($key);
                                $html_content += "<div class='row'><div class='col-md-12 bg-red font-grey-carrara'>"+$key+"</div></div>";
                                $html_content += "<div class='row'>";
                                $.each($value,function($i,$icon){
                                    var $checked = $menu_icon==$icon ? "checked" : "";
                                    $html_content += "<label class='fa-item col-md-4 col-sm-6 input-menu-icon'>";
                                    $html_content += "<div><input type='radio' name='data[MenuIcon]' value='"+$icon+"' "+$checked+" />&nbsp;";
                                    $html_content += "<span aria-hidden='true' class='"+$icon+" font-red fa-2x'></span>&nbsp;&nbsp;<span class='font-xs'>"+$icon+"</span></div>";
                                    $html_content += "</label>";
                                });
                                $html_content += "</div>";
                        });
                        $("#menu-icon-list").html($html_content);
                    }
                });
            }
        }
        /*Menu Icon Group onchange*/
        $("input.input-menu-icon-group").change(function(){
            var $group = $("input.input-menu-icon-group:checked").val();
            if($group.length>0)
            {
                $.ajax({
                    url:$ifoureSite+'assets/files/icons.json',
                    dataType:'json',
                    success:function($result){
                        var $icons = $result[$group];
                        var $html_content="";
                        $.each($icons,function($key,$value){
                           console.log($key);
                                $html_content += "<div class='row'><div class='col-md-12 bg-red font-grey-carrara'>"+$key+"</div></div>";
                                $html_content += "<div class='row'>";
                                $.each($value,function($i,$icon){
                                    $html_content += "<label class='fa-item col-md-4 col-sm-6 input-menu-icon'>";
                                    $html_content += "<div><input type='radio' name='data[MenuIcon]' value='"+$icon+"'/>&nbsp;";
                                    $html_content += "<span aria-hidden='true' class='"+$icon+" font-red fa-2x'></span>&nbsp;&nbsp;<span class='font-xs'>"+$icon+"</span></div>";
                                    $html_content += "</label>";
                                });
                                $html_content += "</div>";
                        });
                        $("#menu-icon-list").html($html_content);
                    }
                });
            }
        });
    }
    /* ____________________________________________ END HANDLING USER MENU ____________________________________________ */
    
    
    

    return{
        init: function(){
            handleUserMenu();
        }
    }
}();









/* END OF FILE function.js */