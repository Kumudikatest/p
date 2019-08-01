module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["s"] = {
        host: process.env.EndPoint_rdsS,
        port: process.env.Port_rdsS,
        user: process.env.User_rdsS,
        password: process.env.Password_rdsS,
        database: "s"
    };
};