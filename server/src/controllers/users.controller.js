const fs = require('fs/promises'); //llamamos a modulo fs
const path = require('path'); //llamamos a modulo path
const usersFilePath = path.resolve(__dirname, '../../data/users.json'); //path de segmentos, unido con resolve.

const usersController = {}; //creamos objeto controller

// usersController.readAllUsers = (req, res) => {
//   fs.readFile(usersFilePath, (error, data) => {
//     if (error) return res.status(500).send('Error al leer el archivo'); //tratamiento de error
//     const jsonData = JSON.parse(data); // transformo la información que leo a js
//     res.send(jsonData);
//   });
// };

//con promesas, evito los callback
usersController.readAllUsers = async (req, res) => {
  try {
    const data = await fs.readFile(usersFilePath);
    const jsonData = await JSON.parse(data);
    res.send(jsonData);
  } catch (err) {
    res.status(500).send('Error al leer el archivo');
  }
};

module.exports = usersController;
