import { mount } from "@vue/test-utils";
import { store } from "../../src/store/index";

import Continue from "../../src/components/ui/Continue";
import Form from "../../src/components/ui/Form";
import Option from "../../src/components/ui/Option";
import Popup from "../../src/components/ui/Popup";
import Disclaimer from "../../src/components/ui/Disclaimer";
import SelectFlag from "../../src/components/ui/SelectFlag";
import Report from "../../src/components/ui/Report";

import SceneUi from "../../src/components/scenes/SceneUi";
import SceneVisuals from "../../src/components/scenes/SceneVisuals";

import Welcome from "../../src/views/Welcome";

const testComponents = {
    global: {
        plugins: [store],
        components: {
            Continue: Continue,
            Form: Form,
            Report: Report,
            Option: Option,
            Disclaimer: Disclaimer,
            SceneUi: SceneUi,
            Popup: Popup,
            SelectFlag: SelectFlag,
            SceneVisuals: SceneVisuals,
        },
    },
};

const welcomeWrapper = mount(Welcome, testComponents);

test("Read welcome title", async () => {
    expect(welcomeWrapper.html()).toContain("TFG");
});
test("Read continue CAT", async () => {
    await welcomeWrapper.find("#CAT").trigger("click");

    expect(welcomeWrapper.html()).toContain("Avança");
});

test("Read continue ENG", async () => {
    await welcomeWrapper.find("#ENG").trigger("click");

    expect(welcomeWrapper.html()).toContain("Continue");
});
