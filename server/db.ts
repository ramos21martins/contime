import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/contime");
}

const Person = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  date: { type: Date, default: Date.now },
});

const Sheet = new mongoose.Schema({ hours: Number });

export const ManagerModel = mongoose.model("Manager",
  Person.add({ password: mongoose.Schema.ObjectId })
);
export const EmployeeModel = mongoose.model(
  "Employee",
  Person.add({ managerId: mongoose.Schema.ObjectId })
);
export const SheetModel = mongoose.model("Sheet", Sheet);
