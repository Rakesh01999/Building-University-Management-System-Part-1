import { NextFunction, Request, Response } from 'express';
import { StudentServices } from "./student.service";
import { error } from 'console';
// import Joi from 'joi'
import studentValidationSchema from './student.validation';
import { z } from "zod";
import sendResponse from '../../utils/sendResponse';
import httpStatus from "http-status";


const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB()

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Student are retrieved successfully',
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

        sendResponse(res, {
            statusCode: httpStatus.OK,
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

        sendResponse(res, {
            statusCode: httpStatus.OK,
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


