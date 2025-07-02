# GameApp

Bu proje, oyunlar hakkında bilgi sunan bir React tabanlı web uygulamasıdır.

## Özellikler

- Oyun listesi görüntüleme
- Oyun detaylarını inceleme
- API ile veri çekme

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/Berkbesne/GameApp.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd GameApp
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
4. Ortam değişkenlerini ayarlayın:
   - Proje kök dizininde bir `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
     ```
     VITE_API_URL=API_adresinizi_buraya_yazın
     VITE_API_KEY=API_anahtarınızı_buraya_yazın
     ```
   - `VITE_API_URL`: Uygulamanın oyun verilerini çekeceği API adresidir.
   - `VITE_API_KEY`: API'ya erişim için gerekli anahtardır. (Gizli tutmalısınız!)

5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

## Katkıda Bulunma

Katkıda bulunmak için lütfen bir fork oluşturun ve pull request gönderin.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
