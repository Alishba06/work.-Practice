//peractice code 
   
   //if and else statment

// let alishba:string  = "cut girl";

// if( alishba === "cut girl"){
//     console.log("alisbha is a cut girl");

// }else if(alishba === "not cut"){
//     console.log("alishba is a not cut")
// }else{
//     console.log("your are rong")
// }

// switch statment

//   let oneDayoff  = "Monday";
  
//   switch(oneDayoff){

//     case"sunday":
//         console.log("go karachi.");
//         break;
//     case"Monday":
//         console.log("eating beryani.");
//         break;
//     default:
//         console.log("my hobby.")    

//  }

// a simple quiz cerate if and else statments

//   let quiz: string = "good"
   
//   if(quiz === "good"){
//     console.log("your answer good")
//   }else{
//     console.log("your answer are not good ")
//   };

 // Evaluating a Numbar Game if and else useing
  
    // let member1: number = 3;
    // let member2: number = 4;
    // let terget: number = 8;

    // if(member1 < terget){
    //     console.log("your memeber1 loss ");
    // }else if(member1 > terget){
    //     console.log("your member1 level high");
    // }else{
    //     console.log("your member1 correctly ")
    // }if(member2 < terget){
    //     console.log("your memeber2 loss")
    // }else if(member2 > terget){
    //     console.log("your memeber2 level high")
    // }else{
    //    console.log("sorry are you correctly")
    // }

    // a simple game rock paper scissore

    // let player1: string = "Rock";
    // let player2: string = "Scissore";

    // if (player1 === player2){
    //     console.log("It's a tia!")   
    // }else if((player1 === "Rock" && player2 === "Scissore") ||
    //      (player1 === "Scissore" && player2 === "paper")  ||
    //      (player1 === "paper" && player2 === "Rock")){
    //         console.log("player1 win");
    //      }else{
    //         console.log("player2 win");
    //      }
 

   //Comparison operators

      // let a = 5;

      // let b = 7;

      // let isEqual = (a == b);// false
      // let isNotEqul = (a != b);// true
      // let isGreaterThan = (b > a); //true
      // let isLessThan = (b < a); // false
  

   
    //Logical operators

   // let c = 8;

   // let d = 10;
   
   // let LogicalAnd = (c > 0) && (d > 0) ; //true
   // let LogicalOr = ( c < 0 ) || (d > 0); // true
   // let LogicalNot = ! (c > 0) ; // false



   function halffryEgg(egg:number,butter:number,salt:number): number{
      return egg + butter + salt;
   }
   let answer: number = halffryEgg( 1 , 1.5 ,2)

   console.log(answer)
      
   function addNumber(a:number, b:number): number{
      return a + b;
   }
   let response: number = addNumber( 5 , 3)

   console.log(response)

   function calculateArea(width:number,height:number): number{
      return width * height
   }
   let result: number = calculateArea(100 , 50)

   console.log(result)