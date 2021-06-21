//alert("歡迎來到比其堡");
function reverse(s) {
    return s.split("").reverse().join("");
}
function get_reverse() {
    var content = document.getElementById('content').value;
    re_content = reverse(content);
    //    alert(re_content);
    document.getElementById('result').innerHTML = "輸入的字串顛倒後為: " + re_content;
}