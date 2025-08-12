const paragraphs = [
  "Sayangku...",
  "Setiap hari bersamamu adalah anugerah yang tidak pernah aku minta, tapi selalu aku syukuri. Kamu hadir di hidupku seperti mentari setelah badai panjang. 😊",
  "Aku ingat pertama kali kita ngobrol... hatiku langsung tenang. Kamu berbeda. Kamu istimewa. Dan sejak saat itu, aku tahu... kamu adalah rumah untuk hatiku.",
  "Kamu tau gak? Senyumanmu itu candu. Tawamu itu musik paling indah buat telingaku. Dan cara kamu marah aja... masih bisa bikin aku makin cinta 😘",
  "Mungkin aku gak selalu sempurna, kadang menyebalkan, kadang diam gak jelas. Tapi hatiku? Gak pernah ragu sedikitpun buat kamu sayangku💕.",
  "Kamu bukan sekadar pacar. Kamu sahabatku. Kamu tempat pulangku. Kamu alasanku terus bertahan di hari-hari terberat.",
  "Aku ingin bareng kamu selamanya. Mau bangun pagi bareng kamu. Mau kemana bareng kamu aja. Mau gandeng tangan kamu di jalan,🥺❤️",
  "Aku cinta kamu. Dari dulu. Sekarang. Sampai nanti, bahkan setelah aku nggak ada.",
  "💖 Aku sendiri, untuk kamu seorang 💖"
];

let currentParagraph = 0;
let currentChar = 0;
const speed = 35; // kecepatan ngetik per karakter
const letterContainer = document.getElementById("letter");

function typeWriter() {
  if (currentParagraph < paragraphs.length) {
    const para = document.createElement("p");
    letterContainer.appendChild(para);

    const interval = setInterval(() => {
      para.textContent += paragraphs[currentParagraph][currentChar];
      currentChar++;
      if (currentChar >= paragraphs[currentParagraph].length) {
        clearInterval(interval);
        currentParagraph++;
        currentChar = 0;
        setTimeout(typeWriter, 600); // jeda antar paragraf
      }
    }, speed);
  }
}

window.onload = typeWriter;

function showLove() {
  const popup = document.getElementById('popup');
  const audio = document.getElementById('loveAudio');

  popup.classList.remove('hidden');
  audio.play();
}