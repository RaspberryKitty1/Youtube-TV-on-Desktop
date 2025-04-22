# 📺 YouTube TV Mode Access

A lightweight browser extension that forces YouTube into [**TV mode**](https://youtube.com/tv#) on desktop by spoofing the User-Agent to mimic a Nintendo Switch. Enjoy the big-screen experience right from your browser—no smart TV needed.

---

## ⚙️ Features

- 🚀 Loads YouTube's **TV interface** automatically
- 🔄 Prevents redirection back to the standard layout
- 🕹️ Emulates Nintendo Switch for full compatibility
- 🖥️ Supports both Chromium-based browsers and Firefox

---

## **📥 Installation Guide**  

### **🔥 Firefox-Based Browsers** (Firefox, Waterfox, LibreWolf, etc.)  

1️⃣ Go to the [Releases Page](https://github.com/RaspberryKitty1/Youtube-TV-on-Desktop/releases) and click the **.xpi** file.  
2️⃣ **Allow GitHub to install the extension**.  
   ![image](https://github.com/user-attachments/assets/97145067-c370-4d1f-b87d-2ee8c0189c24)  
3️⃣ **Click "Add" to confirm**.  

---

### **💠 Chromium-Based Browsers** (Chrome, Edge, Opera, Brave, etc.)  

1️⃣ Open the **Extensions page**:  

- **Chrome**: `chrome://extensions/`  
- **Edge/Opera/Brave**: `browser://extensions/`  

2️⃣ **Enable Developer Mode** (toggle in the top-right corner).  
   ![image](https://github.com/user-attachments/assets/c53c8b31-ecb9-4605-943b-f604028d83b3)  

3️⃣ Download the ZIP file from the [Releases Page](https://github.com/RaspberryKitty1/Youtube-TV-on-Desktop/releases).  

4️⃣ **Extract the ZIP file** to a permanent location (don’t move or delete it later).  

5️⃣ **Click "Load unpacked"** and select the extracted folder.  
   ![image](https://github.com/user-attachments/assets/376682ed-92ed-4b9c-bf77-7694f40ae7ca)  
   ![image](https://github.com/user-attachments/assets/33fc4ede-0d73-4775-be09-629506f3933e)  

✅ **Done!** The extension is now installed.  

---

## 🛠️ How It Works

- **User-Agent Spoofing:** Fakes a Nintendo Switch user-agent string:

  ```plaintext
  Mozilla/5.0 (Nintendo Switch; WebApplet) AppleWebKit/609.4 (KHTML, like Gecko) NF/6.0.2.20.5 NintendoBrowser/5.1.0.22023 Dalvik/2.1.0 (Linux; U; Android 5.1.1; AEOBC Build/LVY48f)
  ```

  This makes YouTube load its TV UI automatically.

- **Redirection:** In Firefox, direct visits to `/tv` are redirected to `/tv#` to prevent YouTube from falling back to the desktop view.

---

## 🧩 Compatibility

| Browser  | Supported |
|----------|-----------|
| Chrome   | ✅        |
| Edge     | ✅        |
| Brave    | ✅        |
| Firefox  | ✅        |
| Safari   | 🚫        |

---

## 📜 License

MIT — free to use, modify, and distribute.

---

## 🙌 Credits

Built for anyone who wants the **lean-back** YouTube experience without needing a console or smart TV.
