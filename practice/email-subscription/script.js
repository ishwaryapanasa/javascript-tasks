document.getElementById("subscriptionForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById("email").value;

    const response = await fetch('https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=527063255104-c7qh9pv2c4smacgqr79r3psfmr4pl5gc.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fscript.google.com%2Foauthcallback&state=ACjPJvFakmVGdnF3caOFT2i1Af1EEyGrM2fOvzmuxdR1jAzBWRpduVjn8_Ddu-Fv8RUcjbwBrYiY9Z9ct1hxEubspQm4i-NDmRSP15jCHEINuDZgL6r8DK1kRogWpKV7WxPPJVgpvxZSwWawXU327TUj-mus2uVxBJeP8UeuD_T116o&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fspreadsheets&response_type=none%20gsession&access_type=offline&approval_prompt=force&enable_granular_consent=false&hl=en-US&login_hint=ishwaryapanasa2%40gmail.com&service=lso&o2v=1&ddm=1&flowName=GeneralOAuthFlow', {
        method: 'POST',
        body: JSON.stringify({ email }),
    });

    if (response.ok) {
        alert('Thank you for subscribing!');
    } else {
        alert('Oops! Something went wrong. Please try again.');
    }

    // Optionally clear the input field after submission
    document.getElementById("email").value = '';
});

