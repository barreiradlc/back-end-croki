// 'use strict'

// class SessionController {
// }

// module.exports = SessionController

const User = use('App/Models/User')

const { getInternalToken } = require('../../../routes/common/oauth');
const converter = require('json-2-csv');
var fs = require('fs');
const os = require('os');

const axios = require('axios');


'use strict'






class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)


    const perfil = await User
      .query()
      .where('email', '=', email)
      .fetch()

    const usuario = await {
      token,
      perfil
    }



    return usuario
    // return token
  }



  async forge({ res }) {
    try {
      const token = await getInternalToken();
      return ({
        access_token: token.access_token,
        expires_in: token.expires_in
      });
    } catch (err) {
      console.debug({ err });
    }
  }

  async getProperties({ request, response }) {

    let list = []
    const { urn } = request.params

    const token = await getInternalToken();

    let json2csvCallback = function (err, csv) {
      var dir = `./tmp/${urn}`;

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }

      console.debug(csv)

      if (err) throw err;
      fs.writeFile(`./tmp/${urn}/Propriedades${list.length}.csv`, csv, 'utf8', function(err) {
        if (err) {
          console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
          console.log('It\'s saved!');
        }
      });
    };

    const url = `https://developer.api.autodesk.com/modelderivative/v2/designdata/${urn}/metadata`

    async function listProperties(item) {
      if(item){
        console.debug(item)
        const { metadata } = item.data

        const properties = await metadata.map((m) => {
          getListProperties(m.guid)
            .then(( response ) => {

              console.debug({response})

            })

        })

      }


      // properties.map(( p ) => {
      //   p.then(( res ) => {
      //     return listProperties.push(res)
      //   })

      // })



      return await list
      console.warn({listProperties})

      return await listProperties
    }


    function getListProperties(m) {
      const urlPreperties = `https://developer.api.autodesk.com/modelderivative/v2/designdata/${urn}/metadata/${m}/properties`

      return axios.get(urlPreperties, {
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if(res.data){
          res.data.collection && res.data.collection.map(( d ) => {
            console.log({res: d})
          })
          list.push(res.data.collection)
        }
        return res.data
      }).catch((err) => {
        return err
      }).then((res) => {
        // console.log({res2: JSON.stringify(res.data.collection)})
        const listProperties = []

        res.data.collection.map(( p ) => {

          let item = [
            p.name
          ]

          if(p.properties){
            if(p.properties.Cotas){
              item.Comprimento = p.properties.Cotas.Comprimento ? item.push(p.properties.Cotas.Comprimento) : item.push('----')
              item.Volume = p.properties.Cotas.Volume ? item.push(p.properties.Cotas.Volume) : item.push('----')
              item.Área = p.properties.Cotas.Área ? item.push(p.properties.Cotas.Área) : item.push('----')
            }
          }

          console.log('item')
          console.log(item)
          console.log('item')

          listProperties.push(item.join(','))
        })


        var dir = `./tmp/${urn}`;

        return fs.writeFileSync(`${dir}/Propriedades${listProperties.length}.csv`, listProperties.join(os.EOL));


        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }

        // 1. One way - if you want the results to be in double quotes and you have comas inside

        // choose another string to temporally replace commas if necessary
        let stringToReplaceComas = '!!!!';

        listProperties.map((singleRow) => {
          singleRow.map((value, index) => {
            singleRow[index] = value.replace(/,/g, stringToReplaceComas);
          })
        })

        let csv = `"${listProperties.join('"\n"').replace(/,/g  , '","')}"`;
        // // or like this
        // let csv = `"${listProperties.join('"\n"').split(',').join('","')}"`;

        csv = csv.replace(new RegExp(`${stringToReplaceComas}`, 'g'), ',');

        // if (err) throw err;
        fs.writeFile(`./tmp/${urn}/Propriedades${list.length}.csv`, csv, 'utf8', function(err) {
          if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
          } else {
            console.log('It\'s saved!');
          }
        });

        // return converter.json2csv(listProperties, json2csvCallback, {
        //   prependHeader: false      // removes the generated header of "value1,value2,value3,value4" (in case you don't want it)
        // });

        list.push(res.data)
      })
    }


    const { access_token } = token

    return axios.get(url, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      let { data } = res
      // console.debug({res0: res.data})
      return listProperties(data)
      // return res
    }).catch((err) => {
      console.debug(err)
      // return err
    }).then((res) => {
      // console.debug({res4: res.data})
      if(res){
        let { data } = res
        return listProperties(data)
      }
      // return res
    })

    // // Make a request for a user with a given ID
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

  }

}

module.exports = SessionController
