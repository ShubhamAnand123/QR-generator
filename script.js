const wrapper = document.querySelector(".wrapper"),
qrinput = wrapper.querySelector(".form input"),
generbtn = wrapper.querySelector(".form button"),
qrimg = wrapper.querySelector(".qr-code img");

generbtn.addEventListener("click", ()=>{
   let qrValue = qrinput.value;
   if(!qrValue) return;
   generbtn.innerText="Generating QR Code....."
   qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x150&data=${qrValue}`;
   qrimg.addEventListener("load",()=>
   {

    generbtn.innerText="Generate QR Code";
   });
   wrapper.classList.add("active");
   qrinput.addEventListener("keyup",()=>
   {
    if(!qrinput.value)
    {
        wrapper.classList.remove("active");
    }
   })


});