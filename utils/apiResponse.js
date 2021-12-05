module.exports = {
    ServerErrorResponse : function (res) {
        var payload = {
            status : 500,
            message: 'Internal Server Error',
            resData : [],
            error : ''
        };
        return res.status(500).json(payload);
    },
    ValidationErrorResponse : function (res, message = '', errors) {
        const error = (errors) ? errors.array() : []
        var payload = {
            status : 400,
            message : message || 'Bad Request, Please check api request',
            resData : [],
            error : error
        }
        return res.status(400).json(payload);
    },
    SuccessResponse : (res, data) => {
        var payload = {
            status : 200,
            message : 'Request Successful',
            error: '',
            resData : data
        }
        return res.status(200).json(payload)
    }
}