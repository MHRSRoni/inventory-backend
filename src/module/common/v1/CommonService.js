const Details = require("./DetailsService");

class CommonService extends Details {
    constructor(owner, name, model) {
        super(model);
        this.owner = owner;
        this.Model = model;
        this.name = name;
    }

    async addDetails(details, projection) {
        if(Object.keys(this.owner).length > 0) details = {...details, ...this.user};
        const profile = await super.addDetails(details);
        const result = this.Model.hydrate(profile,projection)
        return {success : true, message : `Successfully added ${this.name}`, data : result};
    }

    async existDetails(query){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        return await super.existDetails(query);
    }

    async getSingleDetails(query){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        const detail = await super.getSingleDetails(query);
        return {success : true, message : `${this.name} details found`, detail : detail};
    }

    async getDetailsPage(query, projection, options){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        const result = await super.getDetailsPage(query, projection, options);
        return {success : true, message : `${this.name} details found`, page : result.page, perPage : result.perPage, total : result.total, totalPage : result.totalPage, details : result.details};
    }

    async getAllDetails(query){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        const details = await super.getAllDetails(query);
        return {success : true, message : `${this.name} details found`, details : details};
    } 

    async updateDetails(query, details){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        const profile = await super.updateDetails(query, details);
        if(!profile) return {success : false, message : `${this.name} details not found`, detail : profile};
        return {success : true, message : `Successfully updated ${this.name} details`, detail : profile};
    }

    async deleteDetails(query){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        const detail = await super.deleteDetails(query);
        if(!detail) return {success : false, message : `${this.name} details not found`, detail : detail};
        return {success : true, message : `Successfully deleted ${this.name} details`, detail : detail};
    }

    async hasDependencies(query, ...Model){
        if(Object.keys(this.owner).length > 0) query = {...query, ...this.user};
        return await super.hasDependencies(query, ...Model);
    }

}

module.exports = CommonService