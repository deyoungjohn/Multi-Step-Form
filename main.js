
// ======= Global Variable Declaration and Initialization =========
myForm = document.getElementById('formOne')
form__two=document.querySelector('.form__two')
form__three=document.querySelector('.form__three')
form__four=document.querySelector('.form__four')
steps=document.querySelectorAll('.form__body .step')


// ==== Object For Storing User Data=====
user = {
    name:"",
    email:"",
    phone:"",
    plan:{name:'', price:""}
}


// ========= Highlight Active Step ===========
function stepTogglesFunc(){
    activeStep=document.querySelector('.active__step')
    target=activeStep.classList[0]
    stepIndicators=document.querySelectorAll('.numbx')
    stepIndicators.forEach(stepIndicator => {
        stepIndicator.classList.remove('active')
    });
    activeStepIndicator=document.getElementById('for'+target)
    activeStepIndicator.classList.add('active')
}
stepToggles=document.querySelectorAll('.btnBox .btn')
for (let i = 0; i < stepToggles.length; i++) {
    stepToggles[i].addEventListener('click',stepTogglesFunc())
}
window.addEventListener('DOMContentLoaded',stepTogglesFunc())



bios=document.querySelectorAll('#formOne input')
bios.forEach(bio => {
    bio.addEventListener('input', ()=>{
        user.name=username.value.trim()
        user.email=email.value.trim()
        user.phone=tel.value.trim()
    })
});


// ========== Change Focus To The Next Input ==========
nextClicks=document.querySelectorAll('.next-click')
nextClicks.forEach(nextClick=>{
    nextClick.onkeydown=(event)=>{
        nextInput=nextClick.parentElement.nextElementSibling.querySelector('input');
        if(event.keyCode==13){
            nextInput.focus();
        }
    }
})
tel.onkeydown=function(event){
    if(event.keyCode==13){
        nextBtn.click()
    }
}


// ========= Form One Validation ===========
username = document.getElementById('username')
email = document.getElementById('email')
tel = document.getElementById('tel')
function setSuccessFor(input){
    inputBox=input.parentElement
    inputBox.className='inputBox success'
}
function setErrorFor(input, message){
    inputBox=input.parentElement;
    inputBox.className='inputBox error'
    errorMsg=inputBox.querySelector('.error__msg')
    errorMsg.innerText=message
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function validateFormOne(){
    nameValue = document.getElementById('username').value.trim();
    emailValue = email.value.trim();
    telValue = document.getElementById('tel').value.trim();

    valid = true

    if(nameValue===''||nameValue==null){
        setErrorFor(username, 'Please enter your name')
        valid=false
    } else{
        setSuccessFor(username)
    }
    
    if(emailValue===''){
        setErrorFor(email, 'Please enter your email')
        valid=false
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
        valid=false
    } else{
        setSuccessFor(email)
    }
    
    if(telValue===''){
        setErrorFor(tel, 'Please enter your phone number')
        valid=false
    } else if(isNaN(telValue)){
        setErrorFor(tel, 'Phone number is not valid')
        valid=false
    } else{
        setSuccessFor(tel)
    }
    if(valid){
        formOne.classList.remove('active__step')
        form__two.classList.add('active__step')
        backBtn.style.display='inline-block'
        nameHolder.innerText=user.name
        emailHolder.innerText=user.email
        phoneHolder.innerText=user.phone
    }
}



// ========= Monthly and Yearly Toggle =========
toggles=document.querySelectorAll('.toggle')
mTexts=Array.from(document.querySelectorAll('.m__text'))
yTexts=Array.from(document.querySelectorAll('.y__text'))
myTexts=[...mTexts, ...yTexts]
toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=>{
        myTexts.forEach(myText => {
        myText.classList.toggle('active')
        });
    }) 
});
function monthToYear(month, year, indicator){
    monthly=document.getElementById(month)
    yearly=document.getElementById(year)
    indicators=document.getElementById(indicator)
    indicators.classList.toggle('shift')
    monthly.classList.toggle('out')
    yearly.classList.toggle('in')
}



