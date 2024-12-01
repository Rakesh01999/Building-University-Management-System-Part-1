import { UserServices } from "./user.service";


const createStudent = async (req: Request, res: Response) => {
    try {
        const { password, student: studentData } = req.body;

        // const zodparsedData = studentValidationSchema.parse(studentData);
        
        const result = await UserServices.createStudentIntoDB(password, studentData);

        // Correct response method
        return res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result,
        });
    } catch (err) {
        console.error(err);

        // Handle errors safely
        if (err instanceof Error) {
            return res.status(500).json({
                success: false,
                message: 'An error occurred while creating the student',
                error: err.message, // Safely access the message property
            });
        }

        // Fallback for unknown error types
        return res.status(500).json({
            success: false,
            message: 'An unknown error occurred',
            error: String(err), // Convert unknown to string for logging
        });
    }
};