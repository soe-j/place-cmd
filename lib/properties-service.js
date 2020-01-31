class PropertiesService {
  static getScriptProperties() {
    return new Property();
  }
}

class Property {
  getProperty (id) {
    return process.env[id];
  }
}

module.exports = {
  PropertiesService
}
