// alert("HELLO CLASS")

// 1)
// var arr = [] ;

// 2)
// var arr = [] ;
// console.log(arr)

// 3)  
//  var strings =  ["Muhammad","Anas","Abid"]


// 4) 
//  var numbers =  [205,457,874]


// 5)  
//  var boolean =  [10 < 8]


// 6)  
//  var mixArray =  ["Muhammad",7,7<8]


//7)
// var qualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil.", "PhD"]
// a=1
// for (a=0;a<qualifications.length; ++a){
    
//     document.write(`${a}${qualifications[a]}`)
//     document.write("<br>")
//     // document.write(2+2)
// }


//8)
// var names = ["Anas","Ali","Ahmed"]
// var scores = [400,350,480]

// // console.log(names.length)
// // console.log(names)
// // console.log(names[0])
// // console.log(names[1])
// // console.log(names[2])
// // console.log(400*100/500)

// for(i=0;i<names.length;i++){
//     document.write(`score of ${names[i]} ${scores[i]}.Percentage: ${scores[i]*100/500}%`)
//     document.write("<br>")
    

// }



//9)
// var colorss = ["red","blue","white","black"]
// console.log(colorss)
// document.write(colorss +"<br>")
// var addClBeg = prompt("Add Color at beginning ")
// colorss.unshift(addClBeg)
// document.write(colorss)
// var addClEnd = prompt("Add color at end")
// colorss.push(addClEnd)
// document.write("<br>"+colorss+"<br>")
// colorss.unshift("color1","color2")
// document.write(colorss)
// colorss.shift(colorss[0])
// document.write("<br>"+colorss)
// colorss.pop(colorss)
// document.write("<br>"+colorss)
// var addClAtIndex = prompt("add at index num") 
// var addClAtIndexCl = prompt("addat index color name")
// colorss.splice( addClAtIndex,0,addClAtIndexCl)
// document.write("<br>"+colorss)
// console.log(colorss)
// var clDelIndex = prompt("Delete from index:")
// var qtyDel = prompt("Quantity Delete")
// colorss.splice(clDelIndex,qtyDel)
// document.write(colorss)
// function sortArray(){


//10)
    // var sortNum = [320,230,480,120]
    // sortNum.sort()
    // // console.log(sortNum)
    // document.write("Scores of students :"+sortNum)
    // document.write(" <br>Ordered scores of Students:"+sortNum)
// }
// sortArray();



11)
var cityList = ["karachi","islamabad","quetta","Peshawar"]
var selectedCities = ["karachi","lahore"]



12)
var arr =["This","is","My","cat"]
arr.join(String)
document.write(arr)

13)

15)
var mobileNames = ("Apple","Samsung"," Motorola", "Nokia", "Sony" , "Haier")




alert("We Sent Cookies")

                                    Js Objects and Array loops//

1)
var Arr=[[1,2],[3,4],[5,6]]


2)
var arrayMain =[[0,1,2,3,5],[0,1,4,8,2],[2,1,3,6,9]]
for(i=0;i<arrayMain.length; i++){
 
   for(j=0;j<arrayMain[i].length;j++){
       document.write(arrayMain[i][j])}
       document.write("<br>")
}


3)
for(var i = 1; i <=10 ; i = i + 1 ){

    console.log(i)
document.write("<br>"+ i)

}

4)

var tableNum = +prompt("ENTER THE TABLE NUMBER?")
var tableLength = +prompt("ENTER LENGTH OF THE TABLE?")

for(i=1;i<=tableLength;i++){
    document.write("<br>"+tableNum + "X" + i + "=" + tableNum*i )
}

5)

var fruitsName = ["apple", "banana", "mango", "orange",
    "strawberry"]
for(i=0;i<fruitsName.length;i++){
    document.write("Element at index "+i+" is "+fruitsName[i]+"<br>")

}

6)
                    Ascending order
for(var i = 1; i <=10 ; i = i + 1 ){
    
    console.log(i)
document.write(i+",")
}

                    descending order
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
list.reverse(list);
document.write(list)

                    Even

for(i=0; i<=10; i++){
        if(i%2 === 0 ){
                console.log(i)        
            }
        }
        list.even(list);
        document.write(list)

                    Odd


    for(i=0; i<=10; i++){
             if(i%2 ==! 0 ){
                     console.log(i)        
                   }
                document.write(list)
              }

   
        8)
        const arr = [24, 53, 78, 91, 12]
        const max = Math.max(...arr)
        console.log(max)
        document.write("Array items : "+arr + "<br>"+ "Largest Number is" + max)
        
     
     
        9)
        const arr = [24, 53, 78, 91, 12]
        const min = Math.min(...arr)
        console.log(min)
        document.write("Array items : "+arr + "<br>"+ "Smallest Number is" + min)
        


        10)

        for(i=1;i<=100;i++){
            if(i%5 === 0){
                document.write(i+",")
            }
        }