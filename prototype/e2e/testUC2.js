import { selector, t } from "testcafe";

fixture`UC2 E2E tests`
    .page`http://localhost:8080/index.html`;

test("some test", async function (t) {
    await t.
        click(`#find-by-type`)
        .click(`#bike-tool-station`)
        .expect(selector)(`table > tbody`).childElementCount).eql(`rows in table`);

});

