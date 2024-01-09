class Details {

    constructor(Model) {
        this.Model = Model

        if(!Model) {
            throw Error('Please provide a Model')
        }
    }

    async addDetails(details) {
        return await this.Model.create(details)
    }

    async existDetails(query) {
        return !!(await this.Model.countDocuments(query))
    }

    async getSingleDetails(query, projection) {
        return await this.Model.findOne(query).select(projection)
    }

    async getAllDetails(query, projection) {
        return await this.Model.find(query).select(projection)
    }

    async getDetailsPage(query, projection, {limit = 10, page = 1} = {}) {
  
        const [details, total] =  await Promise.all([
            this.Model.find(query).skip((page - 1) * limit).limit(limit).select(projection),
            this.Model.countDocuments(query),
        ])
        return {
            total : total,
            totalPage : Math.ceil(total / limit),
            page : page,
            perPage : limit,
            details,
        }
    }

    async updateDetails(query, details, projection) {
        return await this.Model.findOneAndUpdate(query, details,).select(projection)
    }

    async deleteDetails(query,projection) {
        return await this.Model.findOneAndDelete(query).select(projection)
    }

    async hasDependencies(query, ...Model) {
        const dependencies = await Promise.all(Model.map(model => model.countDocuments(query)))
        if(dependencies.some(v => v > 0)) {
            return true
        }
        return false
    }



}


module.exports = Details