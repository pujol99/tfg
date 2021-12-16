import { mount } from "@vue/test-utils";
import Data from "../Data";
import { store } from "../../src/store/index";


test("rcv test", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });

    expect(wrapper.html()).toContain("test");
});
