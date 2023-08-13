$(document).ready(function () {
    $(".categoria").click(function () {
        var target = $(this).data("target");
        $(".card").hide(); // Oculta todos los artículos
        if (target === "ver-todo") {
            $(".card").show(); // Muestra todos los artículos
        } else {
            $("." + target).show(); // Muestra el artículo correspondiente a la categoría
        }
    });
});