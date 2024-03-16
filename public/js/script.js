$(document).ready(function () {
    $(document).on("click", ".editBtn", function () {
        let id = $(this).data("id");
        let base_url = "http://localhost:3000";
        $.ajax({
            method: "post",
            datatype: "json",
            data: { id: id },
            url: base_url + "/edit",
            success: function (response) {
                let data = response[0];
                $(".id").val(data.id);
                $(".events").val(data.events);
                $(".status").val(data.status);
            },
            error: function (response) {
                console.log(response);
            },
        });
    });
});