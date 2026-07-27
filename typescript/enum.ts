const countryCodes = ["US", "CA", "GB", "AU", "DE", "FR", "JP", "CN", "IN", "BR", "RU", "ZA", "MX", "IT", "ES", "NL", "SE", "CH", "BE", "AT"];

console.log("Country Codes:", countryCodes[4]);

enum Country {
    US, CA, GB, AU, DE, FR, JP, CN, IN, BR, RU, ZA, MX, IT, ES, NL, SE, CH, BE, AT
}
console.log("Country Enum Value for DE:", Country.DE);


enum CountryCode {
    eg = "+20",
    us = "+1",
    ca = "+1",
    gb = "+44",
    au = "+61",
    de = "+49",
    fr = "+33",
}

enum Browser {
    Chrome = "Google Chrome",
    Firefox = "Mozilla Firefox",
    Safari = "Apple Safari",
    Edge = "Microsoft Edge",
    Opera = "Opera"
}


console.log(Browser.Edge);

enum environment {
    dev = "www.dev.com",
    test = "www.test.com",
    preprod = "www.preprod.com",
    prod = "www.prod.com",
    age = 30
}

console.log(environment.test);

