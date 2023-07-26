import express from "express";
import { ManagerModel, EmployeeModel } from "./db";
import { Person } from "./types";
import bodyParser from "body-parser";

const app: express.Application = express();
const port: number = 3000;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get("/status", (_req, _res) => {
  _res.json({ status: "✅" });
});

app.get("/", (_req, _res) => {
  _res.send("Home");
});

/* MANAGER */
// login
// register
// update
app
  .route("/manager")
  .get((req, res) => {
    const person: Person = req.body;
    const manager = ManagerModel.findOne({ email: person.email , password: person.password });
    res.json(manager);
  })
  .post((req, res) => {
    const person: Person = req.body;
    const manager = new ManagerModel({
      name: person.name,
      email: person.email,
      phoneNumber: person.phoneNumber,
      password: person.password,
    });
    res.json(manager);
  })
  .put((req, res) => {})
  .delete((req, res) => {});

// get all sheets by manager id
app.get("/sheet/manager/:id", () => {});

/* EMPLOYEE */
// add employee
// update employee
// remove employee
app
  .route("/employee")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

// send sheet
// update sheet by id
// delete sheet by id
app
  .route("/sheet/:id")
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

// get all sheets by manager id
app.get("/sheet/manager/:id", () => {});
// get sheets for employee
app.get("/sheet/employee/:id", () => {});

app.listen(port, () => {
  console.log(`🚀 Lets go! http://localhost:${port} 🚀`);
});
