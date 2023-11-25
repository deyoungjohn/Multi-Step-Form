user__addOns=document.querySelector('.user__addOns')
user__plan=document.querySelector('.user__plan')
newDivs=[]
final=[]
addOnValues=[
    {name:'Online service', period:'/mo', desc:'Access to multiplayer games', price:1},
    {name:'Larger storage', period:'/mo', desc:'Extra 1TB of cloud save', price:2},
    {name:'Customizable Profile', period:'/mo', desc:'Custom theme on your profile', price:2},
    {name:'Online service', period:'/yr', desc:'Access to multiplayer games', price:10},
    {name:'Larger storage', period:'/yr', desc:'Extra 1TB of cloud save', price:20},
    {name:'Customizable Profile', period:'/yr', desc:'Custom theme on your profile', price:20}]

// ========== Show Selected AddOns ============
checks=document.querySelectorAll('.addOn input[type="checkbox"]')
selectedAddOn = []
selectedChecks= []
selectedCheckIds= []
addOnBoolean = true
checks.forEach(check => {
    selIds=['online__service','larger__storage','custom__profile','online__service__yr','larger__storage__yr','custom__profile__yr']
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
    
    check.addEventListener('click', ()=>{
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
                document.getElementById(`for${check.id}`).classList.toggle('active')
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

// selectedCheckIds.push(selCheck.id);
// ====== Validate Step Three ==========
function validateFormThree() {
        form__three.classList.remove('active__step')
        form__three.nextElementSibling.classList.add('active__step')
        // if (selectedChecks.length > 0) {
        //     console.log(selectedChecks)
        //     selectedChecks.forEach(selCheck=>{
        //         selIds=['online__service','larger__storage','custom__profile','online__service__yr','larger__storage__yr','custom__profile__yr']
        //         selDiv=document.createElement('div')
        //         selDiv.classList.add('selDiv')
        //         selDiv.id='for'+selCheck.id
        //         selNam=document.createElement('p')
        //         selPrice=document.createElement('p')
        //         selNam.classList.add('addOn__name')
        //         selPrice.classList.add('addOn__cost')
        //         indexOfAddOn=selIds.indexOf(selCheck.id)
        //         selNam.innerText=addOnValues[indexOfAddOn].name //+ '<br><br>' + addOnValues[indexOfAddOn].
        //         selPrice.innerText='$'+addOnValues[indexOfAddOn].price+addOnValues[indexOfAddOn].period
                // newDivs=[...user__addOns.children]
                // newDivs.forEach(child=>{
                //     if(selectedChecks.some(child=>child.includes(child.id))){
                //         final=[...newDivs.slice(0, newDivs.indexOf(child)), ...newDivs.slice(newDivs.indexOf(child)+1, newDivs.length)]
                //         console.log(final)
                //     }
                // })
                // while (user__addOns.hasChildNodes()){
                //     user__addOns.removeChild(user__addOns.firstChild);
                // }
        //         user__addOns.appendChild(selDiv)
        //         selDiv.appendChild(selNam)
        //         selDiv.appendChild(selPrice)
        //     })
            // console.log(selectedCheckIds)
        }