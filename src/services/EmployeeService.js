export class EmployeeService {
    static employeeList = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            isSelected: false
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            isSelected: false
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            isSelected: false
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            isSelected: false
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            isSelected: false
        },
        {
            "id": 6,
            "name": "John Doe",
            "username": "JJ",
            "email": "John@annie.ca",
            isSelected: false
        },
        {
            "id": 7,
            "name": "Charles Mackins",
            "username": "Charlie",
            "email": "charlie@mac.com",
            isSelected: false
        },
        {
            "id": 8,
            "name": "Dr. Tolstoy",
            "username": "cloe",
            "email": "dr@gmail.com",
            isSelected: false
        },
        {
            "id": 9,
            "name": "David Biden",
            "username": "Dev",
            "email": "david@yahoo.co",
            isSelected: true
        },
        {
            "id": 10,
            "name": "Peter Klen",
            "username": "peter",
            "email": "klen@peter.com",
            isSelected: false
        }
    ];

    static getAllEmployees() {
        return this.employeeList;
    }
}
