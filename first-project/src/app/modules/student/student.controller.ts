import { Request, Response } from 'express';
import { StudentServices } from "./student.service";
import { error } from 'console';
// import Joi from 'joi'
import studentValidationSchema from './student.validation';
import { z } from "zod";




const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB()

        res.status(200).json({
            success: true,
            message: 'Students are retrieved successfully',
            data: result,
        });

    } catch (err: any) {
        // console.log(err);
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
}

const getSingleStudents = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;

        const result = await StudentServices.getSingleStudentsFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is retrieved successfully',
            data: result,
        });

    } catch (err: any) {
        // console.log(err);
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
}

const deleteStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;

        const result = await StudentServices.deleteStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is deleted successfully',
            data: result,
        });

    } catch (err: any) {
        // console.log(err);
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
}

export const StudentControllers = {
    getAllStudents,
    getSingleStudents,
    deleteStudent
};


