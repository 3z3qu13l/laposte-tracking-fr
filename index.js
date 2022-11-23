'use strict';

const { mapResponse } = require('./lib')
const {
    constants: { API_ENDPOINT },
} = require('./utils');

/**
 * trackingAPI
 * @param {Object.<apiKey, lang>} apiKey: your secret apiKey, lang: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
 * @returns 
 */
module.exports = ({apiKey, lang}) => {
    return {
        /**
         * getTracking
         * @see https://developer.laposte.fr/products/suivi/2/swagger
         * @param {String} trackingId
         * @returns {Array.<{
         *      trackingId: String,
         *      type: String,
         *      currentStatus: String,
         *      duration: Number,
         *      isComplete: Boolean,
         *      lastUpdated: Date,
         *      created: Date,
         *      history: Array
         * }>}
         */
        getTracking: async (trackingId) => {
            let trackingResponse;
            try {
                const res = await fetch(`${API_ENDPOINT}/${trackingId}?lang=${lang || 'fr_FR'}`, {
                    headers: {
                        accept: 'application/json',
                        'accept-language': 'fr-FR,fr;q=0.6',
                        'X-Okapi-Key': apiKey,
                    },
                    body: null,
                    method: 'GET'
                });
        
                if (res.ok) {
                    trackingResponse  = await res.json();
                } else if (res.status === 404) {
                    console.error('Not found');
                } else {
                    console.error('Bad response');
                }
            } catch (error) {
                console.error('fetch', error);
            }
        
            return trackingResponse ? mapResponse(trackingResponse) : null;
        }
    };
};
