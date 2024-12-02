export const test = () => {
    

    // const name: string = "Mike"; //string
    // const age: number = 25; //number
    // const isStudent: boolean = false; //boolean
    // const hobbies: string[] = ["Reading", "Coding", "Gaming"]; //array
    // const address: object = {
    //     street: "123 Main St",
    //     city: "New York",
    //     state: "NY"
    // }; //object
    // const today: Date = new Date(); //date
    // const none: null = null; //null
    // const notDefined: undefined = undefined; //undefined
    // const random: any = "Hello"; //any
    // const gender: "male" | "female" = "male"; //union
    // const value: string | number | null = 25; //union

    // // hasTom is an optional parameter 入れても入れなくてもいいよ
    // const reverseArray = (arr: string[], hasTom?:boolean): string[] => {
    //     const reverseArray: string[] = [];
    //     let index: number = arr.length - 1;
    //     while (index >= 0) {
    //         reverseArray.push(arr[index]);
    //         index--;
    //     }

    //     if (hasTom) {
    //         reverseArray.push("Tom");
    //     }
        
    //     return reverseArray;
    // }

    // console.log(reverseArray(["a", "b", "c", "d", "e"], true));


    const user = {
        userId: 1,
        name: "Mike",
        age: 25,
        email: "mike@gmail.com",
        isActive: true,
    }

    interface UserProps {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }

    interface AdminUser extends UserProps {
        role: string;
    }

    class User {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;

        constructor(userId: number, name:string, age:number, email:string, isActive:boolean) {
            this.userId = user.userId;
            this.name = user.name;
            this.age = user.age;
            this.email = user.email;
            this.isActive = user.isActive;
        }

        public getUserInfo(): string {
            return `Name: ${this.name}, Email: ${this.email}`;
        }

        static sayHelloWorld(): void {
            console.log("Hello World");
        }

        
    }

    const AdminUser = new User(1, "Tom", 25, "Tom@gmail.com", true);
    User.sayHelloWorld();
    AdminUser.getUserInfo();

    class user1 extends User {
        role: string;

        constructor(userId: number, name:string, age:number, email:string, isActive:boolean, role:string) {
            super(userId, name, age, email, isActive);
            this.role = role;

            this.getUserInfo();
        }
    }



    const foo = <T>(arg: T): T => {
        return arg;
    }

    foo<string>("Hello");
    

}

