import jwt from "jsonwebtoken"

export const login = (User) => {
    return async (req,res) => {
        if(!isValidCredentials(User,req.body.email,req.body.password)){
            res.status(401).json({ message: 'Invalid credentials' });
        }else{
            const token = jwt.sign({ email:req.body.email },process.env.SECRET_KEY);
            res.status(200).json({success:true,token:token});
        }
    }
}

export const createAccount = (User) => {
    return async (req,res) => {
        try {
            const user = new User({
                email:req.body.email,
                password:req.body.password
            })
            const doc = await user.save();
            const token = jwt.sign({ email:req.body.email },process.env.SECRET_KEY);
            res.status(201).send({success:true,token:token});
        } catch (err) {
            res.status(400).send({success:false,error:err});
        }
    }
}

const isValidCredentials = (User,email,password) => {
    return User.findOne({ email, password }).then(user => !!user);
}