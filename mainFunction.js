//No need to link this code. This code is linked inside the inner script tag

document.getElementById('btn_generate').addEventListener('click', function() {
    let txt_value = document.getElementById('txt_input').value;
    
    if (txt_value === "") {
        alert("Please enter a barcode value.");
        return; 
    }
    
    JsBarcode("#barcode", txt_value);

    document.getElementById('btn_download').style.display = 'block';
});

document.getElementById("btn_download").addEventListener("click", function() {
    var svgContent = document.getElementById("barcode").innerHTML;
    var filename = "barcode.svg";
    download(filename, svgContent);
});

function download(filename, svgContent) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);}