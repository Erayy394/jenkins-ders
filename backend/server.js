const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// CORS Aktif Et (Frontend bağlantı hatalarını önlemek için)
app.use(cors());

// JSON Desteği Ekleyelim
app.use(express.json());

// MySQL Bağlantısı
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // MySQL Kullanıcı Adın
    password: '08082010Er',  // MySQL Şifreniz
    database: 'etkinlik_db'
});

// Bağlantıyı Kontrol Et
db.connect(err => {
    if (err) {
        console.error('❌ MySQL Bağlantı Hatası:', err);
        return;
    }
    console.log('✅ MySQL Veritabanına Başarıyla Bağlandı! 🚀');
});

// Ana Sayfa Route (Test İçin)
app.get('/', (req, res) => {
    res.send('✅ Backend Çalışıyor! 🚀 API için "/etkinlikler" endpoint’ini kullanın.');
});

// API: Tüm Etkinlikleri Getir
app.get('/etkinlikler', (req, res) => {
    db.query('SELECT * FROM etkinlikler', (err, results) => {
        if (err) {
            res.status(500).send('❌ Veritabanı Hatası!');
            return;
        }
        res.json(results);
    });
});

// API: Yeni Etkinlik Ekle
app.post('/etkinlikler', (req, res) => {
    const { isim, tarih } = req.body;
    if (!isim || !tarih) {
        return res.status(400).send('❌ Eksik Bilgi! "isim" ve "tarih" gerekli.');
    }

    db.query('INSERT INTO etkinlikler (isim, tarih) VALUES (?, ?)', [isim, tarih], (err, result) => {
        if (err) {
            res.status(500).send('❌ Etkinlik Eklenemedi!');
            return;
        }
        res.json({ message: '✅ Etkinlik Başarıyla Eklendi!', id: result.insertId });
    });
});

// API: Belirli Bir Etkinliği Sil
app.delete('/etkinlikler/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM etkinlikler WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).send('❌ Etkinlik Silinemedi!');
            return;
        }
        res.json({ message: '✅ Etkinlik Başarıyla Silindi!' });
    });
});

// Sunucuyu Başlat
app.listen(port, () => {
    console.log(`✅ Server ${port} portunda çalışıyor... 🚀`);
});
