$(document).ready(function () {
    function getLeaders() {
        $.get(GAMIFICATION_URL + "/leaders")
            .then(function (data) {
                var leadersUI =
                    "{{#.}}<div>" +
                    "<div>{{userId}}</div>" +
                    "<div>{{totalScore}}</div>" +
                    "</div>{{/.}}";
                $("#leader-board").html(Mustache.to_html(leadersUI, data));
            })
        
    }
    getLeaders();
});