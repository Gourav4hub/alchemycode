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
var Student = /** @class */ (function () {
    function Student(roll, name, age, marks) {
        if (roll === void 0) { roll = undefined; }
        if (name === void 0) { name = undefined; }
        if (age === void 0) { age = undefined; }
        if (marks === void 0) { marks = undefined; }
        this.roll = roll;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    Student.prototype.show = function () {
        console.log("\nRoll : ", this.roll);
        console.log("Name : ", this.name);
        console.log("Age : ", this.age);
        console.log("Marks : ", this.marks);
    };
    return Student;
}());
var CS = /** @class */ (function (_super) {
    __extends(CS, _super);
    function CS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CS;
}(Student));
var ob1 = new Student(101, "Vikas", 23, 343.33);
var ob2 = new Student();
ob1.show();
ob2.show();
console.log(ob1.roll);
