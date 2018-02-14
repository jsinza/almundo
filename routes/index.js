module.exports = (app) => {
    /**
     * Hotel
     */
    app.use('/hotels', require('./hotel/hotel'));

};
