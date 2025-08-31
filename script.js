// Click sound
let clickSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
function playClick(){ clickSound.currentTime=0; clickSound.play().catch(e=>console.log("Sound blocked")); }

// Theme toggle
function toggleTheme(){ playClick(); document.body.classList.toggle('dark'); }

// Show main sections
function showSection(id){
  playClick();
  document.querySelectorAll('.container').forEach(c=>c.style.display='none');
  document.getElementById(id).style.display='block';
}

// Show all tools tabs
function showCalcTab(id){
  playClick();
  document.querySelectorAll('.calc-tab').forEach(c=>c.style.display='none');
  document.getElementById(id).style.display='block';
}

// Basic / Scientific Calculator
function press(val, displayId){ playClick(); document.getElementById(displayId).value += val; }
function clearDisplay(displayId){ playClick(); document.getElementById(displayId).value=''; }
function calculate(displayId){
  playClick();
  try{
    let val = document.getElementById(displayId).value;
    val = val.replace(/÷/g,'/').replace(/×/g,'*');
    document.getElementById(displayId).value = eval(val);
  } catch { document.getElementById(displayId).value='Error'; }
}

// BMI
function calculateBMI(){
  playClick();
  let w = parseFloat(document.getElementById('weight').value);
  let h = parseFloat(document.getElementById('height').value)/100;
  if(!w || !h){ document.getElementById('bmiResult').innerText="Enter valid inputs"; return; }
  let bmi = w / (h*h);
  let category = bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal" : bmi < 29.9 ? "Overweight" : "Obese";
  document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)} (${category})`;
}

// Loan
function calculateLoan(){
  playClick();
  let P = parseFloat(document.getElementById('loanAmount').value);
  let R = parseFloat(document.getElementById('loanRate').value)/100;
  let T = parseFloat(document.getElementById('loanYears').value);
  if(!P || !R || !T){ document.getElementById('loanResult').innerText="Enter valid inputs"; return; }
  let total = P*(1+R*T);
  document.getElementById('loanResult').innerText = `Total Payment: ${total.toFixed(2)}`;
}

// EMI
function calculateEMI(){
  playClick();
  let P=parseFloat(document.getElementById('emiAmount').value);
  let R=parseFloat(document.getElementById('emiRate').value)/100/12;
  let N=parseFloat(document.getElementById('emiYears').value)*12;
  if(!P || !R || !N){ document.getElementById('emiResult').innerText="Enter valid inputs"; return; }
  let emi = (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
  document.getElementById('emiResult').innerText = `EMI: ${emi.toFixed(2)}`;
}

// Tip
function calculateTip(){
  playClick();
  let bill=parseFloat(document.getElementById('billAmount').value);
  let tip=parseFloat(document.getElementById('tipPercent').value);
  if(!bill || !tip){ document.getElementById('tipResult').innerText="Enter valid inputs"; return; }
  let totalTip = bill*tip/100;
  document.getElementById('tipResult').innerText = `Tip: ${totalTip.toFixed(2)} | Total: ${(bill+totalTip).toFixed(2)}`;
}

// Discount
function calculateDiscount(){
  playClick();
  let price=parseFloat(document.getElementById('originalPrice').value);
  let disc=parseFloat(document.getElementById('discountPercent').value);
  if(!price || !disc){ document.getElementById('discountResult').innerText="Enter valid inputs"; return; }
  let finalPrice = price*(1-disc/100);
  document.getElementById('discountResult').innerText = `Final Price: ${finalPrice.toFixed(2)}`;
}

// Age
function calculateAge(){
  playClick();
  let dob=new Date(document.getElementById('dob').value);
  if(!dob.getTime()){ document.getElementById('ageResult').innerText="Enter valid DOB"; return; }
  let diff=new Date()-dob;
  let age=Math.floor(diff/(1000*60*60*24*365.25));
  document.getElementById('ageResult').innerText = `Age: ${age} years`;
}

// Percentage
function calculatePercentage(){
  playClick();
  let part=parseFloat(document.getElementById('percentPart').value);
  let total=parseFloat(document.getElementById('percentTotal').value);
  if(!part || !total){ document.getElementById('percentResult').innerText="Enter valid inputs"; return; }
  let perc = (part/total)*100;
  document.getElementById('percentResult').innerText = `${perc.toFixed(2)}%`;
}

// Unit Converter
function convertUnit(){
  playClick();
  let val=parseFloat(document.getElementById('unitInput').value);
  let type=document.getElementById('unitType').value;
  if(!val){ document.getElementById('unitResult').innerText="Enter valid number"; return; }
  let result;
  if(type=='km-mile') result=(val*0.621371).toFixed(2)+' mi';
  else if(type=='mile-km') result=(val/0.621371).toFixed(2)+' km';
  else if(type=='kg-lb') result=(val*2.20462).toFixed(2)+' lb';
  else if(type=='lb-kg') result=(val/2.20462).toFixed(2)+' kg';
  else if(type=='c-f') result=((val*9/5)+32).toFixed(2)+' °F';
  else if(type=='f-c') result=((val-32)*5/9).toFixed(2)+' °C';
  document.getElementById('unitResult').innerText=result;
}

// Initialize
showSection('basic');
showCalcTab('bmi');
