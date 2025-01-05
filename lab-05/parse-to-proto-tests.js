// Jasmine tests
import {parseToProto} from "./parse-to-proto";

describe("parseToProto", () => {
    it("should parse JSON and assign the prototype", () => {
        let proto = {category: "animal"};
        let obj = parseToProto('{"type":"cat", "name":"Blacky", "age":10}', proto);
        expect(obj.age).toBe(10);
        expect(obj.category).toBe("animal");
        expect(obj.type).toBe("cat");
    });

    it("should throw an error if JSON is invalid", () => {
        let proto = {category: "animal"};
        expect(() => {
            parseToProto('{"type":cat, "name":"Blacky", "age":10}', proto); // Type value needs to have quotes
        }).toThrow();
    });

    it("should work with an empty JSON string", () => {
        let proto = {category: "unknown"};
        let obj = parseToProto("{}", proto);
        expect(obj.category).toBe("unknown");
    });

    it("should work with a prototype that has multiple properties", () => {
        let proto = {category: "animal", habitat: "land"};
        let obj = parseToProto('{"type":"dog", "name":"Gandalf", "age":5}', proto);
        expect(obj.habitat).toBe("land");
        expect(obj.category).toBe("animal");
        expect(obj.type).toBe("dog");
    });
});