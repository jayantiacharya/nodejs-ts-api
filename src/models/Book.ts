import { model, Schema } from "mongoose"
//for typescript
interface IBook{
    name:string,
    author:string,
    publishYear:number,
    description:string,
    
}


//for database
const bookSchema = new Schema<IBook>({
    name:{type:String, required:true},
    author:{type:String, required:true},
    publishYear:{type:Number, required:true,trim:true},
    description:{type:String, required:true},
})


const Book = model<IBook>("Book",bookSchema)

export {Book, IBook}
