$(document).ready(function () {
    let currentSlide = 0;
    const totalSlides = $(".start_hero").length;

    function moveSlide(nextSlide, direction) {
        let currentEl = $(`.start_hero[data-slide="${currentSlide}"]`);
        let nextEl = $(`.start_hero[data-slide="${nextSlide}"]`);

        let outX = direction === "next" ? "-100%" : "100%";
        let inX = direction === "next" ? "100%" : "-100%";

        // Aktif olanı dışarı at
        currentEl.animate({ left: outX, opacity: 0 }, 500, function() {
            $(this).hide().css({ left: 0, opacity: 1 });
        });

        // Yeni olanı zıt yönden getir
        nextEl.css({ display: "block", left: inX, opacity: 0 })
              .animate({ left: "0%", opacity: 1 }, 500);

        currentSlide = nextSlide;
    }

    $(document).on("click", ".next", function () {
        if (currentSlide < totalSlides - 1) moveSlide(currentSlide + 1, "next");
    });

    $(document).on("click", ".prev", function () {
        if (currentSlide > 0) moveSlide(currentSlide - 1, "prev");
    });
});
