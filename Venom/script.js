// --------------------------------------------------------------------------- >> QUERRY SELECTORS << ------------------------------------------------------------------------------------- //
const clickSound = document.querySelector('#click-sound');
const bloodDiv = document.querySelector('.blood');
const venomHead = document.querySelector('.venom-head');
const venomSound = document.querySelector('#venom-sound');
const wtfSound = document.querySelector('#wtf-sound');
const adviceBtn = document.querySelector('.get-advice');
const mistakeContainer = document.querySelector('.mistake-container');
const headerText = document.querySelector('.header-text');
const mistakeBody = document.querySelector('.mistake-body');
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// --------------------------------------------------------------------------- >> CLICK SOUND EVENT << ------------------------------------------------------------------------------------ //

document.addEventListener('click', (event) => {

    if (!clickSound.paused) {
        clickSound.pause();
        clickSound.currentTime = 0;
    }
    if (venomHead.contains(event.target)) {
        clickSound.pause();
        venomSound.pause();
        wtfSound.play();
        bloodDiv.style.left = `${event.clientX - 50}px`;
        bloodDiv.style.top = `${event.clientY - 50}px`;
        bloodDiv.style.display = 'block';

        setTimeout(() => {
            bloodDiv.style.display = 'none';
        }, 1500);
    } else {
        clickSound.play();

        bloodDiv.style.left = `${event.clientX - 50}px`;
        bloodDiv.style.top = `${event.clientY - 50}px`;
        bloodDiv.style.display = 'block';

        setTimeout(() => {
            bloodDiv.style.display = 'none';
        }, 1500);
    }

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// --------------------------------------------------------------------------- >> EYES SOUND EVENT << ------------------------------------------------------------------------------------ //


venomHead.addEventListener('mouseover', () => {
    venomHead.src = "./img/venomspeak.gif";
    venomSound.play();
})

venomHead.addEventListener('mouseout', () => {
    venomSound.pause();
    venomSound.currentTime = 0;
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

/* 
window.addEventListener('mousemove', (event) => {
    const container = document.querySelector('.container');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    container.style.left = mouseX - container.offsetWidth / 2 + 'px';
    container.style.top = mouseY - container.offsetHeight / 2 + 'px';

}) */


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //



adviceBtn.addEventListener('click', () => {
    if (mistakeContainer.style.display == "none") {
        mistakeBody.innerHTML = `<button onclick="generateRandomMessage()" class="button mistake-button">Bax</button>`;
        mistakeContainer.style.display = "block";

        adviceBtn.innerHTML = "BAXASI OLMADIM BRAT";
    } else {
        mistakeContainer.style.display = "none";
        adviceBtn.innerHTML = "Falına Bax"
    }
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //


function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    headerText.innerHTML = "";
    mistakeBody.innerHTML = randomMessage;
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //


const messages = [
    "Bugün sənə yaxşı xəbər gələcək, amma tələsmə, hər şey öz vaxtında olacaq.",
    "Yolun önündə çox maneə var, amma unutma, sən daha güclüsən və hər şeyin öhdəsindən gələcəksən.",
    "Əgər bu gün bir az yalnız hiss edirsənsə, unutma, hər şey bir zaman gəlir və sən tək deyilsən.",
    "Bu yaxınlarda həyatında gözlənilməz bir dəyişiklik olacaq. Gələcəyə açıq ol!",
    "Hər bir uğursuzluq, yeni bir başlanğıcın xəbərçisidir. Həmişə qalib olmağa yaxınsan.",
    "Bugün gələcək üçün böyük bir qərar verəcəksən. Bu qərar sənin həyatını dəyişdirəcək, amma doğru olacağına əmin ol.",
    "Bir çox insan səni qiymətləndirmir, amma unutma, sən özünü bilən və öz yolunda gedən bir insansan.",
    "Həyatında yaxşı günlər gözləyir. Bu, sənin həqiqətən dəyərləndiyin an olacaq.",
    "Gələcəkdə böyük bir uğur sənin olacaq, amma indi sadəcə səbr etməlisən.",
    "Əgər həyatın bu dövründə təngə gəlmisənsə, unutma, hər çətinlik sənə güc qatacaq.",
    "Gözlədiyin şeylər yaxın zamanda baş verəcək. Sadece özünə inan və yoluna davam et.",
    "Bəzən həyat gözlədiyindən daha çətin olur, amma sən hər zaman qalib gələcəksən.",
    "Bir neçə yeni fürsət yaxın zamanda qarşına çıxacaq. Bunlar sənin gücünü ortaya qoyacaq.",
    "Bugün bir şeylər dəyişəcək. Həyatının yeni bir səhifəsi açılacaq.",
    "Qarşında yeni imkanlar açılır, amma sən bunlardan ən yaxşı şəkildə istifadə etməlisən.",
    "Bir çox uğursuzluq olacaq, amma unutma, hər bir uğursuzluq yeni bir təcrübə gətirir.",
    "Sən güclüsən, amma bəzən biraz daha çaba və inam lazımdır. Hədəflərinə çatmaq üçün bu yolda irəlilə.",
    "Yolunda irəliləmək üçün bəzi qurbanlar verməlisən, amma sonu buna dəyəcək.",
    "Sən hər zaman özünü ən yaxşı versiyanı təqdim edirsən. Bu gün də belə olacaq.",
    "Gözlənilməz bir sürpriz olacaq, amma sən buna hazır olmalısan.",
    "Bütün mübarizələr sona çatacaq, amma qalib gəlmək sənin təyinatın olacaq.",
    "Sənə bir xəbərim var: Qısa zaman içində həyatın yaxşılaşacaq, amma hazır ol!",
    "Daha çox səy göstərməlisən. Əgər düzgün hərəkət etsən, uğur da sənə gələcək.",
    "Bir çox insanlar sənə qarşı çıxa bilər, amma sən öz gücünə inanmalı və mübarizəyə davam etməlisən.",
    "Yavaş ol, amma heç vaxt dayanma. Hedefin uzaqda olsa da, ona çatmağın çox yaxın olacaq.",
    "Bəzi gizli düşmənlər sənə qarşı bəzi maneələr yaradacaq, amma sən onları asanlıqla aşacaqsan.",
    "Sənə yaxın olanlar sənin həqiqi dostların olacaq. Dəstək olan insanlara etibar et.",
    "Bir çoxları sənə yardım etməyə çalışacaq, amma ən güclü dəstək, öz içindədir.",
    "Gələcəkdə önünə çıxacaq bir qərar sənə çox böyük təsir göstərəcək. Bu dəfə doğru seçim edəcəksən.",
    "Həyatın bu dövründə biraz səbr etməlisən. Hər şey yerli yerində olacaq.",
    "Çətin günlərə qarşı yenə qalib gələcəksən. Həyat sənə hələ çox möcüzə göstərəcək.",
    "Əgər doğru yolu seçsən, sən çox uzağa gedəcəksən. Yalnız özünə inan.",
    "Həyatın dəyişəcək, amma sən hər zaman öz yolunda irəliləyəcəksən.",
    "Bir çoxları sənə qarşı çıxa bilər, amma sən qalib gəldikcə, onların səsini boğacaqsan.",
    "Sən güclüsən, amma bəzən də özünə qarşı daha çox şans verməlisən.",
    "Bugün bir çox yeni imkanlarla qarşılaşacaqsan, amma bunları düzgün istifadə etməlisən.",
    "Dəyişikliklər gözlədiyindən daha yaxındır. Hazır ol, həyatın sənin üçün dəyişəcək.",
    "Yolunda çətinliklər olacaq, amma sən bu çətinlikləri asanlıqla aşa biləcək gücdəsən.",
    "Sən istədiyin yerə çatmaq üçün doğru yoldasan. Bu yolda qal və hər şey sənə güləcək.",
    "İçində böyük bir güc var. Bu gücü hiss etməli və istifadə etməlisən.",
    "Çətinliklər sənə dərslər verəcək. Bunları doğru şəkildə qəbul et və irəlilə.",
    "Bəzi insanlar sənə qarşı çıxacaq, amma unutma, sən hər zaman qalib gəlməyə qadirsən.",
    "Yolunda qarşılaşacağın maneələr səni gücləndirəcək, sonda daha böyük bir qalibiyyət gözləyir.",
    "Bugün hər şeyin doğru olduğuna əmin ol. Hər şey sənin üçün müsbət nəticələnəcək."
];