import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://Shreyansh:Shreyansh123@ac-zrnv1jh-shard-00-00.q0t7byd.mongodb.net:27017,ac-zrnv1jh-shard-00-01.q0t7byd.mongodb.net:27017,ac-zrnv1jh-shard-00-02.q0t7byd.mongodb.net:27017/GOOGLE_DOCS_CLONE?ssl=true&replicaSet=atlas-6a7d8a-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
      await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
      console.log('Database Connected');
    } catch(error){
        console.log('Error while connecting with database', error);
    }

}
export default Connection;