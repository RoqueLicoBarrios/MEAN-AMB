const { Schema, model} = require ('mongoose');

const employeeSchema = new Schema (
    {
        name: {type: String, required: true},
        position: {type: String, require: true},
        office: {type: String, require: true},
        salary: {type: String, require: true}
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

module.exports = model("Employees", employeeSchema ) 