// ======= Show Selected Plan ============
totalPrice=[]
planSum = []
let indexOfRadio
periodAbv=''
radios=document.querySelectorAll('.planBox input[type="radio"]')
radioValues=[
    {name:'Arcade', period:'Monthly', price:9},
    {name:'Advanced', period:'Monthly', price:12},
    {name:'Pro', period:'Monthly', price:15},
    {name:'Arcade', period:'Yearly', price:90},
    {name:'Advanced', period:'Yearly', price:120},
    {name:'Pro', period:'Yearly', price:150}
]
radios.forEach(radio =>{
    radio.addEventListener('change', ()=>{
        form__two__error.style.opacity='0'
        rIds=['radio1','radio2','radio3','radio4','radio5','radio6']
        indexOfRadio=rIds.indexOf(radio.id)
        radioParents=document.querySelectorAll('.plans')
        radioParents.forEach(radioParent =>{
            radioParent.classList.remove('selected')
        })
        radio.parentElement.classList.add('selected')
        user.plan.name=radioValues[indexOfRadio].name
        unformattedPeriod=radio.parentElement.parentElement.classList[1]
        formattedPeriod=unformattedPeriod.charAt(0).toUpperCase()+unformattedPeriod.slice(1)
        user.plan.period=formattedPeriod
        user.plan.price=radioValues[indexOfRadio].price
        //Get abbreviation of the period
        periodAbv=radio.parentElement.parentElement.classList[1]

        if(periodAbv=='monthly')
        {periodAbv='mo'}
        else{periodAbv='yr';}
    })
})


// ====== Validate Step Two ==========
function validateFormTwo() {
    if(indexOfRadio==undefined) {
        form__two__error.style.opacity='1'
        form__two__error.innerText='You must select one plan'
    } else{
        form__two.classList.remove('active__step')
        form__two.nextElementSibling.classList.add('active__step')
        plan__name.innerText=user.plan.name+' ('+user.plan.period+')'
        plan__cost.innerText='$'+user.plan.price+'/'+periodAbv
        // checkPrice=addOnValues[selIds.indexOf(check.id)].price
        if(planSum.includes(user.plan.price)){
            planSum.splice(planSum.indexOf(user.plan.price), 1)
        }
        else{
            planSum.push(user.plan.price)
        }
    }
}


user__addOns=document.querySelector('.user__addOns')
user__plan=document.querySelector('.user__plan')
addOnValues=[
    {name:'Online service', period:'/mo', desc:'Access to multiplayer games', price:1},
    {name:'Larger storage', period:'/mo', desc:'Extra 1TB of cloud save', price:2},
    {name:'Customizable Profile', period:'/mo', desc:'Custom theme on your profile', price:2},
    {name:'Online service', period:'/yr', desc:'Access to multiplayer games', price:10},
    {name:'Larger storage', period:'/yr', desc:'Extra 1TB of cloud save', price:20},
    {name:'Customizable Profile', period:'/yr', desc:'Custom theme on your profile', price:20}]
    
// ========== Show Selected AddOns ============
checks=document.querySelectorAll('.addOn input[type="radio"]')
selectedChecks= []
addOnSum=[]
addOnBoolean = true
selIds=['online__service','larger__storage','custom__profile','online__service__yr','larger__storage__yr','custom__profile__yr']
checks.forEach(check => {
    selDiv=document.createElement('div')
    selDiv.classList.add('selDiv')
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
    
    // check.addEventListener('click', ()=>{
    //     check.classList.toggle('selected')
    //     check.parentElement.classList.toggle('selected')
    //     selectedChecks=document.querySelectorAll('.form__three input[type="radio"].selected')
    // });
})



//This function highlights the selected addOn
// A user cam only select the monthly or yearly version of an addon and not both
onlineService=Array.from(document.querySelectorAll('.addOn input[name="online__service"]'));
largerStorage=Array.from(document.querySelectorAll('.addOn input[name="larger__storage"]'));
customProfile=Array.from(document.querySelectorAll('.addOn input[name="custom__profile"]'));

