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


let obj = {
    "id": "111111111111",
    "created_time": "time not set",
    "items": [
        {
            "ques_id": null,
            "show": true,
            "title": null,
            "type": "radio",
            "answers": [
                {
                    "ans_id": '',
                    "title": '',
                    "child": [],
                    "default": [],
                    "descrip": false,
                    "desctext": "",
                    "name": '',
                }
            ],
            "ques_can_select": [

            ]

        },
    ]
}


idCount = 0
qForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // delete(obj);


    let aqInput = document.querySelector('.aq-input')
    let Qform = document.querySelector('#q_form')
    let aqTitles = document.querySelectorAll('.aq-titles')
    let isValid = true;


    function ret() {
        return
    }
    if (aqInput.value !== '') {
        let counter = 0;
        inputsValid(aqTitles)
        function inputsValid(items) {
            items.forEach(item => {
                if (item.value !== '') {
                    counter++;
                }
            })
        }











        if (counter == aqTitles.length) {


            let addFormData = new FormData(qForm)
            let blosh = document.querySelectorAll('.blosh')
            let quesId = Math.floor(Math.random() * 999999)
            let aqInput = document.querySelector('#aq-input')
            idCount++


            let nre = {
                "ques_id": quesId,
                "title": aqInput.value,
                "answers": []
            }

            obj.items.push(nre)
            let aqTitles = document.querySelectorAll('.aq-titles')


            let ansId = 0
            blosh.forEach(item => {
                let aqTitle = item.querySelector('.aq-titles')
                Math.floor(Math.random() * 999)

                // obj.items[idCount].answers = []

                // let array = []
                let xxx = {
                    title: aqTitle.value,
                    ans_id: ansId
                }
                obj.items[idCount].answers.push(xxx)
                // let ggg = obj.items.answers = array
                // ggg.push(xxx)

                // console.log(obj.items[idCount].answers)

            })


            let middleShow = document.querySelector('.middle-show')
            middleShow.innerHTML = ''
            

            // console.log(obj.items)

            obj.items.forEach(objItem => {

                let outPut = ''
                let secRadio = ''


                objItem.answers.forEach(itemm => {


                    secRadio += `
                    
                    <div class="msi-radio">
                        <span>${itemm.title}</span>
                        <input class="rrr" data-f="بله" type="radio" name="one">
                    </div>
                    `

                })


                outPut = `
                    <div class="ms-item">
                        <div class="msi-title">
                            <span>${objItem.title}</span>
                        </div>
                        <div class="msi-box">
                            <div class="msi-item">
                                <div class="msi-ans">
                                    ${secRadio}
                                </div>
                                <div class="msi-textarea">
                                    <span class="block">توضیحات</span>
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    `


                middleShow.insertAdjacentHTML('beforeend', outPut)









            })

            // let outPut = ''


            // let middleShow = document.querySelector('.middle-show')


            // middleShow.innerHTML = ''


            // // radioSec += `

            // // <div class="msi-radio">
            // //     <span>بلی</span>
            // //     <input class="rrr" data-f="بله" type="radio" name="one">
            // // </div>

            // // `




            // let radioSec = ''

            // console.log(obj.items[idCount].answers[0].title)

            // obj.items.forEach(item => {

            //     // console.log(item.answers[0])
            //     // console.log(item.answers)

            //     item.answers.forEach(itemm => {
            //         // console.log(itemm.title)

            //         radioSec += `

            //         <div class="msi-radio">
            //             <span>${itemm.title}</span>
            //             <input class="rrr" data-f="بله" type="radio" name="one">
            //         </div>

            // `
            //     })

            //     if(item.title !== null){
            //         outPut = `
            //         <div class="ms-item">
            //             <div class="msi-title">
            //                 <span>${item.title}</span>
            //             </div>
            //             <div class="msi-box">
            //                 <div class="msi-item">
            //                     <div class="msi-ans">
            //                         ${radioSec}
            //                     </div>
            //                     <div class="msi-textarea">
            //                         <span class="block">توضیحات</span>
            //                         <textarea name="" id=""></textarea>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //         `


            //         middleShow.insertAdjacentHTML('beforeend', outPut)
            //     }


            // })





        } else {
            alert('عنوان پاسخ ها نباید خالی باشند ')
        }






        // aqTitles.forEach(item => {

        //     if(item.value !== ''){
        //         isValid = true;
        //     } else {
        //         isValid = false;
        //         return;
        //     }

        //     console.log(item)

        // });




        // if(isValid == true){
        //     console.log('true')
        // } else {
        //     console.log('false')
        // }



        // aqTitles.forEach(item => {
        //     console.log(item.value)
        // })


    } else {
        alert('عنوان اصلی نباید خالی باشد')
    }



    // if (aqInput.value !== '') {

    //     let data = new FormData(Qform)
    //     let blosh = document.querySelectorAll('.blosh')
    //     let aqTitles = document.querySelectorAll('.aq-titles')
    //     count++

    //     let answerOutput = ''
    //     let textareaOutpot = ''

    //     blosh.forEach(item => {
    //         let aqTiltle = item.querySelector('.aq-titles')
    //         let aqCheckbox = item.querySelector('.checkbox')

    //         unique = Math.floor(Math.random() * 999999)

    //         if(aqCheckbox.checked == true){

    //             answerOutput += `

    //                 <div class="msi-radio">
    //                     <span>${aqTiltle.value}</span>
    //                     <input class="rrr" data-radio="textarea${unique}" type="radio" name="sec${count}">
    //                 </div>

    //                 `
    //             textareaOutpot += `

    //                 <div class="msi-textarea none">
    //                     <span class="block"> توضیحات درباره ${aqTiltle.value}</span>
    //                     <textarea name="textarea${unique}" id=""></textarea>
    //                 </div>

    //         `

    //         } else {

    //             answerOutput += `

    //                 <div class="msi-radio">
    //                     <span>${aqTiltle.value}</span>
    //                     <input class="rrr" data-radio="" type="radio" name="sec${count}">
    //                 </div>

    //                 `
    //         }


    //     })


    //     let ansInputs = document.querySelectorAll('.aq-titles')
    //     let showOutput  = '';
    //     showOutput += `

    //     <div class="ms-item">
    //         <div class="msi-title">
    //             <span>${data.get('q_name')}</span>
    //         </div>
    //         <div class="msi-box">
    //             <div class="msi-item">
    //                 <div class="msi-ans">

    //                     ${answerOutput}

    //                 </div>
    //                  ${textareaOutpot}
    //             </div>
    //         </div>
    //     </div>

    //         `

    //     let middleShow = document.querySelector('.middle-show')
    //         middleShow.insertAdjacentHTML('beforeend', showOutput)



    //     qForm.reset()
    //     // tr.forEach(item => {

    //     //     item.remove();
    //     // })

    // } else {
    //     alert('عنوان اصلی نباید خالی باشد')
    // }


    // let checkShow = document.querySelectorAll('.rrr[data-radio]')
    // if(checkShow){

    //     checkShow.forEach(item =>{
    //         item.addEventListener('change' , function(){

    //             if(item.getAttribute('data-radio') !== ''){

    //                 let dataRadio = item.getAttribute('data-radio');
    //                 let tArea = document.querySelector(`[name=${dataRadio}]`)
    //                 let msiItem = tArea.parentNode.parentNode;
    //                 let msiItems = msiItem.querySelectorAll('.msi-textarea')

    //                 tArea.parentNode.classList.remove('none')

    //                 msiItems.forEach(item => {
    //                     item.classList.add('none')
    //                 })

    //                 tArea.parentNode.classList.remove('none')

    //                 // console.log()
    //             } else {

    //                 let dataradioOff = item.parentNode.parentNode.parentNode
    //                 let makeNone = dataradioOff.querySelectorAll('.msi-textarea')

    //                 makeNone.forEach(tItem => {

    //                     tItem.classList.add('none')
    //                     tItem.childNodes[3].value = ''
    //                 })
    //             }
    //         })
    //     })
    // }
})





function alert(text) {

    let alert = document.querySelector('.alert')

    alert.style.animation = 'alert alternate forwards 1s ';
    alert.childNodes[1].innerHTML = text


    setTimeout(() => {
        // alert.classList.add('none')
        alert.style.animation = 'alertClear alternate backwards 1s ';
        alert.childNodes[1].innerHTML = ''
    }, 3000);
}


function dateTime() {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime
}






// let xxx = {
//     "Items" : '111',
// }



// var Items = JSON.parse(localStorage.getItem("Items"))
// var JSONItems = localStorage.setItem("Items", JSON.stringify(xxx))

// console.log(Items)


