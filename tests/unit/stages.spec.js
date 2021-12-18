import { mount } from "@vue/test-utils";
import Game from "../../src/views/Game";
import Quiz from "../../src/views/stages/Quiz";
import { store } from "../../src/store/index";


test("Get to second screen", async () => {
    const wrapper = mount(Game, {
        global: {
            plugins: [store],
        },
    });
    await wrapper.find("button").trigger("click");
    
    expect(wrapper.html()).toContain("About you");
});

test("Popup activates in Quiz (no selected options)", async () => {
    const wrapper = mount(Quiz, {
        global: {
            plugins: [store],
        },
    });
    await wrapper.find("button").trigger("click");
    
    expect(wrapper.html()).toContain("popupActive");
});

// test("Popup activates in Quiz (one option selected)", async () => {
//     const wrapper = mount(Quiz, {
//         global: {
//             plugins: [store],
//         },
//         props: {
//             testStages: ["Quiz", "Survey"],
//         },
//     });
//     await wrapper.findAll(".form-element-option")[0].trigger("click");
//     await wrapper.findAll(".form-element-option")[1].trigger("click");
//     await wrapper.findAll(".form-element-option")[3].trigger("click");
//     await wrapper.findAll(".form-element-option")[5].trigger("click");
//     await wrapper.find("button").trigger("click");

//     console.log(wrapper.html());
//     expect(wrapper.html()).toContain("popupActive");
// });
