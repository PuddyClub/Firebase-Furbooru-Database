module.exports = function (data) {

    // Exist Data
    if (data) {

        // Prepare Generator
        const philomena_generator = require('@tinypudding/firebase-philomena-database');

        // Send the Derpibooru Module
        return philomena_generator({

            // Derpibooru Settings
            booru: {
                filter_id: 2,
                version: 1,
                id: 'furbooru',
                name: 'Furbooru',
                url: 'https://furbooru.org',
                tagListVar: 'tags',
                idVar: 'id',
            },

            // Config
            config: data.config,

            // Module
            module: data.module

        });

    }

    // Nope
    else { throw new Error('The data value is empty!'); }

};