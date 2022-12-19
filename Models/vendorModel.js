class Vendor{
    constructor(id, vendorName, vendorEmail, vendorNumber, vendorAddress, bussRegID, bussLicense, img, greetingsIntro, vendorPassword){
        this.id = id;
        this.vendorName = vendorName;
        this.vendorEmail = vendorEmail;
        this.vendorNumber = vendorNumber;
        this.vendorAddress = vendorAddress;
        this.bussRegID = bussRegID;
        this.bussLicense = bussLicense;
        this.img = img;
        this.greetingsIntro = greetingsIntro;
        this.vendorPassword = vendorPassword;
    }
}

module.exports = Vendor;