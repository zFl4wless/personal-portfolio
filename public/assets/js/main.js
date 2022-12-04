// Page terminal loader
$(document).ready(function() {
    new Typed('.terminal__cmd', {
        strings: ["systemctl start personal-portfolio"],
        typeSpeed: 20,
        showCursor: false,
        onComplete: function () {
            setTimeout(function () {
                new Typed('.terminal__response--load', {
                    strings: ["Loading"],
                    typeSpeed: 30,
                    showCursor: false,
                    onComplete: function () {
                        $('.terminal__response--load').text("Loading");

                        new Typed('.terminal__response--dots', {
                            strings: ["..."],
                            typeSpeed: 150,
                            showCursor: false,
                            onComplete: function () {
                                $('.terminal__response--dots').text("");

                                new Typed('.terminal__response--dots', {
                                    strings: ["..."],
                                    typeSpeed: 150,
                                    showCursor: false,
                                    onComplete: function () {
                                        $('.terminal__response--dots').text("");

                                        new Typed('.terminal__response--dots', {
                                            strings: ["..."],
                                            typeSpeed: 150,
                                            showCursor: false,
                                            onComplete: function () {
                                                setTimeout(function () {
                                                    $('.terminal__response-result').text("Done!");
                                                }, 500);

                                                setTimeout(function () {
                                                    $('.loader').hide();
                                                }, 1500);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }, 100);
        }
    });
});

// Current year for copyright
$(document).ready(function () {
    $('.current-year').text(new Date().getFullYear());
});

// Scroll Down Animation
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.mouse__scroll-down').css('opacity', '0');
    } else {
        $('.mouse__scroll-down').css('opacity', '1');
    }
});

// Special Letter Fun Animation
$('.special-letter').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});


// Projects Search Bar Functionality
const projectsSearchInput = $('.projects__search input');

$('.projects__not-found').hide();
projectsSearchInput.keyup(function () {
    const searchInput = $(this).val().toLowerCase();
    let match = false;

    $('.projects__album-item').each(function () {
        if ($(this).find('.project__card-tags li').text().toLowerCase().includes(searchInput)
            || $(this).find('.project__card-content h2').text().toLowerCase().startsWith(searchInput)) {
            $(this).parent().show();
            match = true;
        } else {
            $(this).parent().hide();
            if (!match) {
                match = false;
            }
        }
    });

    if (!match) {
        $('.projects__not-found').show();
    } else {
        $('.projects__not-found').hide();
    }
});

$('.projects__search .icon__wrapper').click(function () {
    $('.projects__search').addClass('projects__search-focus');
    $('.projects__search input').focus();
});

projectsSearchInput.focusout(function () {
    $('.projects__search').removeClass('projects__search-focus');
});