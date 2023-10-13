import { app } from "./app";

describe("App test", () => {
    describe("adding things", () => {
        it("should add two numbers", () => {
            expect(1 + 2).toBe(3);
        })

        it("should return a string", () => {
            const appString = app;

            expect(appString).toBe("app,dogs,great,are,dogs,food,utilmsg,great,are,pets");
        })
    })
})