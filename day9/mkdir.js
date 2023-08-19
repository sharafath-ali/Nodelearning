const fs=require('fs')

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) console.log(err);
        console.log('directory created');
    })
}else{
    console.log('new dir already exist');
}

if(fs.existsSync('./new')){
    fs.rmdir('./new',(err)=>{
        if(err) console.log(err);
        console.log('directory removed');
    })
}else{
    console.log('new dir doesnot exist');
}