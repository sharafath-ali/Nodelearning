const fsPromises= require('fs').promises;
const path=require('path')
const fileOpterations= async()=>{
    try{
      await fsPromises.writeFile('./gf.txt','hi sherose');

      const data=await fsPromises.readFile(path.join(__dirname,'gf.txt'),'utf8')
      
      await fsPromises.writeFile('./sherose.txt',`${data} is ${data}`);

      const sherosetxt=await fsPromises.readFile(path.join(__dirname,'sherose.txt'),'utf8')
     
      console.log(sherosetxt);
     
      await fsPromises.appendFile(path.join(__dirname,'gf.txt'),'.i am sharafath')
      
     await fsPromises.unlink(path.join(__dirname,'sharafath.txt'))

      await fsPromises.rename(path.join(__dirname,'hello.txt'),path.join(__dirname,'sharafath.txt'))
    }catch(err){
     console.log(err);
    }
}

fileOpterations()

