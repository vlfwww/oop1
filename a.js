// 1.
//  Создайте класс Car, воспользуйтесь конструктором для задания модели и года выпуска 
// автомобиля. Добавьте метод start, который возвращает строку: Машина {model} завелась.
//  const car = new Car("Toyota", 2020);
//  console.log(car.start()); // Машина Toyota завелась.

// class Car{
//     constructor(model,year){
//         this.model=model;
//         this.year=year;
//     }
//     start =()=>{return `Машина ${this.model} ${this.year} года завелась`}
// }
// const car = new Car("Toyota", 2020);
// console.log(car.start()); 

//  2. Создайте класс Rectangle, в котором с помощью конструктора передаются значения ширины и 
// высоты. Добавьте метод getArea, возвращающий площадь прямоугольника (произведение 
// ширины на высоту).
//  const rect = new Rectangle(5, 10);
//  console.log(rect.getArea()); // 50

// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     getArea = () => this.width*this.height; 
// }
// const rect = new Rectangle(5, 10);
// console.log(rect.getArea()); // 50

//  3. Создайте класс User с конструктором, принимающим имя и email пользователя. Реализуйте метод 
// changeEmail, который обновляет email, и метод getEmail, возвращающий текущий email.
//  const user = new User("Иван", "ivan@example.com");
//  user.changeEmail("new@example.com");
//  console.log(user.getEmail()); // new@example.com

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     getEmail = ()=> this.email;
//     changeEmail=()=> this.email = 'new@example.com';
// }
// const user = new User("Иван", "ivan@example.com");
// user.changeEmail("new@example.com");
// console.log(user.getEmail()); // new@example.com

// 4.
//  Создайте класс Student, воспользуйтесь конструктором для задания имени и возраста студента. 
// Добавьте метод isAdult, который возвращает true, если возраст больше или равен 18, иначе — false.
//  const s1 = new Student("Олег", 20);
//  const s2 = new Student("Маша", 16);
//  console.log(s1.isAdult()); // true
//  console.log(s2.isAdult()); // false

// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     isAdult = ()=> {return (this.age>=18)?true:false}
// }
// const s1 = new Student("Олег", 20);
//  const s2 = new Student("Маша", 16);
//  console.log(s1.isAdult()); // true
//  console.log(s2.isAdult()); // false

//  5. Создайте класс Counter, при этом в конструкторе не требуется передавать параметры. 
// Инициализируйте внутреннее свойство count со значением 0. Реализуйте методы increment
//  (увеличивает счётчик на 1) и getCount (возвращает текущее значение счётчика).
//  const c = new Counter();
//  c.increment();
//  c.increment();
//  console.log(c.getCount()); // 2

// class Counter{
//     count = 0;
//     increment=()=>this.count++;
//     getCount=()=>this.count;
// }
// const c = new Counter();
//  c.increment();
//  c.increment();
//  console.log(c.getCount()); // 2


// 6.
//  Создайте класс TodoList, инициализируйте в конструкторе пустой массив tasks. Реализуйте метод 
// addTask(task) для добавления новой задачи в массив, а также метод showTasks(), возвращающий 
// текущий список задач.
//  const list = new TodoList();
//  list.addTask("Купить молоко");
//  list.addTask("Позвонить другу");
//  console.log(list.showTasks()); // ["Купить молоко", "Позвонить другу"]

// class TodoList{
//     constructor(){
//         this.arr=[];
//     }
//     addTask=(task)=>this.arr.push(task);
//     showTasks=()=>this.arr;
// }
// const list = new TodoList();
// list.addTask("Купить молоко");
// list.addTask("Позвонить другу");
// console.log(list.showTasks()); // ["Купить молоко", "Позвонить другу"]

//  7. Создайте класс BankAccount, в котором конструктор принимает начальный баланс. Реализуйте 
// методы deposit(amount) (увеличивает баланс), withdraw(amount) (уменьшает, если достаточно 
// средств), и getBalance() (возвращает текущий баланс).
//  const acc = new BankAccount(100);
//  acc.deposit(50);
//  acc.withdraw(30);
//  console.log(acc.getBalance()); // 120

// class BankAccount{
//     constructor(balance){
//         this.balance=balance;
//     }
//     deposit=(amount)=>this.balance+=amount;
//     withdraw=(amount)=>{return (this.balance>=amount)?this.balance=this.balance-amount:'Недостаточно средств'};
//     getBalance=()=>this.balance;
// }
// const acc = new BankAccount(100);
//  acc.deposit(50);
//  acc.withdraw(30);
//  console.log(acc.getBalance()); // 120

// 8.
//  Создайте класс Shop, в котором с помощью конструктора задается массив товаров products. 
// Каждый товар должен быть объектом с полями name (название) и price (цена). Реализуйте метод 
// getExpensiveProducts(minPrice), который возвращает массив товаров, цена которых больше либо 
// равна значению minPrice. Для фильтрации воспользуйтесь методом filter. Также реализуйте метод 
// getProductNames(), который возвращает массив названий всех товаров (используйте метод map).
//  const shop = new Shop([
//  { name: "Хлеб", price: 40 },
//  { name: "Молоко", price: 60 },
//  { name: "Сыр", price: 150 }
//  ]);
//  console.log(shop.getExpensiveProducts(50));
//  // [{ name: "Молоко", price: 60 }, { name: "Сыр", price: 150 }]
//  console.log(shop.getProductNames());
//  // ["Хлеб", "Молоко", "Сыр"]

// class Shop{
//     constructor(arr){
//         this.arr=arr;
//     }
//     getExpensiveProducts=(minPrice)=>this.arr.filter(el=>el.price>=minPrice);
//     getProductNames=()=>this.arr.map(el=>el.name)
// }
// const shop = new Shop([
//      { name: "Хлеб", price: 40 },
//      { name: "Молоко", price: 60 },
//      { name: "Сыр", price: 150 }
// ]);
// console.log(shop.getExpensiveProducts(50));
// // [{ name: "Молоко", price: 60 }, { name: "Сыр", price: 150 }]
// console.log(shop.getProductNames());
// // ["Хлеб", "Молоко", "Сыр"]

