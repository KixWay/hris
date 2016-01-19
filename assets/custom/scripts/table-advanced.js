var TableAdvanced = function () {
    var $ifoure_protocol = window.location.protocol;
    var $ifoure_hostname = window.location.hostname;
    var $ifoure_port = window.location.port;
    if($ifoure_hostname.replace(':'+$ifoure_port,'')=='localhost')
    {
        $ifoure_hostname += ($ifoure_port.length>0 ? ':'+$ifoure_port : '') + '/iapps4egov';
    }
    var $ifoureSite = $ifoure_protocol + '//' + $ifoure_hostname + '/';
    var initTable1 = function () {
        
        var table = $('#table1');
        
        var itemsPerPage = 10;
        $.ajax({
            url: $ifoureSite+'main/getSettingsGeneral',
            dataType:'json',
            async:false,
            success:function($result){
                if($result){
                    itemsPerPage = $result['ItemsPerPage'];
                }
            }
        });
        /* Fixed header extension: http://datatables.net/extensions/keytable/ */

        var oTable = table.dataTable({
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "No data available in table",
                "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                "infoEmpty": "No entries found",
                "infoFiltered": "(filtered1 from _MAX_ total entries)",
                "lengthMenu": "Show _MENU_ entries",
                "search": "Search:",
                "zeroRecords": "No matching records found"
            },
            "order": [
                [0, 'asc']
            ],
            "lengthMenu": [
                [10, 20, 30, 40, 50, -1],
                [10, 20, 30, 40, 50, "All"] // change per page values here
            ],
            "pageLength": itemsPerPage, // set the initial value,
            "columnDefs": [{  // set default column settings
                'orderable': true,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [0, "asc"]
            ]           
        });

        var oTableColReorder = new $.fn.dataTable.ColReorder( oTable );

        var tableWrapper = $('#table1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

//            console.log('me 1');

            initTable1();

//            console.log('me 2');
        }

    };

}();