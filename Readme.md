# File Exposer Over IP Address 🚀

![GitHub repo size](https://img.shields.io/github/repo-size/xemonbae01/file-exposer-over-ip-address) 
![GitHub issues](https://img.shields.io/github/issues/xemonbae01/file-exposer-over-ip-address) 
![GitHub stars](https://img.shields.io/github/stars/xemonbae01/file-exposer-over-ip-address?style=social) 
![GitHub license](https://img.shields.io/github/license/xemonbae01/file-exposer-over-ip-address)

**Made by Redwan Ahemed (Xe Mo)** 🎀  

A lightweight and easy-to-use file and media server that exposes your local storage over your network. Browse, stream, and download files from any device connected to your hotspot or local network.

---

## ✨ Features

- 🔹 Serve files from a local directory over your network.
- 🔹 Automatic MIME type detection for proper rendering.
- 🔹 Stream images, videos, and audio directly in your browser.
- 🔹 Safely display `.txt`, `.js`, `.json`, and `.html` files.
- 🔹 Download other file types directly.
- 🔹 Directory listing with icons for easy navigation.
- 🔹 Works seamlessly over your local network or hotspot.

---

## 💻 Installation

1. Clone the repository and startup:

```bash
git clone https://github.com/xemonbae01/file-exposer-over-ip-address.git
cd file-exposer-over-ip-address
termux-setup-storage
npm i
node expose.js
```

## 🛠 How It Works

Express.js serves as the HTTP server.

serve-index generates directory listings with icons.

mime-types automatically detects file types for correct rendering.

Media files (image/*, video/*, audio/*) are streamed directly.

Text files (.txt, .js, .json, .html) are safely displayed in the browser.

Other files are served as downloads.

## ⚠️ Security Notes

This server exposes files over your network. Only use on trusted networks.

Avoid exposing sensitive directories.

No authentication is included — anyone on the network can access the files.
