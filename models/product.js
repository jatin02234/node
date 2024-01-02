const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductFromFile = (cb) =>{
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class product {
    constructor(title, img, price, description) {
        this.title = title;
        this.imageUrl = img;
        this.price = price;
        this.description = description;
    }

    save() {
        getProductFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('err', err);
            });
        });
    }

    static fetchAll(cd) {
        getProductFromFile(cd)
    }
}