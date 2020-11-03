import { body } from 'express-validator';

const taskValidator = [
    body('name', 'Please enter product name')
        .isString().withMessage('Product name can only be a string.')
        .isLength({
            min: 2,
            max: 80
        }).withMessage('The product name must contain at least 2 and no more than 80 characters.'),

    body('project_id')
        .isString().withMessage('project_id can only be a string.'),

    body('status')
        .optional()
        .isBoolean().withMessage('status can only be a boolean.')
];

export default taskValidator;