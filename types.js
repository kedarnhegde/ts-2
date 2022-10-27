"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["EDITOR"] = 3] = "EDITOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Kedar Hegde',
    age: 22,
    hobbies: ['Sports', 'Anime'],
    role: [1, 'admin'],
    roleId: Role.ADMIN
};
person.role.push('editor'); // push is allowed
console.log(person);
for (const hobby in person.hobbies) {
    console.log(hobby);
}
