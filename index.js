function limitInputLength(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
};

function checkBmi() {
    let res = document.getElementById('res');
    let weight = document.getElementById('iweight').value;
    let height = document.getElementById('iheight').value;
    let data = document.getElementById('data');
    let p = document.getElementById('bmi_p')
    let bmi = weight / (height**2);
    data.style.display = 'none';
    res.style.cssText = 'display: flex; align-itemns: center; justify-content: center; flex-direction: column; padding: 10px';
    p.style.display= 'inline';
    res.innerHTML = 'BMI: '+bmi.toFixed(2);
    if (bmi >= 40){
        res.innerHTML += '<br>Obesity Class III<br> Also known as morbid obesity, indicates that your weight is at an extremely high level and poses a significant risk to health. It can lead to serious complications, including heart problems, stroke, type 2 diabetes, and a significant reduction in quality of life.';
    } else if (bmi >= 35 && bmi <= 39.9) {
        res.innerHTML += '<br>Obesity Class II<br> Indicates severe obesity, with weight well beyond the healthy range for your height. It substantially elevates the risk of cardiovascular disease, type 2 diabetes, sleep apnea, and certain cancers. Medical intervention, including supervised weight loss programs and possibly bariatric surgery, may be necessary to address this level of obesity effectively.';
    } else if (bmi >= 30 && bmi <= 34.9) {
        res.innerHTML += '<br>Obesity Class I<br> It means that your weight is significantly above the healthy range for your height. It increases the risk of developing serious health conditions, including cardiovascular disease, high blood pressure, stroke, and type 2 diabetes. Lifestyle changes, such as dietary modifications and increased physical activity, are important for managing and reducing the risks associated with this level of obesity.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        res.innerHTML += '<br>Overweight<br> Being overweight means that your weight exceeds the recommended range for your height. It can lead to various health issues, such as high blood pressure, heart disease, type 2 diabetes, and joint problems. Managing weight through a balanced diet and regular exercise is crucial for reducing these risks.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        res.innerHTML += '<br>Normal weight<br> Being overweight means that your weight exceeds the recommended range for your height. It can lead to various health issues, such as high blood pressure, heart disease, type 2 diabetes, and joint problems. Managing weight through a balanced diet and regular exercise is crucial for reducing these risks.'
    } else {
        res.innerHTML += '<br>Underweight<br> Being underweight means that your weight is below the normal range for your height. It may indicate insufficient nutrition or underlying health issues. Being underweight can lead to weakened immune function, osteoporosis, and fertility problems in women.'
    }
};

let bmi = document.getElementById('bmi');
let about_us = document.getElementById('about-us');
let beHealthy = document.getElementById('healthy');
let seeContact = document.getElementById('contact');
let freeTry = document.getElementById('freeTry');
function home(){
    bmi.style.display = 'flex';
    about_us.style.display = 'none';
    seeContact.style.display = 'none';
    freeTry.style.display = 'block'
    freeTry.innerHTML = 'Try a totally free service from us!';
}

function aboutUs(){ 
    bmi.style.display = 'none';
    about_us.style.display = 'flex';
    seeContact.style.display = 'none';
    freeTry.innerHTML = 'Who are we?'
}

function contact(){
    bmi.style.display = 'none';
    about_us.style.display = 'none';
    seeContact.style.display = 'flex';
    freeTry.innerHTML = 'Contact us'
}
