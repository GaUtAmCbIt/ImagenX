# 🧠 ImagenX AI - Text to Image Generator

[![Deploy on Render](https://img.shields.io/badge/Live-Demo-blueviolet?style=for-the-badge)](https://imagenx-ai.onrender.com/)

ImagenX AI is a simple and elegant **Text-to-Image** generator powered by Hugging Face's inference API. Built using **React** and **TailwindCSS**, it allows users to generate images from text prompts using advanced AI models like **black-forest-labs/FLUX.1-dev**.

---

## ⚠️ Note

🚫 **Currently, the deployed version may not work** due to **401 Unauthorized errors** from Hugging Face. This is because the API token is **not included for security reasons**.

✅ To make the app work locally, **you can insert your own Hugging Face access token**.

---

## 🛠️ Tech Stack

- React
- TailwindCSS
- Axios
- Hugging Face Inference API

---

## 📸 Features

- Enter any text prompt
- Generates a stunning image using the `black-forest-labs/FLUX.1-dev` model
- Displays the image with a sleek UI
- Simple and responsive layout

---

## 🚀 How to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/imagenx-ai.git
   cd imagenx-ai
Install dependencies

bash
Copy
Edit
npm install
Add your Hugging Face API token

Inside Input.js, replace the Authorization header with your own:

js
Copy
Edit
headers: {
  Authorization: 'Bearer YOUR_HUGGINGFACE_TOKEN',
}
Run the app

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

📂 Folder Structure
pgsql
Copy
Edit
imagenx-ai/
│
├── public/
├── src/
│   ├── components/
│   │   └── Input.js
│   └── App.js
├── .gitignore
├── package.json
└── README.md
🙌 Acknowledgements
Hugging Face

black-forest-labs/FLUX.1-dev Model

🔐 Disclaimer
This app was built for learning/demo purposes. Do not expose your Hugging Face token on public platforms. Use a secure backend proxy for production deployment.
