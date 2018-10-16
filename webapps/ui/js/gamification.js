$(document).ready(function () {
    function getLeaders() {
        $.get("/leaders")
            .then(function (data) {
                var leadersUI =
                    "{{#.}}<div>" +
                    "<div>{{userId}}</div>" +
                    "<div>{{totalScore}}</div>" +
                    "</div>{{/.}}";
                $("#leader-board").html(leadersUI);
            })
        
    }
    getLeaders();
});