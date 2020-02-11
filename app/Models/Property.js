

'use strict'

const Database = use('Database')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Property extends Model {
    static scopeNearBy(query, latitude, longitude, distance) {
        const haversine = `(6371 * acos(cos(radians(${latitude}))
          * cos(radians(latitude))
          * cos(radians(longitude)
          - radians(${longitude}))
          + sin(radians(${latitude}))
          * sin(radians(latitude))))`

        return query
            .select('*', Database.raw(`round(${haversine}) as distance`))
            .whereRaw(`${haversine} < ${distance}`)
    }

    user() {
        return this.belongsTo('App/Models/User')
    }

    // IMAGENS?
    // images() {
    //     return this.hasMany('App/Models/Image')
    // }
    
    template () {
        return this.hasOne('App/Models/Template')
    }

    
}

module.exports = Property
