import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';


let newvalueues=[];
let updatedFamilies=[];

const Houses = () => {
    let newFamilies=[];
    let nonevalueue=0;
    const storeData=(data)=>{
        let myGot=new Map([])
        let families=[];
        console.log("Hello",data)
        data.map((fa)=>{
            let houseName=fa.family.split(" ");
            let house=houseName[houseName.length-1];
            if(myGot.has(house) ){
              let valueue=myGot.get(house);
              valueue+=1;
              myGot.set(house,valueue);
            }else{
              families.push(house);
              myGot.set(house,1);
            }
          })
          let index=families.indexOf("Lanister");
          if(index>-1){
            families.splice(index,1);
          }
        
          let value=myGot.get("Lanister");
          value+=myGot.get("Lannister");
          myGot.set("Lannister",value);
          myGot.delete("Lanister");
         
          // eslint-disable-next-line array-callback-return
          families.map(fam=>{
            if(myGot.get(fam)<2){
              nonevalueue++;
              myGot.delete(fam);
            }
          })
        
          myGot.forEach((value,key) => {
            newFamilies.push(key);
            newvalueues.push(value);
          });
         // eslint-disable-next-line array-callback-return
         newFamilies.map((f)=>{
            let s="House "+f;
            updatedFamilies.push(s);
          })
          updatedFamilies.push("None");
          newvalueues.push(nonevalueue);
         
    }
    useEffect(()=>{
        const getData=async()=>{
            const {data}=await axios.get("https://thronesapi.com/api/v2/Characters")
            storeData(data);
        }
        updatedFamilies=[];
        newvalueues=[];
        getData();
    })
    const data = {
        labels: updatedFamilies,
        datasets: [
          {
            label: '# of Votes',
            data: newvalueues,
            backgroundColor: [
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(199, 199, 199, 0.8)',
              'rgba(83, 102, 255, 0.8)',
              'rgba(40, 159, 64, 0.8)',
              'rgba(210, 199, 199, 0.8)',
              'rgba(78, 52, 199, 0.8)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(159, 159, 159, 1)',
              'rgba(83, 102, 255, 1)',
              'rgba(40, 159, 64, 1)',
              'rgba(210, 199, 199, 1)',
              'rgba(78, 52, 199, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div width="100px" height="100px">
        Welcome to houses page
        <Doughnut data={data}/>
           
        </div>
    )
}

export default Houses;