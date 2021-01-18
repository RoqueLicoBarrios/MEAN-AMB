const { Router } = require ( 'express' )
const employeeCtrl = require('../controllers/employees.controller.js')

const router = Router()
const employeesCtrl = require('../controllers/employees.controller.js')

router.get('/', employeesCtrl.getEmployees )
router.post('/', employeeCtrl.createEmployee )
router.get('/:id',  employeeCtrl.getEmployee)
router.put('/:id', employeeCtrl.editEmployee)
router.delete('/:id', employeeCtrl.deleteEmployee) 

module.exports = router