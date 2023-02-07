(() => {
    let btn = document.querySelectorAll('.bpTable summary');
    btn.forEach((header) => {
        header.addEventListener('click', function(event) {
            console.log(event.target.id);
            document.querySelectorAll('.bpTable details[open]').forEach((data) => {
                if(data.target == event.target) return;
                data.attributes.removeNamedItem('open');
            });
            document.querySelector('#bpImage').src = "../assets/img/"+event.target.id+".png";
        });
    });
})();
