const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "dhanush@123",
  database: "mypro",
});
app.post("/register", (req, res) => {
    const usermail = req.body.usermail;
    const mobileno= req.body.mobileno;
    const password= req.body.password;
    
  
    db.query(
      "INSERT INTO register (usermail,mobileno,password1) VALUES (?,?,?)",
      [usermail,mobileno,password],
      (err, result) => {
        if (result) {
          res.send(result);
        }else{
            res.send({message: "enter correctly"});
        }
      }
    );
  });
app.post("/login", (req, res) => {
    const usermail = req.body.usermail;
    const password= req.body.password;
  
    db.query(
      "select * from register where usermail=? AND password1 =?",
      [usermail,password],
      (err, result) => {
        if (err) {
          req.setEncoding({err:err});
        }
        else {
            if(result.length>0){
                res.send(result);
            }else{
                res.send({message: "wrong ans"})
            }
          }
      } 
    );
  });

  app.post("/adlogin", (req, res) => {
    const usermail = req.body.usermail;
    const password= req.body.password;
  
    db.query(
      "select * from adminmobile where usermail= ? AND password1 =?",
      [usermail,password],
      (err, result) => {
        if (err) {
          req.setEncoding({err:err});
        }
        else {
            if(result.length>0){
                res.send(result);
            }else{
                res.send({message: "wrong ans"})
            }
          }
      } 
    );
  });

 
  

  app.post("/booking", (req, res) => {
    const vechiclename=req.body.vechiclename;
    const Vechicleno=req.body.Vechicleno;
    const dateofbooking=req.body.dateofbooking;
    const service=req.body.service;
    const cusname=req.body.cusname;
    const cusno=req.body.cusno;
    const cusaddr=req.body.cusaddr;
    const pincode=req.body.pincode;
    
    db.query(
      "INSERT INTO Booking (vechiclename, Vechicleno,dateofbooking,service,cusname,cusno,cusaddr, pincode) VALUES (?,?,?,?,?,?,?,?)",
      [vechiclename, Vechicleno,dateofbooking,service,cusname,cusno,cusaddr, pincode],
      (err, result) => {
        if (result) {
          res.send(result);
        }else{
            res.send({message: "enter correctly"});
        }
      }
    );
  });

  app.put("/update", (req, res) => {
    const id = req.body.id;
    const vechiclename=req.body.vechiclename;
    const Vechicleno=req.body.Vechicleno;
    const dateofbooking=req.body.dateofbooking;
    const service=req.body.service;
    const cusname=req.body.cusname;
    const cusno=req.body.cusno;
    const cusaddr=req.body.cusaddr;
    const pincode=req.body.pincode;
    
    db.query(
      "UPDATE Booking set vechiclename=?, Vechicleno=?,dateofbooking=?,service=?,cusname=?,cusno,=?cusaddr=?, pincode=? WHERE id = ?",
      [vechiclename, Vechicleno,dateofbooking,service,cusname,cusno,cusaddr, pincode, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  app.get('/search/:query', (req, res) => {
    const query = req.params.query;
    const sql = `SELECT * FROM register WHERE  usermail= ${query}`;
  
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Booking WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

    

  

  app.get("/disp", (req, res) => {
   
    db.query("SELECT * FROM Booking",(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.get("/disp1", (req, res) => {
   
    db.query("SELECT * FROM ownerup",(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });
