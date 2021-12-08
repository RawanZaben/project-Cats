import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../Cats/card.css"
//
export default function Cats({}) {

  const token=  JSON.parse(localStorage.getItem("token"))
  const [Cats, setCats] = useState([]);
  const [valueInput, setvalueInput] = useState('');
  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get("https://cats-tuwaiqb.herokuapp.com/cats", {
      headers: { authorization: `Bearer ${token}`  },
    });
    setCats(res.data);
    
  }, []);


  const deleteCats = async (id, index)=>{
   
    const deletedCat = await axios.delete(`https://cats-tuwaiqb.herokuapp.com/cat/${id}`,{
      headers:{authorization: "Bearer " + token},
    });
    console.log((deletedCat.data));
    if (deletedCat.data === "deleted"){
      const copiedArr= [...Cats];
    copiedArr.splice(index,1);
    setCats(copiedArr);
    }
     
}

const goToCard  =(id)=>{
  history.push(`/card/${id}`);
}

function setvalue(e) {
  let v = e.target.value;
  setvalueInput(v)
}
function serch(e) {
    let newArr = Cats.filter((item)=>item.type ==valueInput );
    setCats(newArr)
}
  return (
    <>

    <div id="serch">
      <input  id="input" onChange={setvalue}type="text" className="se" placeholder="ابحث عن نوع القط" />
        <button className="btn" onClick={serch} >بحث</button>
    </div>

        
    <div id="card" >

        {Cats.map((element, i) => {
          console.log(element);
          return (
            <div className="cat" key={element._id}>
             

                
          <div className="card"  style={{width: "18rem"}}>
            <img  onClick={()=>{goToCard(element._id)}} src={element.img} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h4 className="card-title">  أسم القط :  {element.name} </h4>
            <h5 className="card-title">أسم الناشر:{element.user.name} </h5>
            <p className="card-text">نوع القط :{element.type}  </p>
            <p className="card-text">جنس القط :{element.gender}  </p>
            <p className="card-text">عمر القط : {element.age}  </p>
            <p className="card-text">معلومات :{element.description}  </p>


            <button className="btn btn-primary" onClick={() => {  deleteCats(element._id, i); }}> حذف </button>

            </div>
          </div>
          <br/>  <br/>
            </div>
          );
        })}
      </div>
    </>
  );
}
