
const baseline = document.querySelector('.baseline');
const snackbarBox = document.querySelector('.snackbar__box')
const snackbar2 = document.querySelector('.snackbar2')
const bar = document.querySelector('.bar')
const leading = document.querySelector('.leading')
const stacked = document.querySelector('.stacked')




baseline.addEventListener('click', ()=>{
    console.log("clicked")
    bar.innerHTML = `<div class="snackbar2">
                                <span>Can't send photo. Retry in 5 seconds.</span>
                                <div class="action2">
                                    <a href=""><span class="retry">RETRY</span></a>
                                    <button class="btn">X</button>
                                </div>
                            </div>`
    
    setTimeout( () => {
        bar.style.display = "none"
        
   }, 2000);//wait 2 seconds
      bar.style.display = "flex"


})

  leading.addEventListener('click', ()=>{
      bar.innerHTML = `<div class="snackbar3">
                            <span>Can't send photo. Retry in 5 seconds.</span>
                            <div class="action3">
                                <a href=""><span class="retry">RETRY</span></a>
                                <button class="btn">X</button>
                            </div>
                        </div>`

                        setTimeout( () => {
                        bar.style.display = "none"

                        }, 2000);//wait 2 seconds
                        bar.style.display = "flex"
  })

  stacked.addEventListener('click', ()=>{
    bar.innerHTML = `<div class="snackbar4">
                        <span>Can't send photo. Retry in 5 seconds.</span>
                        <div class="action4">
                            <a href=""><span class="retry">RETRY</span></a>
                            <button class="btn">X</button>
                        </div>
                    </div>`
            setTimeout( () => {
            bar.style.display = "none"

            }, 2000);//wait 2 seconds
            bar.style.display = "flex"

  })