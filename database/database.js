// 1. Kết nối với MongoDB
const { MongoClient } = require('mongodb');
// Lrosp74syv1zkJZw
// mongodb+srv://vnh4i99:Lrosp74syv1zkJZw@cluster0.t5twm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// Thay thế URI dưới đây bằng URI thực tế của bạn
const uri = "mongodb+srv://vnh4i99:Lrosp74syv1zkJZw@cluster0.t5twm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function setupNumerologyDatabase() {
    try {
        // Kết nối với MongoDB server
        await client.connect();
        console.log("Đã kết nối thành công đến MongoDB");

        // Tạo database mới
        const database = client.db("ThanSoHocDB");
        console.log("Đã tạo database: ThanSoHocDB");

        // Tạo các collections
        //const duongDoiCollection = database.collection("ChiSoDuongDoi");
        const suMenhCollection = database.collection("ChiSoSuMenh");
        
        console.log("Đã tạo các collections");

        // Dữ liệu mẫu cho Chỉ Số Đường Đời
        const duongDoiData = [
           
        ];

        // Dữ liệu mẫu cho Chỉ Số Sứ Mệnh
        const suMenhData = [
        
        ];

        // Thêm dữ liệu vào collections
      //  await duongDoiCollection.insertMany(duongDoiData);
        await suMenhCollection.insertMany(suMenhData);
        
        console.log("Đã thêm dữ liệu mẫu vào collections");

        // Kiểm tra dữ liệu đã thêm
       // const duongDoiCount = await duongDoiCollection.countDocuments();
        const suMenhCount = await suMenhCollection.countDocuments();
        
       // console.log(`Số lượng tài liệu trong collection Chỉ Số Đường Đời: ${duongDoiCount}`);
    //    console.log(`Số lượng tài liệu trong collection Chỉ Số Sứ Mệnh: ${suMenhCount}`);

    } finally {
        // Đóng kết nối
        await client.close();
        console.log("Đã đóng kết nối MongoDB");
    }
}

// Gọi hàm setup
setupNumerologyDatabase().catch(console.error);