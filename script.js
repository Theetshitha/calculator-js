  "use strict"
  
  let calculate = document.getElementById('display');
  console.log(display);

  let str = '';
  let arr=[];

  function appendCharacter(x) 
  {
    
        calculate.value+=x;
        str+=x;

        if(parseInt(x)==x||x==".")
        {
            if(str.length<2)
            {
              arr.push(x);
            }
            else
            {
            arr[arr.length-1]+=x;
            }

        }

        else
        {
            str="";
            arr.push(x)
        }

        console.log(arr);

  }

  function Del() {
    calculate.value = calculate.value.slice(0, -1);
    }
  
console.log(arr);

  function clearDisplay()
  {
    arr=[];
    str="";
    calculate.value='';
  }

  function Result()
  {
    let res=0;

    for(let i=0;i<arr.length;i++)
    {
      console.log(arr[i]);

      if(arr[i]=="/" || arr[i]=="*"|| arr[i]=="%")
      {
        
        console.log(arr[i]);

       if(arr[i]=="/")
        {
              res=Number(arr[i-1] / arr[i+1])
              arr.splice(i-1,3,res);
              i--;
         
        }

        else if(arr[i]=="*")
        {
          res=Number(arr[i-1]) *Number(arr[i+1])
          arr.splice(i-1,3,res);
          i--;
        }

        else
        {
       
              res=Number(arr[i-1]) % Number(arr[i+1]);
              console.log(res);
              arr.splice(i-1,3,res);
              i--;
          
        }



        // console.log(arr);
        
        // console.log(arr[i]);

      
      }

    }

    for(let i=0;i<arr.length;i++)
    {

      if(arr[i]=="+" || arr[i]=="-")
      {
        res=0;
 
        if(arr[i]=="+")
        {
            res=Number(arr[i-1]) + Number(arr[i+1]);
            arr.splice(i-1,3,res);
            i--;
          }
        
          else
          {
            res=Number(arr[i-1]) - Number(arr[i+1])
            arr.splice(i-1,3,res);
            i--;
          }

      }
            
        calculate.value=res;
    }
 
   
   
  }


 