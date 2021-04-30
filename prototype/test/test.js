const assert = require(`assert`);
process.env.NODE_ENV = `test`;
const main = require(`../main`);

describe("uc1", function() {

    it("should use the ejs view engine", function () {
    assert.strictEqual(main.app.get("view engine"),`ejs`);

    });

    after(function(){
    main.connection.end();
    done();
    });

});

