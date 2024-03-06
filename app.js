const express = require("express");
const cors = require("cors");


const app = express();
const port = 5090;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Simple API for Ahmad.");
});

app.post("/", (req, res) => {
	const requestBody = req.body;
	res.json({
		message: "Data has been received.",
		data: requestBody
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
