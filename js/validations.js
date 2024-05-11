function addDocumentFieldValidation(fieldName) {
    $("#" + fieldName).restrict({regex_match: /[0-9,a-z,A-Z,\-]/, regex_replace: /[^0-9,a-z,A-Z,\-]/g});
    $("#" + fieldName).on('keydown', function (e) {
        var count = ($(this).val().match(/-/g) || []).length;
        if (e.key == ',') {
            e.preventDefault();
        }
        if (count > 0 && e.key == '-') {
            e.preventDefault();
        }
    });
}