import { Request, Response } from 'express';
import {Book} from '../models/Book';


interface IResponse{
    success: boolean;
    message: string;
    data?: any;
}


export const getBooks = async (req: Request, res: Response) => {
    try{
        const books = await Book.find();
        if(!books){
            return res.status(404).json({ success: false, message: "No books found" }as IResponse);
        }

        return res.status(200).json({ success: true, message: "Books found", data: books } as IResponse);

    }catch(error){
        return res.status(500).json({ success: false, message: "Internal server error" } as IResponse);

    }
};

export const addBook = async (req: Request, res: Response) => {
    
    const {name, author, publishYear, description} = req.body;

    console.log("This data we are getting:",name, author, publishYear, description);

    try{
        const book = await Book.create({ author, description, name, publishYear });
        
        return res.status(201).json({ success: true, message: "Book added successfully", data: book });

    }catch(error:any){
        return res.status(500).json({ success: false, message: "Error adding book" });
    }

}

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, author, publishYear, description } = req.body;

    try{
        const book = await Book.findByIdAndUpdate(id, {name, author, publishYear, description},{new: true});
        if(!book){
            return res.status(404).json({ success: false, message: "Book not found" } as IResponse);
        }
        if(book){
            return res.status(200).json({ success: true, message: "Book updated successfully", data: book } as IResponse);
        }

    }
    catch(error:any){
        return res.status(500).json({ success: false, message: "Error message" } as IResponse);
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const book = await Book.findByIdAndDelete(id
);        if(!book){
            return res.status(404).json({ success: false, message: "Book not found" } as IResponse);
        }
        return res.status(200).json({ success: true, message: "Book deleted successfully", data: book } as IResponse);
    }
    catch(error:any){
        return res.status(500).json({ success: false, message: "Error deleting book" } as IResponse);
    }

}

