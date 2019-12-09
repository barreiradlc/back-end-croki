'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

static scopeNearBy (query, latitude, longitude, distance) {
    return query;
}


class Property extends Model {

    // relações
    user() {
        return this.belongsTo('App/Models/User')
    }

    images() {
        return this.hasMany('App/Models/Image')
    }
}

module.exports = Property
