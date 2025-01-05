function parseToProto(json, proto) {
    let parsedObject = JSON.parse(json);
    return Object.assign(Object.create(proto), parsedObject);
}

module.exports = {parseToProto};