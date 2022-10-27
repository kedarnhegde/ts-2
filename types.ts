enum Role {ADMIN, READ_ONLY, USER, EDITOR};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
    roleId: number;
} = {
    name: 'Kedar Hegde',
    age: 22,
    hobbies: ['Sports', 'Anime'],
    role: [1, 'admin'],
    roleId: Role.ADMIN
};

person.role.push('editor');    // push is allowed
console.log(person);


for(const hobby in person.hobbies) {
    console.log(hobby); 
}

