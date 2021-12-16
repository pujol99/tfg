import { mount } from "@vue/test-utils";
import Data from "../Data";
import { store } from "../../src/store/index";

// Test quiz data
test("Get age title", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });
    expect(wrapper.html()).toContain("Select your age");
});

test("Get gender title", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });

    expect(wrapper.html()).toContain("Select your gender");
});

// Test survey data
test("Get survey 1 title", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });

    expect(wrapper.html()).toContain(
        "An excessive use of social media platforms can lead to negative effects in physical and mental health"
    );
});

test("Get survey 2 option 1", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });

    expect(wrapper.html()).toContain("Strongly Disagree");
});

// Test scene data
test("Get scene 1 option 2", async () => {
    const wrapper = mount(Data, {
        global: {
            plugins: [store],
        },
    });

    expect(wrapper.html()).toContain("Listen while on the phone.");
});
