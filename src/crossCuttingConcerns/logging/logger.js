export class BaseLogger{
    log(data){
        console.log("Default loggler" + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic'e loglandı" + data)
    }
}


export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mongo'ya loglandı" + data)
    }
}