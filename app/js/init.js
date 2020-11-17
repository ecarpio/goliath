$(function(){
    $('#example').DataTable({
        "ajax": '/js/sampletable.txt',
        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "date-addded" },
            { "data": "prequal" }
        ]
    });
})