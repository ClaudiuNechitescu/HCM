$.validator.addMethod("regex", function (value, element, regexpr) {
    if (value == null || value == '') { return true;}
    return (new RegExp(regexpr)).test(value);
}, "Please enter a valid value.");

$.validator.addMethod("sqlvalidator", function (value, element, validated) {
    if (validated == 0) {
        $.validator.messages.sqlvalidator = element.getAttributeNode("data-msg-sqlvalidator").value;
        return false;
    }
    return true;
});

$.validator.methods.step = function (value, element, param) {
    // Replace default Jquery step validation
    var type = $(element).attr("type"),
        errorMessage = "Step attribute on input type " + type + " is not supported.",
        supportedTypes = ["text", "number", "range"],
        re = new RegExp("\\b" + type + "\\b"),
        notSupported = type && !re.test(supportedTypes.join());
    if (notSupported) {
        throw new Error(errorMessage);
    }
    return this.optional(element) || true; //(value % param === 0);
};

$.validator.methods.email = function (value, element) {



    // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
    // Retrieved 2014-01-14
    // If you have a problem with this implementation, report a bug against the above spec
    // Or use custom methods to implement your own email validation
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

}