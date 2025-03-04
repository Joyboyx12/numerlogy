const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const chisoduongdoi = require('./module/1)duongdoi.js');
const chisosumenh = require('./module/2)sumenh.js');
const chisotruongthanh = require('./module/3)truongthanh.js');
const chisolinhhon = require('./module/4)linhhon.js');
const chisocanbang = require('./module/5)canbang.js');
const chisonhancach = require('./module/6)nhancach.js');
const chisongaysinh = require('./module/7)ngaysinh.js');
const chisolienket = require('./module/8)duongdoisumenh.js');
const linhhonnhancach = require('./module/9)linhhon-nhancach.js');
const chisothieu = require('./module/10)chisothieu.js');
const sucmanhtiemthuc = require('./module/11)sucmanhtiemthuc.js');
const chisodamme = require('./module/12)damme.js');
const tuduylytri = require('./module/13)tuduylytri.js');
const chisochang = require('./module/14)chisochang.js');
const chisothachthuc = require('./module/15)chisovuotkho.js');
const chisonoinam = require('./module/16)chisonoinam.js');
const chisonoithang = require('./module/17)chisonoithang.js');
const chisongay = require('./module/18)chisonoingay.js');
const tenrieng = require('./module/19)tenrieng.js');
const nonghiep = require('./module/20)nonghiep.js');

const uri = "mongodb+srv://vnh4i99:Lrosp74syv1zkJZw@cluster0.t5twm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res) => {
    const name = req.query.name ; // Default value
    const birth = req.query.birth; // Default value
    var currentTime = new Date()
    let response = {
        chisoduongdoi: chisoduongdoi(birth),
        chisosumenh: chisosumenh(name),
        chisotruongthanh: chisotruongthanh(name, birth),
        chisolinhhon: chisolinhhon(name),
        chisocanbang: chisocanbang(name),
        chisonhancach: chisonhancach(name),
        chisongaysinh: chisongaysinh(birth),
        chisodd_sm: chisolienket(name, birth),
        linhhonnhancach: linhhonnhancach(name),
        chisothieu: chisothieu(name),
        sucmanhtiemthuc: sucmanhtiemthuc(name),
        chisodamme: chisodamme(name),
        tuduylytri: tuduylytri(name, birth),
        chisochang: chisochang(birth),
        chisothachthuc: chisothachthuc(birth),
        tenrieng: tenrieng(name),
        nonghiep: nonghiep(name, birth),
        noinam: chisonoinam(birth,currentTime.getFullYear),
        chisonoithang: chisothang(birth), // Example for June 2025
        chisongay: chisongay(birth, 20, 6, 2021) // Example for June 20, 2021
    };

    res.json(response);
});



// Hàm khởi động server và kết nối MongoDB, định nghĩa các endpoint liên quan đến DB
async function startServer() {
    try {
      // Kết nối đến MongoDB
      await client.connect();
      console.log("Đã kết nối thành công đến MongoDB");
  
      // Chọn database và các collection
      const db = client.db("ThanSoHocDB");
      const duongDoiCollection = db.collection("ChiSoDuongDoi");
      const suMenhCollection = db.collection("ChiSoSuMenh");
  
      // Endpoint cho Chỉ Số Đường Đời, ví dụ: /chisoduongdoi/1
      app.get('/chisoduongdoi/:so', async (req, res) => {
        try {
          const soValue = parseInt(req.params.so);
          const result = await duongDoiCollection.findOne({ so: soValue });
          if (!result) {
            return res.status(404).json({ message: 'Không tìm thấy dữ liệu cho chỉ số đường đời' });
          }
          res.json(result);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
  
      // Endpoint cho Chỉ Số Sứ Mệnh, ví dụ: /chisolinhhon/2
      app.get('/chisolinhhon/:so', async (req, res) => {
        try {
          const soValue = parseInt(req.params.so);
          const result = await suMenhCollection.findOne({ so: soValue });
          if (!result) {
            return res.status(404).json({ message: 'Không tìm thấy dữ liệu cho chỉ số sứ mệnh' });
          }
          res.json(result);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
  
      // Khởi động server
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (err) {
      console.error("Lỗi khi kết nối đến MongoDB:", err);
    }
  }

  // Gọi hàm khởi động server
startServer().catch(console.error);