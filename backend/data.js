import bcrypt from "bcrypt";
const data = {
  user: [
    {
      name: "tqlong1609",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234567", 8),
      isAdmin: true,
    },
    {
      name: "user1",
      email: "user1@example.com",
      password: bcrypt.hashSync("1234567", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Tasty Steel Soap",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 10,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviewer: 10,
      description:
        "Laborum tempor quis non velit deserunt consectetur nostrud reprehenderit non pariatur non. Sunt ullamco in consectetur non incididunt. Laboris adipisicing anim nulla id adipisicing nulla eu irure non consectetur. Ex cillum sint officia anim.",
      smallImages: [
        "/images/gallery-1.jpg",
        "/images/gallery-2.jpg",
        "/images/gallery-3.jpg",
        "/images/gallery-4.jpg",
      ],
    },
    {
      name: "Refined Soft Pants",
      category: "Pant",
      image: "/images/product-2.jpg",
      price: 20,
      countInStock: 0,
      brand: "Pant",
      rating: 3.5,
      numReviewer: 25,
      description:
        "Incididunt esse in laborum velit. Minim adipisicing sit anim sunt aliqua fugiat ullamco quis tempor incididunt. Velit consectetur do cillum est dolore nostrud adipisicing non elit culpa nisi id dolore deserunt. Enim adipisicing laborum cillum proident consectetur cillum sunt ex. Proident laboris et ipsum proident irure exercitation est quis sit pariatur enim proident aute.",
    },
    {
      name: "Intelligent Soft Salad",
      category: "Pant",
      image: "/images/product-3.jpg",
      price: 15,
      countInStock: 10,
      brand: "Nike",
      rating: 3,
      numReviewer: 7,
      description:
        "Consectetur est eu Lorem elit aliquip quis sunt anim aliqua veniam adipisicing. Laborum qui magna aliquip amet do magna cillum adipisicing consequat. Do officia amet cillum id in amet velit officia officia tempor irure velit ullamco. Sint duis sint eiusmod deserunt voluptate. Labore commodo nostrud dolore sint dolore ex ullamco amet fugiat occaecat. Adipisicing Lorem cupidatat eu tempor fugiat anim dolor qui nostrud deserunt id qui. Nulla incididunt incididunt aliqua incididunt Lorem.",
    },
    {
      name: "Awesome Concrete Mouse",
      category: "Pant",
      image: "/images/product-4.jpg",
      price: 20,
      countInStock: 0,
      brand: "Puma",
      rating: 1.5,
      numReviewer: 40,
      description:
        "Amet Lorem irure ullamco quis cillum mollit dolore do excepteur magna. Incididunt reprehenderit reprehenderit Lorem sint nostrud. Culpa reprehenderit eiusmod labore eu id ut esse deserunt. Eiusmod dolore exercitation tempor do eu laborum ex elit. Consequat elit deserunt consectetur cupidatat nostrud consectetur cillum deserunt dolore minim. Ex consectetur laborum id sint commodo aute irure cupidatat commodo excepteur laboris nisi.",
    },
    {
      name: "Intelligent Granite Pizza",
      category: "Shirts",
      image: "/images/product-5.jpg",
      price: 8,
      countInStock: 10,
      brand: "Nike",
      rating: 4.3,
      numReviewer: 34,
      description:
        "Excepteur mollit amet enim id enim veniam nulla velit ut exercitation incididunt ullamco. Aute esse pariatur nulla est. Labore consequat Lorem ullamco ipsum officia voluptate eu magna fugiat ex. Quis mollit occaecat Lorem consectetur eu voluptate tempor. Aliqua nulla esse adipisicing quis commodo pariatur excepteur consectetur occaecat aliqua esse. Laboris ipsum cupidatat ea consequat. Incididunt anim et eu aliqua do ad nulla.",
    },
    {
      name: "Incredible Metal Bike",
      category: "Shirts",
      image: "/images/product-6.jpg",
      price: 10,
      countInStock: 10,
      brand: "Adidas",
      rating: 5,
      numReviewer: 50,
      description:
        "Occaecat nulla consequat nulla non laboris commodo ut mollit ullamco duis ad. Veniam magna anim anim qui anim nulla Lorem mollit aute. Exercitation est consectetur ullamco aliqua voluptate culpa cillum nostrud reprehenderit magna cillum. Laborum aute nulla ullamco nisi quis ut. In irure ea esse dolore dolor anim.",
    },
    {
      name: "Handcrafted Steel Pizza",
      category: "Shirts",
      image: "/images/product-7.jpg",
      price: 11,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviewer: 10,
      description:
        "Cillum duis officia veniam labore cupidatat deserunt aute ipsum. Id do sunt eu tempor duis incididunt fugiat. Proident enim reprehenderit consequat consectetur qui ipsum consectetur incididunt est.",
    },
    {
      name: "Sleek Metal Soap",
      category: "Pant",
      image: "/images/product-8.jpg",
      price: 12,
      countInStock: 0,
      brand: "Pant",
      rating: 3.5,
      numReviewer: 25,
      description:
        "Consectetur velit est sit et deserunt duis. Eu nostrud veniam ad ex in id. Id eiusmod magna adipisicing est in id nostrud quis sunt minim voluptate nulla do.",
    },
    {
      name: "Handmade Wooden Pizza",
      category: "Pant",
      image: "/images/product-9.jpg",
      price: 16,
      countInStock: 10,
      brand: "Nike",
      rating: 3,
      numReviewer: 7,
      description:
        "Adipisicing nisi exercitation est fugiat quis anim consequat anim ipsum consectetur enim non. Elit excepteur laboris deserunt eiusmod. Esse ullamco elit qui irure laborum reprehenderit ipsum commodo occaecat. Labore ex officia consectetur incididunt eu laboris anim voluptate amet in nisi. Enim adipisicing in officia veniam dolore quis nulla anim ullamco occaecat irure commodo quis.",
    },
    {
      name: "Incredible Plastic Bike",
      category: "Pant",
      image: "/images/product-10.jpg",
      price: 13,
      countInStock: 0,
      brand: "Puma",
      rating: 1.5,
      numReviewer: 40,
      description:
        "Proident labore mollit mollit reprehenderit fugiat ipsum quis veniam sit officia aute veniam officia veniam. Laborum adipisicing et esse eu culpa culpa et nisi voluptate velit deserunt cupidatat excepteur amet. Elit et est occaecat tempor reprehenderit enim do amet sunt magna elit et eiusmod aliqua. Anim laborum sint tempor veniam nostrud irure ipsum officia Lorem sint. Esse qui adipisicing nostrud aliqua reprehenderit anim ullamco duis dolor. Incididunt fugiat sint laborum ea Lorem eu aute est velit. Tempor veniam magna occaecat id tempor est ex voluptate adipisicing anim velit.",
    },
    {
      name: "Licensed Plastic Computer",
      category: "Shirts",
      image: "/images/product-11.jpg",
      price: 16,
      countInStock: 10,
      brand: "Nike",
      rating: 4.3,
      numReviewer: 34,
      description:
        "Nostrud et do sunt voluptate nulla consectetur aute consequat tempor velit non consequat. Ullamco velit est nostrud nostrud. Eu id cillum pariatur incididunt consequat. Culpa laboris laborum voluptate elit. Eu sit eu reprehenderit consectetur nostrud quis. Tempor elit aute Lorem nostrud proident incididunt fugiat officia tempor ullamco. Dolore commodo occaecat nisi nisi est ullamco pariatur officia id.",
    },
    {
      name: "Refined Granite Shoes",
      category: "Shirts",
      image: "/images/product-12.jpg",
      price: 23,
      countInStock: 10,
      brand: "Adidas",
      rating: 0.5,
      numReviewer: 50,
      description:
        "Aute elit ullamco fugiat ex. Velit non ad elit culpa ut consectetur sunt in dolore in exercitation anim. Veniam duis enim officia officia ut consectetur minim do mollit ullamco. Aute eiusmod est fugiat magna culpa anim eiusmod nulla incididunt et. Exercitation sint excepteur dolore eu qui laboris qui. In qui aliquip est ex. Consectetur Lorem tempor fugiat non id quis est labore culpa exercitation magna anim veniam.",
    },
  ],
};

export default data;
