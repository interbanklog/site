(function ($) {
    $.fn.restrict = function (options) {
        var defaults = {
            regex_match: /[.]/,
            regex_replace: /[^.]/g,
            regex_replace_dot: /\.+$/
        };
        options = $.extend(defaults, options);

        $(this).on('keypress', function (event) {
            if (event.which && event.which !== 13 && event.which !== 8 && event.which !== 0) {
                var key = String.fromCharCode(event.which);
                if (!key.match(options.regex_match)) {
                    event.preventDefault();
                }
            }
        }).on('keyup', function () {
            if ($(this).val() !== '' && $(this).val().match(options.regex_replace)) {
                $(this).val($(this).val().replace(options.regex_replace, ''));
            }
        }).on('drop', function () { // Esta opción aplica el cambio al texto seleccionado y dropeado con el mouse
            setTimeout($.proxy(function () {
                if ($(this).val() !== '' && $(this).val().match(options.regex_replace)) {
                    $(this).val($(this).val().replace(options.regex_replace, ''));
                }
            }, this), 0);
        }).on('paste', function () {
            setTimeout($.proxy(function () {
                if ($(this).val() !== '' && $(this).val().match(options.regex_replace)) {
                    $(this).val($(this).val().replace(options.regex_replace, ''));
                }
            }, this), 0);
        }).on('input', function() {
            if ($(this).val().split('.').length > 2) {
                $(this).val($(this).val().replace(options.regex_replace_dot, ''));
            }
            if ($(this).val().match(options.regex_replace)) {
                $(this).val($(this).val().replace(options.regex_replace, ''));
            }
        });
    };
})(jQuery);
