const catsModel= require("../../db/models/catsModel")


const getCats = async (req,res)=>{
    try {
         const catss = await catsModel.find({}).populate("user");
        res.status(200).json(catss)
    } catch (error){
        res.send(error)
    }
}

const postCats= async (req, res)=>{
  const { newName, newDescription, newImg ,newage, newgender, newtype } = req.body;
  const user =req.token.userId
  const newCact = new catsModel({name:newName, description:newDescription, img:newImg,age:newage, gender:newgender, type:newtype , user})
  try {
      const savedCat= await newCact.save()
       const cats = await catsModel.find({});
      res.status(200).json(cats)

  }catch (error){
      res.send(error)
  }
}

const deleteCats = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const del = await catsModel.findOneAndDelete({ _id: id, user: user });
    if (del){
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }
};

const getcard = async (req,res)=>{
  const id = req.params.id
  console.log(id)
try {

  const catss = await catsModel.find({ _id: id, }).populate("user");
 res.status(200).json(catss)
} catch (error){
 res.send(error)
}
}


module.exports = { getCats, postCats, deleteCats,getcard };