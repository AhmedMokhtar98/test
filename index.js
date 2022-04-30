const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
var cors = require('cors');
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(cors({
	origin: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
}));
app.use('/public/users', express.static('public/users'));


//Create Database Connection
const conn = mysql.createConnection({
	host: "brhmnlehwxoxyxaqpap1-mysql.services.clever-cloud.com",
	user: "uqxbd9jzbiyzh3ed",
	password: "as7RL6xu3Yxr2bTPs1sc",
	database: "brhmnlehwxoxyxaqpap1",
});


app.get("/api/users-test", (req, res) => {
	let sql = "SELECT * from users";
	let query = conn.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result);
	});
});




const PORT = 8000;

app.listen(process.env.PORT || PORT, () => {
	console.log(`server started on port ${PORT} `);
});
conn.connect((err) => {
	if (err) throw err;
	console.log("MySQL connected");
});

