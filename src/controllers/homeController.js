const ejs = require('ejs');
const fetch =require('node-fetch')
const root = function(req, res) {
    return res.render('home', {title: "Twitter"});
}

const whatsappMessage=async function(req,res){
    console.log(req.query.phonenumber);
    var num=req.query.phonenumber;
    var s="";
    for(var i=0;i<num.length;i++)
    {
      if(num[i]!=' ')
      {
        s+=num[i];
      }
    }
    if(s[0]=='+')
    {
      s=s.substr(1);
    }
    if(s.length==12)
    {
      if(s[0]=='9' && s[1]=='1')
      {
        return res.redirect('https://wa.me/'+s);
      }
    }
    if(s.length>10)
    {
      return res.redirect('back');
    }
    return res.redirect('https://wa.me/91'+s);
}
module.exports={
    root,
    whatsappMessage
}