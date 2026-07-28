//ai se likhwaya //
const phoneInput = document.querySelector("#phone");

// प्लगइन को एक्टिवेट (Initialize) करना
window.intlTelInput(phoneInput, {
    initialCountry: "in", // डिफ़ॉल्ट रूप से इंडिया (+91) का तिरंगा दिखेगा
    separateDialCode: true, // +91 कोड इनपुट बॉक्स से अलग और साफ दिखेगा
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // नंबर वैलिडेशन के लिए
});
alert("hay")
console.log("fast console write")
