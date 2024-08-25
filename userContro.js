// const User = require('../models/userModel.js')

exports.home =(req, res) => {
    res.send('Hello World')
}

// exports.creartUser = async(req,res)=>
//     { try {
//         const {name,email} = req.body;

//         const user = await user.create({
//             name,
//             email
//         })
//         res.status(201).json({
//             success:true,
//             message:'User created successfully',
//             user
//         })

//     } catch (error) {
//             console.log(error)
//             res.status(201).json({
//                 success:false,
//                 message:'Error creating user'
//             })
//     }
//     }


function submitData(data) {
    fetch('/submit-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  




