const orm = require("../config/orm");

const myTable = "burgers";

// Code that calls the ORM functions:
const burger = {
    //Select All
    select: function (callBack) {
        orm.selectAll(myTable, function (res) {
            callBack(res);
        });
    },
    //Insert
    create: function (column, value, callBack) {
        orm.insertOne(myTable, column, value, function (res) {
            callBack(res);
        });
    },
    //Update
    update: function (column, newValue, whereColumn, whereValue, callBack) {
        orm.updateOne(myTable, column, newValue, whereColumn, whereValue, function (res) {
            callBack(res);
        });
    }
};

module.exports = burger;