const selectedAddOn = (addOnGroup)=>{
    addOnGroup.forEach(addOn=>{
        addOn.onclick=()=>{
            // Toggle the 'selected' class for the clicked radio button
            addOn.classList.toggle('selected')
            addOn.parentElement.classList.toggle('selected')
            // Remove the 'selected' class from other radio buttons
            addOnGroup.forEach(otherAddOn=>{
                if(otherAddOn!==addOn){
                    otherAddOn.classList.remove('selected')
                    otherAddOn.parentElement.classList.remove('selected')
                }
            })
            selectedChecks=document.querySelectorAll('.form__three input[type="radio"].selected')
        }
    })
}
selectedAddOn(onlineService)
selectedAddOn(largerStorage)
selectedAddOn(customProfile)

// ====== Validate Step Three ==========
function validateFormThree() {
    form__three.classList.remove('active__step')
    form__three.nextElementSibling.classList.add('active__step')
    stepTogglesFunc()
    
    if (selectedChecks.length > 0) {
        selectedChecks.forEach(sel=>{
            document.getElementById(`for${sel.id}`).classList.add('active')
            addOnSum.push(addOnValues[selIds.indexOf(sel.id)].price)
        })
        user__plan.classList.toggle('show')
    }
    else{
        user__plan.classList.add('shapeBottom')
    }
    totalPrice=[...planSum, ...addOnSum]
    finalSum=totalPrice.reduce(function(a, b){return a + b})
    total__amt.innerText=`+$${finalSum}/${periodAbv}`
}



//This function resets  everything when the user clicks on any of the buttons in step four that takes the user to a previous step
function backProcesses(){
    nextBtn.innerText="Next Step"
    nextBtn.style.backgroundColor=`hsl(213, 96%, 18%)`
    user__plan.classList.remove('show', 'shapeBottom')
    addOnSum.splice(0, addOnSum.length)
    selDivs=document.querySelectorAll(`.selDiv.active`)
    selDivs.forEach(sel=>{sel.classList.remove(`active`)})
}



// This function is for both change buttons in Step 4
const change=()=>{
    backProcesses()
    planSum.splice(0, planSum.length)
    stepTogglesFunc()
}
changeBio=document.querySelector('.change__bio')
changePlan=document.querySelector('.change__plan')
changeBio.onclick=()=>{
    form__four.classList.remove(`active__step`)
    formOne.classList.add(`active__step`)
    change()
}
changePlan.onclick=()=>{
    form__four.classList.remove(`active__step`)
    form__two.classList.add(`active__step`)
    change()
}


// ========= Toggle Between Steps =========
nextBtn.addEventListener('click', () => {
    if (formOne.classList.contains('active__step')) {
        validateFormOne()
    } else if (form__two.classList.contains('active__step')){
        validateFormTwo()
    } else if (form__three.classList.contains('active__step')){
        validateFormThree()
        nextBtn.innerText="Confirm"
        nextBtn.style.backgroundColor=`hsl(243, 100%, 62%)`
    } 
    else if (form__four.classList.contains('active__step')){
        form__four.classList.remove('active__step')
        thank__you.classList.add(`active__step`)
        btnBox.style.display="none"
    }
    stepTogglesFunc()
})
backBtn.onclick=() => {
    if (form__two.classList.contains('active__step')){
        backBtn.style.display='none'
        form__two.classList.remove('active__step')
        form__two.previousElementSibling.classList.add('active__step')
    } else if (form__three.classList.contains('active__step')){
        form__three.classList.remove('active__step')
        form__three.previousElementSibling.classList.add('active__step')
        planSum.splice(0, planSum.length)
    } else if (form__four.classList.contains('active__step')){
        form__four.classList.remove('active__step')
        form__four.previousElementSibling.classList.add('active__step')
        backProcesses()
    }
    stepTogglesFunc()
}

// Change how Form one is validated
// Highlight Step 4 in Thank You step
// Same plan, same addons
