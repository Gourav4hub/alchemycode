var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    Employee.prototype.getName = function () { return this.name; };
    Employee.prototype.getPhone = function () { return this.phone; };
    Employee.prototype.setName = function (name) { this.name = name; };
    Employee.prototype.setPhone = function (phone) { this.phone = phone; };
    Employee.prototype.show = function () {
        console.log("\nName : ", this.name);
        console.log("Phone : ", this.phone);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, phone, department, salary) {
        var _this = _super.call(this, name, phone) || this;
        _this.department = department;
        _this.salary = salary;
        return _this;
    }
    Manager.prototype.getDepartment = function () { return this.department; };
    Manager.prototype.getSalary = function () { return this.salary; };
    Manager.prototype.setDepartment = function (department) { this.department = department; };
    Manager.prototype.setSalary = function (salary) { this.salary = salary; };
    Manager.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log("Department : ", this.department);
        console.log("Salary : ", this.salary);
    };
    return Manager;
}(Employee));
var ob1 = new Manager("Vikas", "90138923123", "Sales", 34500);
ob1.show();
