$(document).ready(function () {
    //authorization with keycloak
    var urlParam = new URLSearchParams(window.location.search);
    var auth = urlParam.get("auth");
    if (auth) { // enabled
        window._keycloak = Keycloak('keycloak/keycloak.json');
        window._keycloak.init(
            {
                onLoad: 'login-required'
            }
        ).success(function (success) {
            if (success) {
                console.log("success")
                $(document).trigger("authenticated");

            } else {
                window.location.reload();
            }

        }).error(function (data) {
            window.location.reload();
        })

        // the authorization support should be enabled on the server, add header
        $.ajaxSetup(
            {
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + window._keycloak.token);
                }
            }
        );
    } else {
        // no authentication required
        $(document).trigger("authenticated");
    }

});