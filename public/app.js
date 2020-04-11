navigator.geolocation.getCurrentPosition(position=>{
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

    document.querySelector('.lon').textContent=lon;
    document.querySelector('.lat').textContent=lat;

    const data = {lon,lat};
    const options = {
       method:'POST',
       headers: {
        'Content-Type': 'application/json'
      },
       body:JSON.stringify(data)
       
    };
    
    
    document.querySelector('#btn').addEventListener('click',()=>{
        fetch('/api',options).then(res=>res.json()).then(res=>console.log(res));

    })

});





