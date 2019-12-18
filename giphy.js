let key = 'tONjNmIwpjoDMG18LLU2p3WnxfJ3yMiN'
document.addEventListener('DOMContentLoaded',()=> {
  let form = document.querySelector('form');
  let content = document.querySelector('.content');
  let select = document.querySelector('select');
  let input = document.querySelector('#userInput');
  let submit = document.querySelector('#submit');

  
  let h1 = document.createElement('h1');

  form.addEventListener('submit',(event)=> {
    event.preventDefault();
    giphySearch(input.value,select.value)
  })

  
  const showGif = gifArr => {
   gifArr.forEach(gif =>{
     let image = document.createElement('img');
    image.src =gif.images.downsized.url;
    content.appendChild(image);
    
   })

  }

  const giphySearch = async(userInput,userLimit) => {
    try {
      content.innerHTML = ''
      let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`);
      showGif(res.data.data)
      }catch(err){
        console.log(err)
      }

  }
  
  const populateSelect = ()=> {
    for(let i = 1; i <= 25; i++){
      let option = document.createElement('option');
      option.innerText = i;
      option.value = i;
      select.appendChild(option);
    }
  }
  populateSelect();

})