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
	try {
		const requestBody = req.body;
		res.json({
			message: "Data has been received.",
			data: requestBody
		});
	} catch (error) {
      console.log(error);
      res.status(500).json({
         message: "Internal server error.",
         error: error.message      
      })
   }
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
