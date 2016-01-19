var LocationDropdowns = function(){
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';

    var handleDropdowns = function(){
        $('document').ready(function(){
        /* ___________________________________________ BEGIN PROVINCE DROP DOWN LIST ___________________________________________ */
            if($(".select-province").length>0){
                $.ajax({
                    url:$ifoureSite+'location/getProvince',
                    dataType:'json',
                    success:function($provinces){
                       $('.select-province').removeClass('select2-offscreen').select2({
                            data:$provinces,
                            placeholder:'Select',
                            allowClear:true
                        });
                    }
                });
            }
        });
        /* ____________________________________________ END PROVINCE DROP DOWN LIST ____________________________________________ */
        
        /* ______________________________________ BEGIN CITY MUNICIPALITY DROP DOWN LIST _______________________________________ */
        $('document').ready(function(){
        /* If province is already selected: for edit action*/
            if($(".select-citymunicipality").length>0){
                $('.select-citymunicipality').select2({data:"",placeholder:'Select province first'});
                var $province_id = $('input.select-province').val();
                if($province_id)
                {
                    $.ajax({
                        url:$ifoureSite+'location/getCityMunicipality',
                        method: 'POST',
                        data:{p:$province_id},
                        dataType:'json',
                        success:function($result){
                            $('.select-citymunicipality').removeClass('select2-offscreen').select2({
                                data:$result,
                                placeholder:'Select',
                                allowClear:true
                            });
                            console.log($result);
                        }
                    });
                }
            }
        });
        /*on province change*/
        $('.select-province').change(function(){
            var $province_id = $(this).val();
            if($province_id.length>0)
            {
                $.ajax({
                    url:$ifoureSite+'location/getCityMunicipality',
                    method: 'POST',
                    data:{p:$province_id},
                    dataType:'json',
                    success:function($result){
                        $('.select-citymunicipality').removeClass('select2-offscreen').select2({
                            data:$result,
                            placeholder:'Select',
                            allowClear:true
                        });
                        console.log($result);
                    }
                });
            }
            else
            {
                $('.select-citymunicipality').select2({data:"",placeholder:'Select province first'});
            }
        });
        /* _______________________________________ END CITY MUNICIPALITY DROP DOWN LIST ________________________________________ */
        /* ___________________________________ BEGIN CITY MUNICIPALITY TYPE DROP DOWN LIST _____________________________________ */
        if($(".select-citymunicipality-type").length>0){
            var $city_municipality_types = [{id:'mun',text:'Municipality'},{id:'cc',text:'Component City'},{id:'icc',text:'Independent Component City'},{id:'huc',text:'Highly Urbanized City'}]
            $('.select-citymunicipality-type').select2({
                data: $city_municipality_types,
                placeholder:'Select',
                allowClear: true
            });
        }
        /* ____________________________________ END CITY MUNICIPALITY TYPE DROP DOWN LIST ______________________________________ */
        /* ___________________________________________ BEGIN BARANGAY DROP DOWN LIST ___________________________________________ */
        /* If city/municipality is already selected: for edit action*/
        $(document).ready(function(){
            if($(".select-barangay").length>0){
                $('.select-barangay').select2({data:"",placeholder:'Select city/municipality first'});
                /*Barangay*/
                var $citymunicipality_id = $('input.select-citymunicipality').val();
                console.log($citymunicipality_id);
                if($citymunicipality_id)
                {
                    $.ajax({
                        url:$ifoureSite+'location/getBarangay',
                        method: 'POST',
                        data:{p:$citymunicipality_id},
                        dataType:'json',
                        success:function($result){
                            $('.select-barangay').removeClass('select2-offscreen').select2({
                                data:$result,
                                placeholder:'Select',
                                allowClear:true
                            });
                            console.log($result);
                        }
                    });
                }
            }
        });
        /* on city municipality change */
        $('.select-citymunicipality').change(function(){
            var $citymunicipality_id = $(this).val();
            if($citymunicipality_id.length>0)
            {
                $.ajax({
                    url:$ifoureSite+'location/getBarangay',
                    method: 'POST',
                    data:{p:$citymunicipality_id},
                    dataType:'json',
                    success:function($result){
                        $('.select-barangay').removeClass('select2-offscreen').select2({
                            data:$result,
                            placeholder:'Select',
                            allowClear:true
                        });
                        console.log($result);
                    }
                });
            }
            else
            {
                $('.select-barangay').select2({data:"",placeholder:'Select city/municipality first'});
            }
        });
        /* ___________________________________________ END BARANGAY DROP DOWN LIST ___________________________________________ */
    }
    return {
        //main function to initiate the module
        init: function () {
            handleDropdowns();
        }
    };
}();