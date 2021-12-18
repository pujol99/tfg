import { mount } from "@vue/test-utils";
import App from "../../src/App";
import { store } from "../../src/store/index";

// Test quiz data
test("Get to second screen", async () => {
    const wrapper = mount(App, {
        global: {
            plugins: [store],
        },
    });
    await wrapper.find("button").trigger("click");
    
    expect(wrapper.html()).toContain("About you");
});
