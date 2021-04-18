const path = require("path");

const { User } = require("../models");

//Crear usuario
async function store(req, res) {
    try {
        await User.create({ 
            firstName: req.body.firstName, 
            lastName: req.body.lastName ,
            email: req.body.email ,
        })
        
        .then(resp => {
            res.status(201).json({
              message: "User has been created succesfully"
            })
          });
    } catch (error) {
        console.log(error)
    }
      
}

//Listar usuarios
async function index(req, res) {
    try {
        await User.findAll({})

        .then(resp => {
            res.status(201).json({
                message: "Users listed correctly",
                data: resp
            })
        });
       
    } catch (error) {
        console.log(error);
    }
}
//Mostrar usuairo por id
async function show(req, res) {
    try {
        if (req.params.id.length < 0) {
            res.status(400).json({
                message: "The user id is required"
            });
        }
        await User.findAll({ 
            where: {
                id: req.params.id
            }}).then(resp => {
                if(resp.length <= 0){
                    res.status(404).json({
                        message: 'User not found'
                    })
                }
            res.status(201).json({
                message: "User listed correctly",
                data: resp
            });
        });
    } catch (error) {
        console.log(error)   
    }
}
//Actualizar usuario
async function update(req, res) {
    try {
        if (req.params.id.length < 0) {
            res.status(400).json({
                message: "The user id is required"
            });
        }
        await User.update({ 
            firstName: req.body.firstName, 
            lastName: req.body.lastName ,
            email: req.body.email ,
        }, {
            where: {
              id: req.params.id
            }
        })
        .then(resp => {
            res.status(201).json({
              message: "User has been updated succesfully"
            })
          });
        
    } catch (error) {
        console.log(error);
    }
}
//Eliminar usuario
function destroy(req, res) {
    try {
        if (req.params.id.length < 0) {
            res.status(400).json({
                message: "User id is required"
            });
        }
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(resp => {
            res.status(201).json({
              message: "User has been deleted succesfully"
            })
          });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    destroy,
    update,
    show,
    index,
    store
};