const qrtext = document.getElementById('qrtext');
        const imagebox = document.getElementById('imagebox');
        const qrimage = document.getElementById('qrimage');


        function qrgenerator() {
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example " + qrtext.value;

            qrtext.value = "";

        }