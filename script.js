let runsEl = document.getElementById("runs")
let wicketsEl = document.getElementById("wickets")
let oversEl = document.getElementById("thisover")
let completedEl = document.getElementById("completed")
let oversCompletedEl = document.getElementById("overscompleted")
let totaldeliveries = 0
let runs = 0
let wickets = 0
let deliveries = 1
let ball = 0

function dot() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        totaldeliveries += 1
        runsEl.textContent = runs
        ball = 0
        oversEl.textContent += ball + " / "
        
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)


      }
      else{
    
    deliveries += 1
    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    totaldeliveries += 1

    ball = 0
    oversEl.textContent += ball + " - "
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}
}
function single() {

    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        runs += 1
        totaldeliveries += 1

        runsEl.textContent = runs
        ball = 1
        oversEl.textContent += ball + " / "
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)

      }
      else{
    runs += 1
    deliveries += 1
    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = 1
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}
}
function double() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        runs += 2
        runsEl.textContent = runs
        ball = 2
        oversEl.textContent += ball + " / "
        totaldeliveries += 1
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
      }
    else{
    runs += 2
    deliveries += 1

    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = 2
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)

}}
function triple() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        runs += 3
        runsEl.textContent = runs
        ball = 3
        oversEl.textContent += ball + " / "
        totaldeliveries += 1
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
      }
      else{
    runs += 3
    deliveries += 1

    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = 3
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}}
function four() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        runs += 4
        runsEl.textContent = runs
        ball = 4
        oversEl.textContent += ball + " / "
        totaldeliveries += 1
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
      }
      else{
    runs += 4
    deliveries += 1

    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = 4
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}}
function six() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        runs += 6
        runsEl.textContent = runs
        ball = 6
        oversEl.textContent += ball + " / "
        totaldeliveries += 1
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
      }
      else{
    runs += 6
    deliveries += 1

    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = 6
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)

}}
function noball() {
    
      
    runs += 1
    runsEl.textContent = runs
    completedEl.textContent = "Click the runs scored on noball (CLICK DOT BALL IN CASE OF A WICKET)"
    
    deliveries -= 1
    totaldeliveries -= 1
    ball = "NB"
    oversEl.textContent += ball
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}
function wide() {
    
      
    runs += 1
    runsEl.textContent = runs
    completedEl.textContent = "Over Ongoing"
    ball = "WD"
    oversEl.textContent += ball + " - "
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}
function wicket() {
    if(deliveries==6){
        completedEl.textContent = "OVER COMPLETED"
        deliveries = 1
        wickets += 1
        wicketsEl.textContent = wickets
        ball = "W"
        oversEl.textContent += ball + " / "
        totaldeliveries += 1
        oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
      }
      else{
    wickets += 1
    deliveries += 1

    wicketsEl.textContent = wickets
    completedEl.textContent = "Over Ongoing"
    ball = "W"
    oversEl.textContent += ball + " - "
    totaldeliveries += 1
    oversCompletedEl.textContent = Math.trunc(totaldeliveries/6)
}}




