'use strict';

const {
    date: {
        getDurationInDays,
    },
} = require('../utils');

/**
 * mapResponse
 * @param {Object} responseRaw 
 * @returns {Object}
 */
module.exports = (responseRaw) => {
    const history = [];
    const shipment = responseRaw.shipment || {};
    (shipment.event || []).forEach(event => {
        const text = (event.label || '').trim();
        history.push({
            datetime: new Date(event.date),
            text,
        });
    });
    
    (shipment.timeline || []).forEach(timeline => {
        const text = (timeline.shortLabel || timeline.longLabel || '').trim();
        if (timeline.date && text) {
            history.push({
                datetime: new Date(timeline.date),
                text,
            });
        }
    });
    history.sort((a, b) => a.datetime - b.datetime);

    const lastStep = history[history.length - 1] || {};
    const lastUpdated = lastStep.datetime;
    const currentStatus = lastStep.text;
    const isComplete = shipment.isFinal;

    const created = new Date(shipment.entryDate);
    const duration = getDurationInDays(lastStep.datetime, created);

    return {
        trackingId: shipment.idShip,
        type: shipment.product,
        currentStatus,
        duration,
        isComplete,
        lastUpdated,
        created,
        history,
    };
};
