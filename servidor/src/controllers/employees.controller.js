const employeeCtrl ={}

const Employee = require('../models/Employee')
employeeCtrl.getEmployees = async (req, res) => {
   const employees = await  Employee.find()
   res.json(employees)
}
employeeCtrl.createEmployee = async (req, res) => {

    const newEmployee = new Employee (req.body) //son los datos que envia el usuario
    await newEmployee.save()

    console.log(newEmployee)
    res.send({status:'Empreado Creado'})
}
employeeCtrl.getEmployee = async (req, res) => {
   const employee = await Employee.findById(req.params.id)
    res.send(employee)
}

employeeCtrl.editEmployee = async (req, res) => {

    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Empleado Modificado'})
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Empleado Eliminado'})
}


module.exports = employeeCtrl;