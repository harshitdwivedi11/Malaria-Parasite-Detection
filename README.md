# Forecasting Malaria Parasite

A web-based application for early detection and forecasting of malaria parasites using deep learning. Users can upload blood smear slide images for analysis and receive instant predictions.

---

## 🚀 Features

- **Upload Image**  
  Easily upload blood smear slide images through a simple drag-and-drop or file-picker interface.

- **Get Image Prediction**  
  Click the **Run Model** button to process the uploaded image and classify it as **Parasitized** or **Uninfected**.

- **Multilingual Support**  
  Switch between multiple languages on the fly thanks to i18Next integration.

- **Simple & Clean UI**  
  A minimalistic, uncluttered interface built with Tailwind CSS and Material UI for a smooth user experience.

---

## 🛠 Technologies Used

- **Frontend:**  
  - React  
  - Tailwind CSS  
  - Material UI  
  - i18Next (internationalization)

- **Backend:**  
  - Flask (Python)  
  - Pre-trained CNN model (Keras)  
  - OpenCV & NumPy for image preprocessing

- **Deployment:**  
  - Vercel (frontend)  
  - Any WSGI-compatible host (e.g. Heroku, AWS, DigitalOcean)

---

## 📥 Installation & Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/harshitdwivedi11/Malaria-Parasite-Detection.git
   cd Malaria-Parasite-Detection
