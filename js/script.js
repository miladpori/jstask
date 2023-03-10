let addQuestion = document.querySelector('#add_qustion')


let newNumber = 1;
if (addQuestion) {

    let tableAbjust = document.querySelector("#aqf_tab")
    

    addQuestion.addEventListener('click', function (e) {
        e.preventDefault();
        newNumber++

        tableAbjust.insertAdjacentHTML('beforeend', `
        <tr class="blosh newtr">
            <td class="lassst">${newNumber}</td>
            <td><input class="aq-titles" data-check="checkbox${newNumber}" type="text" name="answer${newNumber}" placeholder="عنوان را وارد نمایید "></td>
            <td><input class="checkbox" type="checkbox" name="checkbox${newNumber}" value="checkbox${newNumber}"</td>
            <td>----</td>
        </tr>`)


    })
}


let qForm = document.querySelector('#q_form')
let answerList = []

let count = 0;
qForm.addEventListener('submit', function (e) {
    e.preventDefault();


    let aqInput = document.querySelector('.aq-input')
    let Qform = document.querySelector('#q_form')

    if (aqInput.value !== '') {

        let data = new FormData(Qform)
        let blosh = document.querySelectorAll('.blosh')
        let aqTitles = document.querySelectorAll('.aq-titles')
        count++

        let answerOutput = ''
        let textareaOutpot = ''

        blosh.forEach(item => {
            let aqTiltle = item.querySelector('.aq-titles')
            let aqCheckbox = item.querySelector('.checkbox')

            unique = Math.floor(Math.random() * 999999)
            
            if(aqCheckbox.checked == true){

                answerOutput += `
        
                    <div class="msi-radio">
                        <span>${aqTiltle.value}</span>
                        <input class="rrr" data-radio="textarea${unique}" type="radio" name="sec${count}">
                    </div>

                    `
                textareaOutpot += `
            
                    <div class="msi-textarea none">
                        <span class="block"> توضیحات درباره ${aqTiltle.value}</span>
                        <textarea name="textarea${unique}" id=""></textarea>
                    </div>
                    
            `

            } else {

                answerOutput += `
        
                    <div class="msi-radio">
                        <span>${aqTiltle.value}</span>
                        <input class="rrr" data-radio="" type="radio" name="sec${count}">
                    </div>

                    `
            }
            

        })

        
        let ansInputs = document.querySelectorAll('.aq-titles')
        let showOutput  = '';
        showOutput += `
            
        <div class="ms-item">
            <div class="msi-title">
                <span>${data.get('q_name')}</span>
            </div>
            <div class="msi-box">
                <div class="msi-item">
                    <div class="msi-ans">

                        ${answerOutput}

                    </div>
                     ${textareaOutpot}
                </div>
            </div>
        </div>

            `

        let middleShow = document.querySelector('.middle-show')
            middleShow.insertAdjacentHTML('beforeend', showOutput)



        qForm.reset()
        // tr.forEach(item => {

        //     item.remove();
        // })

    } else {
        alert('عنوان اصلی نباید خالی باشد')
    }


    let checkShow = document.querySelectorAll('.rrr[data-radio]')
    if(checkShow){

        checkShow.forEach(item =>{
            item.addEventListener('change' , function(){
                
                if(item.getAttribute('data-radio') !== ''){
                    
                    let dataRadio = item.getAttribute('data-radio');
                    let tArea = document.querySelector(`[name=${dataRadio}]`)
                    let msiItem = tArea.parentNode.parentNode;
                    let msiItems = msiItem.querySelectorAll('.msi-textarea')

                    tArea.parentNode.classList.remove('none')

                    msiItems.forEach(item => {
                        item.classList.add('none')
                    })

                    tArea.parentNode.classList.remove('none')

                    // console.log()
                } else {
                    
                    let dataradioOff = item.parentNode.parentNode.parentNode
                    let makeNone = dataradioOff.querySelectorAll('.msi-textarea')

                    makeNone.forEach(tItem => {

                        tItem.classList.add('none')
                        tItem.childNodes[3].value = ''
                    })
                }
            })
        })
    }
})





function alert(text){
    
    let alert = document.querySelector('.alert')

    alert.style.animation = 'alert alternate forwards 1s ';
    alert.childNodes[1] .innerHTML = text


    setTimeout(() => {
        // alert.classList.add('none')
        alert.style.animation = 'alertClear alternate backwards 1s ';
        alert.childNodes[1] .innerHTML = ''
    }, 3000);
}




