module.exports = function() {
    this.clusters = [];

    this.clusters["k1234567890123456789"] = {
        host: process.env.EndPoint_redisK1234567890123456789,
        port: 6379,
        clusterModeEnabled: true
    };
};