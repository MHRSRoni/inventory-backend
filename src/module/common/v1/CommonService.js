const Details = require("./DetailsService");

class CommonService extends Details {
    constructor(owner, name, model) {
        super();
        this.owner = owner;
        this.Model = model;
        this.name = name;
    }

    async addDetails(details){
        details.user = this.owner;
        const profile = await super.addDetails(details);
        return {success : true, message : `Successfully added ${this.name}`, data : profile};
    }

    async existDetails(query){
        query.user = this.owner;
        return await super.existDetails(query);
    }

    async getSingleDetails(query){
        query.user = this.owner;
        const detail = await super.getSingleDetails(query);
        return {success : true, message : `${this.name} details found`, detail : detail};
    }

    async getDetailsPage(query, projection, options){
        query.user = this.owner;
        const result = await super.getDetailsPage(query, projection, options);
        return {success : true, message : `${this.name} details found`, page : result.page, perPage : result.perPage, total : result.total, totalPage : result.totalPage, details : result.details};
    }

    async getAllDetails(query){
        query.user = this.owner;
        const details = await super.getAllDetails(query);
        return {success : true, message : `${this.name} details found`, details : details};
    }

    async updateDetails(query, details){
        query.user = this.owner;
        const profile = await super.updateDetails(query, details);
        if(!profile) return {success : false, message : `${this.name} details not found`, detail : profile};
        return {success : true, message : `Successfully updated ${this.name} details`, detail : profile};
    }

    async deleteDetails(query){
        query.user = this.owner;
        const detail = await super.deleteDetails(query);
        if(!detail) return {success : false, message : `${this.name} details not found`, detail : detail};
        return {success : true, message : `Successfully deleted ${this.name} details`, detail : detail};
    }

    async hasDependencies(query, ...Model){
        query.user = this.user
        return await super.hasDependencies(query, ...Model);
    }

}

module.exports = CommonService