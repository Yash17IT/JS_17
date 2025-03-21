
let imgbox = document.getElementById("imgbox");
let qrimages = document.getElementById("qrimages");
let qrtext = document.getElementById("qrtext");
function generateqr(){
    if(qrtext.value.length>0)
    {
        qrimages.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.ariaValueMax;
        imgbox.classList.add("show-img");
        
    } else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000);
    }
}