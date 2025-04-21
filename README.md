# Habit Tracker API

Bu proje, alışkanlıklarınızı takip etmenizi sağlayan basit bir backend API uygulamasıdır. Node.js ve MongoDB kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- Kullanıcı oluşturma
- Alışkanlık ekleme, listeleme ve güncelleme
- Günlük alışkanlık durum takibi
- MongoDB ile veri kalıcılığı

## 📦 Gereksinimler

- Node.js (v18 veya üzeri önerilir)
- MongoDB (lokal ya da MongoDB Atlas)

## 🔧 Kurulum

1. Projeyi klonlayın:
   ```bash
   git clone <repo-url>
   cd Habit-Tracker
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. `.env` dosyasını oluşturun:
   Proje kök dizinine `.env` adlı bir dosya ekleyin ve aşağıdaki örneğe göre doldurun:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/habit-tracker
   ```

   > ⚠️ `.env` dosyası `.gitignore`'a dahil edilmiştir. Bu nedenle versiyon kontrolüne girmez. Her kullanıcı kendi `.env` dosyasını oluşturmalıdır.

4. Uygulamayı başlatın:
   ```bash
   npm start
   ```

## 🧪 Geliştirme Modu

Nodemon ile geliştirme modunda başlatmak için:
```bash
npm run dev
```

## 📘 API Endpointleri

| Metot | URL                | Açıklama                 |
|-------|--------------------|--------------------------|
| GET   | `/habits`          | Tüm alışkanlıkları getir |
| POST  | `/habits`          | Yeni alışkanlık oluştur  |
| PUT   | `/habits/:id`      | Alışkanlığı güncelle     |
| PATCH | `/habits/:id/tick` | Günlük takibe işaret koy |

## 🤝 Katkı

Her türlü katkıya açığız! Lütfen fork edip pull request gönderin.

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
