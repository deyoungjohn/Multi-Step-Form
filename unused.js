

// steps.forEach(step => {
//     step.classList.remove('active__step')
// });
// document.querySelectorAll('.planBox input[type="radio"]')[1].checked=true

activeStep=document.querySelector('.active__step')
target=activeStep.classList[0]

addOns=document.querySelectorAll('.addOn')
addOns.forEach(addOn => {
    addOn.addEventListener('click', ()=>{
        addOn.classList.toggle('selected')
    })
});

targetInnerText=check.nextElementSibling.querySelector('p').innerText
        selectedAddOn.push(targetInnerText)
        if(selectedAddOn.length==0){
            addOnBoolean=false
        }



        checks.forEach(check => {
            selIds=['online__service','larger__storage','custom__profile','online__service__yr','larger__storage__yr','custom__profile__yr']
            selDiv=check.id
            selNam=`${check.id}title`
            selPrice=`${check.id}price`
            selDiv=document.createElement('div')
            selDiv.classList.add('selDiv')
            selDivs=document.querySelectorAll(`.selDiv`)
            selDivs.forEach(selDiv=>{
                selDiv.id='for'+check.id
                selNam=document.createElement('p')
                selPrice=document.createElement('p')
                selNam.classList.add('addOn__name')
                selPrice.classList.add('addOn__cost')
                indexOfAddOn=selIds.indexOf(check.id)
                selNam.innerText=addOnValues[indexOfAddOn].name //+ '<br><br>' + addOnValues[indexOfAddOn].
                selPrice.innerText='$'+addOnValues[indexOfAddOn].price+addOnValues[indexOfAddOn].period
                user__addOns.appendChild(selDiv)
                selDiv.appendChild(selNam)
                selDiv.appendChild(selPrice)
            })
            
            check.addEventListener('click', ()=>{
                indexOfChecked++
                check.classList.toggle('selected')
                check.parentElement.classList.toggle('selected')
                selectedChecks=document.querySelectorAll('input[type="checkbox"].selected')
                
                // selDiv.classList.toggle('active')
                selectedChecks.forEach(sel=>{
                    console.log(selectedChecks)
                    console.log(sel.id)
                })
                
                if (selectedChecks.length > 0) {
                    selectedChecks.forEach(sel=>{
                        document.getElementById(`for${sel.id}`).classList.toggle('active')
                        activeSel=document.querySelectorAll('selDiv.active')
                        console.log(activeSel)
                    })
                }
                else{
                    user__addOns.style.display="none"
                    user__plan.classList.toggle('shapeBottom')
        
                }
        });
        })


// ====== Alternative ======
// altMsg=document.querySelector('.altMsg')
// altMsg.innerText=message
// altMsg.className='altMsg visible'

// ======== Redundant ==========
// message=document.querySelector('.error__msg').innerText

nameValue=document.getElementById('username').value.trim();
emailValue = email.value.trim();
telValue = document.getElementById('tel').value.trim();

function getRadioAttributes(radio) {
    targetId1=radio.id
    targetId2=targetId1.replace(/'/g, '')
    console.table(radioValues.targetId2)
}
getRadioAttributes(radio)

radioValues=[
    {name:'Arcade', period:'Monthly', price:9},
    {name:'Advanced', period:'Monthly', price:12},
    {name:'Pro', period:'Monthly', price:15},
    {name:'Arcade', period:'Yearly', price:90},
    {name:'Advanced', period:'Yearly', price:120},
    {name:'Pro', period:'Yearly', price:150}
]

radioValues={
    'radio1':{name:'Arcade', period:'Monthly', price:9},
    'radio2':{name:'Advanced', period:'Monthly', price:12},
    'radio3':{name:'Pro', period:'Monthly', price:15},
    'radio4':{name:'Arcade', period:'Yearly', price:90},
    'radio5':{name:'Advanced', period:'Yearly', price:120},
    'radio6':{name:'Pro', period:'Yearly', price:150}
}

radioValues={
    radio1:{name:'Arcade', period:'Monthly', price:9},
    radio2:{name:'Advanced', period:'Monthly', price:12},
    radio3:{name:'Pro', period:'Monthly', price:15},
    radio4:{name:'Arcade', period:'Yearly', price:90},
    radio5:{name:'Advanced', period:'Yearly', price:120},
    radio6:{name:'Pro', period:'Yearly', price:150}
}

// ======= Realized I Dont Need This =========
corresponder=document.getElementById(radio.id)
corresponder.parentElement.classList.add('selected')

// ========= Monthly and Yearly Toggle =========
toggles=document.querySelectorAll('.toggle')
indicators=document.querySelectorAll('.indicator')
toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=>{
        indicators.forEach(indicator => {
            indicator.classList.toggle('shift')
            monthToYear()
        });
    }) 
});


function monthToYear(){
    // monthly=document.querySelector('.monthly')
    // yearly=document.querySelector('.yearly')
    monthlys=document.querySelectorAll('.monthly')
    yearlys=document.querySelectorAll('.yearly')

    mTy=setInterval(()=>{
        monthlys.forEach(monthly => {
            monthly.classList.toggle('out')
        });
        yearlys.forEach(yearly => {
            yearly.classList.toggle('in')
        });
        // monthly.classList.toggle('out')
        // yearly.classList.toggle('in')
    }, 200)

    setTimeout(() => {
        clearInterval(mTy)
    }, 200);
    // setTimeout(() => {
    //         monthlys.forEach(monthly => {
    //             monthly.clearInterval(mTy)  
    //         });
    //         yearlys.forEach(yearly => {
    //             yearly.clearInterval(mTy)
    //         });
    // }, 200);
}