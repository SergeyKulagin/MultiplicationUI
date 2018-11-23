$(document).on("authenticated", function () {
    
    function getLeaders() {
        $.get(GAMIFICATION_URL + "/leaders")
            .then(function (data) {
                var leadersUI =
                    "{{#.}}<tr>" +
                    "<td>{{userId}}</td>" +
                    "<td>{{totalScore}}</td>" +
                    "</tr>{{/.}}";
                $("#leader-board-head").append(Mustache.to_html(leadersUI, data));
            })
        
    }
    getLeaders();
});