import { NextFunction, Request, Response } from 'express';
import { StudentServices } from "./student.service";
import { error } from 'console';
// import Joi from 'joi'
import studentValidationSchema from './student.validation';
import { z } from "zod";


const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB()

        res.status(200).json({
            success: true,
            message: 'Students are retrieved successfully',
            data: result,
        });

    } catch (err: any) {
        next(err);
    }

}

const getSingleStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;

        const result = await StudentServices.getSingleStudentsFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is retrieved successfully',
            data: result,
        });

    } catch (err: any) {
        next(err);
    }
}

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;

        const result = await StudentServices.deleteStudentFromDB(studentId)

        res.status(200).json({
            success: true,
            message: 'Student is deleted successfully',
            data: result,
        });

    } catch (err: any) {
        next(err);
    }
}

export const StudentControllers = {
    getAllStudents,
    getSingleStudents,
    deleteStudent
};


