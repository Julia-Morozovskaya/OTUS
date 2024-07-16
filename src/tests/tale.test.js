import { kolobok } from "../tale";
import { newYear } from "../tale";

describe("Колобок", () => {
    test("Лиса", () => {
        kolobok("лиса")
    });
    test("Дедушка", () => {
        kolobok("дедушка")
    });
    test("Медведь", () => {
        kolobok("медведь")
    })
});

describe.only("Новый год", () => {
    test("Дед Мороз", () => {
        newYear("Дед Мороз")
    });
    test("Снегурочка", () => {
        newYear("Снегурочка")
    });
    test("Снеговик", () => {
        newYear("Снеговик")
    });

})
