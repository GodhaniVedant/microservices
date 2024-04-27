const mysql = require("mysql2");
const dbConfig = require("../config/config");

const Supplier = function (supplier) {
    this.id = supplier.id;
    this.name = supplier.name;
    this.address = supplier.address;
    this.city = supplier.city;
    this.state = supplier.state;
    this.email = supplier.email;
    this.phone = supplier.phone;
};

Supplier.getAll = result => {
    db_connection.query("SELECT * FROM suppliers", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("suppliers: ", res);
        result(null, res);
    });
};


Supplier.findById = (supplierId, result) => {
    db_connection.query(`SELECT * FROM suppliers WHERE id = ${supplierId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found supplier: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

module.exports = Supplier;
