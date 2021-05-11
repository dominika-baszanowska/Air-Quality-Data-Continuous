const assert = require(`assert`);
process.env.NODE_ENV = `test`;
const main = require(`../main`);

describe("UC1", function () {

    it("should connect to the database", function() {
    });

    it("should use the ejs view engine", function() {
        assert.strictEqual(main.app.get("view engine"), `ejs`);
    });

    after(function(done) {
        main.connection.end();
        done();
    });

});

