const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

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
const chisothachthuc = require('./module/15)chisothachthuc.js');
const chisonam = require('./module/16)chisonam.js');
const chisothang = require('./module/17)chisothang.js');
const chisongay = require('./module/18)chisongay.js');

app.get('/', (req, res) => {
    const name = req.query.name ; // Default value
    const birth = req.query.birth; // Default value

    let response = {
        chisoduongdoi: chisoduongdoi(birth),
        chisosumenh: chisosumenh(name),
        chisotruongthanh: chisotruongthanh(name, birth),
        chisolinhhon: chisolinhhon(name),
        chisocanbang: chisocanbang(name),
        chisonhancach: chisonhancach(name),
        chisongaysinh: chisongaysinh(birth),
        chisolienket: chisolienket(name, birth),
        linhhonnhancach: linhhonnhancach(name),
        chisothieu: chisothieu(name),
        sucmanhtiemthuc: sucmanhtiemthuc(name),
        chisodamme: chisodamme(name),
        tuduylytri: tuduylytri(name, birth),
        chisochang: chisochang(birth),
        chisothachthuc: chisothachthuc(birth),
        chisothang: chisothang(birth, 6, 2025), // Example for June 2025
        chisongay: chisongay(birth, 20, 6, 2021) // Example for June 20, 2021
    };

    res.json(response);
});


// Airtable API configuration
const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appHYfSPllaGJe5fp/tonghopchiso';
const AIRTABLE_API_TOKEN = 'pat7vOlL1umYuSbcM.1476cbebe270640b2e85f3c7ffec9ff0eb88aaca4525ea36f97e4c8f59fd8820'; // Replace with your actual token

// Lưu trữ dữ liệu Airtable trong bộ nhớ
let airtableData = [];

// Fetch dữ liệu Airtable chỉ một lần
const fetchAirtableData = async () => {
    if (airtableData.length === 0) { // Nếu dữ liệu chưa được fetch
        try {
            const response = await axios.get(AIRTABLE_API_URL, {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_API_TOKEN}`
                }
            });
            airtableData = response.data.records; // Lưu trữ dữ liệu vào bộ nhớ
            console.log('Airtable data fetched and stored in memory');
        } catch (error) {
            console.error('Error fetching data from Airtable:', error);
            throw error;
        }
    }
};

// Function to match the computed value with Airtable meaning
const getMeaningFromAirtable = (number) => {
    const record = airtableData.find((r) => parseInt(r.fields.Number) === number);
    return record ? record.fields.Meaning : 'No meaning found for this number';
};

app.get('/get', async (req, res) => {
    const name = "Nguyễn Hoàng Hải"; 
    const birth = "30/12/1999"; 

    // Fetch dữ liệu Airtable một lần nếu chưa được fetch
    await fetchAirtableData();

    // Thực hiện tính toán các chỉ số
    const chisoduongdoiValue = chisoduongdoi(birth);
    const chisosumenhValue = chisosumenh(name);
    const chisotruongthanhValue = chisotruongthanh(name, birth);
    const chisolinhhonValue = chisolinhhon(name);
    const chisocanbangValue = chisocanbang(name);
    const chisonhancachValue = chisonhancach(name);
    const chisongaysinhValue = chisongaysinh(birth);
    const chisolienketValue = chisolienket(name, birth);
    const linhhonnhancachValue = linhhonnhancach(name);
    const chisothieuValue = chisothieu(name);
    const sucmanhtiemthucValue = sucmanhtiemthuc(name);
    const chisodammeValue = chisodamme(name);
    const tuduylytriValue = tuduylytri(name, birth);
    const chisochangValue = chisochang(birth);
    const chisothachthucValue = chisothachthuc(birth);
    const chisothangValue = chisothang(birth, 6, 2025); // Ví dụ cho tháng 6, 2025
    const chisongayValue = chisongay(birth, 20, 6, 2021); // Ví dụ cho ngày 20 tháng 6, 2021

    // Lấy meaning từ Airtable
    const chisoduongdoiMeaning = getMeaningFromAirtable(chisoduongdoiValue);
    const chisosumenhMeaning = getMeaningFromAirtable(chisosumenhValue);
    const chisotruongthanhMeaning = getMeaningFromAirtable(chisotruongthanhValue);
    const chisolinhhonMeaning = getMeaningFromAirtable(chisolinhhonValue);
    const chisocanbangMeaning = getMeaningFromAirtable(chisocanbangValue);
    const chisonhancachMeaning = getMeaningFromAirtable(chisonhancachValue);
    const chisongaysinhMeaning = getMeaningFromAirtable(chisongaysinhValue);
    const chisolienketMeaning = getMeaningFromAirtable(chisolienketValue);
    const linhhonnhancachMeaning = getMeaningFromAirtable(linhhonnhancachValue);
    const chisothieuMeaning = getMeaningFromAirtable(chisothieuValue);
    const sucmanhtiemthucMeaning = getMeaningFromAirtable(sucmanhtiemthucValue);
    const chisodammeMeaning = getMeaningFromAirtable(chisodammeValue);
    const tuduylytriMeaning = getMeaningFromAirtable(tuduylytriValue);
    const chisochangMeaning = getMeaningFromAirtable(chisochangValue);
    const chisothachthucMeaning = getMeaningFromAirtable(chisothachthucValue);
    const chisothangMeaning = getMeaningFromAirtable(chisothangValue);
    const chisongayMeaning = getMeaningFromAirtable(chisongayValue);

    let response = {
        chisoduongdoi: { value: chisoduongdoiValue, meaning: chisoduongdoiMeaning },
        chisosumenh: { value: chisosumenhValue, meaning: chisosumenhMeaning },
        chisotruongthanh: { value: chisotruongthanhValue, meaning: chisotruongthanhMeaning },
        chisolinhhon: { value: chisolinhhonValue, meaning: chisolinhhonMeaning },
        chisocanbang: { value: chisocanbangValue, meaning: chisocanbangMeaning },
        chisonhancach: { value: chisonhancachValue, meaning: chisonhancachMeaning },
        chisongaysinh: { value: chisongaysinhValue, meaning: chisongaysinhMeaning },
        chisolienket: { value: chisolienketValue, meaning: chisolienketMeaning },
        linhhonnhancach: { value: linhhonnhancachValue, meaning: linhhonnhancachMeaning },
        chisothieu: { value: chisothieuValue, meaning: chisothieuMeaning },
        sucmanhtiemthuc: { value: sucmanhtiemthucValue, meaning: sucmanhtiemthucMeaning },
        chisodamme: { value: chisodammeValue, meaning: chisodammeMeaning },
        tuduylytri: { value: tuduylytriValue, meaning: tuduylytriMeaning },
        chisochang: { value: chisochangValue, meaning: chisochangMeaning },
        chisothachthuc: { value: chisothachthucValue, meaning: chisothachthucMeaning },
        chisothang: { value: chisothangValue, meaning: chisothangMeaning },
        chisongay: { value: chisongayValue, meaning: chisongayMeaning }
    };

    res.json(response);
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


