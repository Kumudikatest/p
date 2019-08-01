module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["l"] = {
        host: process.env.EndPoint_rdsL,
        port: process.env.Port_rdsL,
        user: process.env.User_rdsL,
        password: process.env.Password_rdsL,
        database: "l"
    };
};