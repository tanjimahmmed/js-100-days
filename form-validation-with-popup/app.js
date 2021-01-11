$('#submit').click(function (e) {
    e.preventDefault();
    // selectors input
    var name = $('#name').val();
    var web = $('#url').val();
    var subject = $('#subject').val();
   
    // validation check
    if(name == '' || web == '' || subject == ''){
        swal({
            title: "Fields Empty!",
            text: "Please check the missing field!",
            icon: "warning",
            button: "ok",
        });
    }else {
        swal({
            title: "Good job!",
            icon: "success",
            button: "ok",
        });
    }

});