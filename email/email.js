const nodemailer = require("nodemailer");


module.exports.sendEMail = async (options) => {
  let transporter = nodemailer.createTransport({
      service:"gmail",
      secure: false, // true for 465, false for other ports
      auth: {
        user: "omarmah1907@gmail.com", // generated ethereal user
        pass: "dohgxcwdhdnafibc", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
     transporter.sendMail({
      from: '"Omar" <omarmah1907@gmail.com>', // sender address
      to: options.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `
          <div style="backgroud:#bbf;color:#fff;padding:20px">
              <h1>${options.message}</h1>
              <a href="http://localhost:4000/verify/${options.token}">verify</a>
          </div
      
      
      
      `, // html body
    },(err,info)=>{
          if(err){
              console.log(err);
          }else{
              console.log(info);
          }    
    }); 
}