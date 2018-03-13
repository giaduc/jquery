var currentDate = new Date().toLocaleDateString('en-US');
$('#datepicker').datepicker({
    value: currentDate
});