const express=require('express');
const bodyparser=require('body-parser');

const mysql = require('mysql');

const con = mysql.createConnection(
{
  host: "localhost",
  user: "root",
  password: "manoj@hp",
  database:"manoj",
  port:3306
});


const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function (req,res)
{
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res)
{
  
    var pwd1=req.body.pwd;

    var n1=Number(req.body.num1);
    console.log("num1 is:"+n1);
  
    if (pwd1==="1234")
    {
      // res.send("enter 1 to display tenant list:");
      res.sendFile(__dirname+"/webpage2.html");
  
    }
    else
    {
      res.send("Invalid password");
      console.log("not 16!");
    }
});

app.post("/webpage3.html",function(req,res)
{
  var pt_id=req.body.p_id;

  var n2=Number(req.body.num1);
  console.log("num1 is:"+n2);

  if (pt_id==="1234")
  {
    // res.send("enter 1 to display tenant list:");
    // res.sendFile(__dirname+"/webpage3.html");
    res.send("done");

  }
  else
  {
    res.send("Invalid password");
    console.log("not 16!");
  }
  

});

app.post("/webpage2.html",function(req,res)
{
    
    // var tenant_name=req.body.tenant_name;
    // var due_amount=req.body.due_amount;
    
    // // update(tenant_name,due_amount);
    
    if (req.body.button1)
    {
      res.sendFile(__dirname+"/webpage3.html");
    }

});



// function enter2()
// {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM people", function (err, result, fields) 
//     {
//       if (err) throw err;
//       console.log(result);
//       // console.log(result[0]["lastName"]+":"+result[0]["bDay"]);
//       // var name1=result[0]["lastName"];
//       // var bday=result[0]["bDay"];
//     });
// });
// }

// function enter1()
// {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM people", function (err, result, fields) 
//     {
//       if (err) throw err;
//       for(i=0;i<9;i++)
//       {
//       console.log("tenant name ",i," is:",result[i]["name"]);
//       }
//       // console.log(result[0]["lastName"]+":"+result[0]["bDay"]);
//       // var name1=result[0]["lastName"];
//       // var bday=result[0]["bDay"];
//     });
// });
// }


// function update(tenant_name,due_amount)
// {
//   con.query("SELECT name FROM people", function (err, result, fields) 
//   { 
//     if (err) throw err;
//     console.log(result);

//     for(var i=0;i<8;i++)
//   {
//     if(result[i]["name"]===tenant_name)
//     {
//     console.log("found");
//     // update2(tenant_name,due_amount);
    
//     }
//   }
//   });

// }

// function update2(tenant_name,due_amount)
// {
//   con.query("UPDATE people SET due = due_amount,WHERE name=tenant_name", function (err, result, fields) 
//   { 
//     if (err) throw err;
//     console.log(result);
//     console.log("doneeee");
//   });
// }



app.listen(3000,function()
{
    console.log("server started at port 3000");
});
