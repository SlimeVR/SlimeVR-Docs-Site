(() => {
    let btn = document.querySelectorAll('.bpTable summary');
    btn.forEach((header) => {
        header.addEventListener('click', function(event) {
            let themeCol = "_d";
            if (document.querySelector('html').classList.contains("latte")) {
                themeCol = "_l";
            }
            document.querySelectorAll('.bpTable details[open]').forEach((data) => {
                if(data.target == event.target) return;
                data.attributes.removeNamedItem('open');
            });
            document.querySelector('#bpImage').src = "../assets/img/"+event.target.id+themeCol+".png";
        });
    });
})();
