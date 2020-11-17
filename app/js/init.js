$(function(){
    $('#example').DataTable({
        "ajax": 'https://ecarpio.github.io/goliath/app/js/sampletable.txt',
        "columns": [
            { "data": "name" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "date-addded" },
            { "data": "prequal" }
        ]
    });
})