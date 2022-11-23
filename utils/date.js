'use strict';

const { MILLISEC_IN_DAYS } = require('./constants');

/**
 * getDurationInDays
 * @param {Date} date1
 * @param {Date} date2
 * @return {Number}
 */
 const getDurationInDays = (date1, date2) => {
    return Math.abs(Math.ceil((date1 - date2) / MILLISEC_IN_DAYS));
};

module.exports = {
    getDurationInDays,
};
