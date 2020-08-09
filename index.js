function convert_to_English (val) {
    var en = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ar  = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
    for (var i = 0, num = en.length; i < num; i++) {
      val = val.replace(new RegExp(ar[i], "g"), en[i]);
    }

    return val;
}
module.exports.p4har = convert_to_English;