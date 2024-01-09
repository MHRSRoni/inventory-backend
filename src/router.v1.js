const Strategy = require('./client/v1/StrategyFactory');

const v1 = require('express').Router()



v1.post('/register', async (req, res, next) => {
    try{
        const client = new Strategy("", 'user');
        const result = await client.strategy.addDetails(req.body)
        return res.status(200).json(result)
    }catch (error){
        next(error)
    }
})

v1.get('/login', async (req, res, next) => {
    try{
        const client = new Strategy("", 'user');
        const result = await client.strategy.login(req.body)
        return res.status(200).json(result)
    }catch (error){
        next(error)
    }
})

v1.patch('/change-password', async (req, res, next) => {
    try{
        const client = new Strategy("", 'user');
        const result = await client.strategy.changePassword(req.headers.user, req.body)
        return res.status(200).json(result)
    }catch (error){
        next(error)
    }
})

v1.patch('/update-profile', async (req, res, next) => {
    try{
        const client = new Strategy("", 'user');
        const result = await client.strategy.updateDetails(req.headers.user, req.body)
        return res.status(200).json(result)
    }catch (error){
        next(error)
    }
})

v1.patch('/reset-password', async (req, res, next) => {
    try{
        const client = new Strategy("", 'user');
        const result = await client.strategy.resetPassword(req.query, req.body)
        return res.status(200).json(result)
    }catch (error){
        next(error)
    }
})

v1.get('/:type', async (req, res, next) => {
    const limit = req.query.perPage
    const page = req.query.page
    const client = new Strategy(req.headers.user, req.params.type);
    const result = await client.strategy.getDetailsPage({},{},{limit, page})
    return res.status(200).json(result)
})


v1.get('/:type/all', async (req, res, next) => {
    const client = new Strategy(req.headers.user, req.params.type);
    const result = await client.strategy.getAllDetails({})
    return res.status(200).json(result)
})

v1.get('/:type/:id([a-zA-Z0-9]{24})', async (req, res, next) => {
    const client = new Strategy(req.headers.user, req.params.type); 
    const result = await client.strategy.getSingleDetails({_id : req.params.id})
    return res.status(200).json(result)
})

v1.post('/:type/add', async (req, res, next) => {
    const client = new Strategy(req.headers.user, req.params.type);
    const result = await client.strategy.addDetails(req.body)
    return res.status(201).json(result)
})

v1.put('/:type/:id([a-zA-Z0-9]{24})', async (req, res, next) => {
    const client = new Strategy(req.headers.user, req.params.type);
    const result = await client.strategy.updateDetails({_id : req.params.id}, req.body)
    return res.status(200).json(result)
})


module.exports = v1