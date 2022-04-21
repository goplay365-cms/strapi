'use strict';
const {
  keepalives
} = require("pg/lib/defaults");
const translationsObj = require("../config/translations");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register( /*{ strapi }*/ ) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap( /*{ strapi }*/ ) {

    /**
     * Fshirja e te gjithe rekordeve db strapi
     */

        // var records = [];
        // for (let n = 0; n <= 4139; n++) {
        //   records.push(n);
        // }
        // records.forEach((entry) => strapi.service('api::label.label').delete(entry));
        // records.forEach((entry) => strapi.service('api::message.message').delete(entry));

    /**
     * Ngarkimi i perkthimeve nga file ne db strapi
     */

    const obj = translationsObj.translations;

    var j = 1;
    var l = 1;
    var m = false;

    function loc(lan) {
      switch (lan) {
        case 'zweTranslation':
          return 'en';
        case 'albTranslation':
          return 'sq';
        case 'vatTranslation':
          return 'it';
        case 'venTranslation':
          return 'es';
        case 'tmpTranslation':
          return 'pt-BR';
        case 'yugTranslation':
          return 'sr-Latn';
        case 'luxTranslation':
          return 'de';
        case 'grcTranslation':
          return 'el';
        case 'vutTranslation':
          return 'fr';
        case 'mkdTranslation':
          return 'mk';
        default:
          return 'en';
      }
    };

    strapi.service('api::label.label').findOne(4137)
      .then(function (uGjend) {
        if (uGjend) {
          m = true;
        }
      })
      .then(function () {
        if (!m) {
          for (const o in obj) {
            for (const k in obj[o]) {
              if (k !== "messages") {
                strapi.service('api::label.label').create({
                  data: {
                    id: j++,
                    name: k,
                    desc: obj[o][k],
                    locale: loc(o)
                  }
                });
              } else if (k == "messages") {
                for (const m in obj[o][k]) {
                  strapi.service('api::message.message').create({
                    data: {
                      id: l++,
                      name: m,
                      desc: obj[o][k][m],
                      locale: loc(o)
                    }
                  });
                }
              }
            }
          }
        }
      });
  },
};
