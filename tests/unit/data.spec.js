import { mount } from "@vue/test-utils";
import Data from "../Data";
import { store } from "../../src/store/index";

// Test about data
// test("Get age title", async () => {
//     const wrapper = mount(Data, {
//         global: {
//             plugins: [store],
//         },
//     });
//     expect(wrapper.html()).toContain("Select your age");
// });