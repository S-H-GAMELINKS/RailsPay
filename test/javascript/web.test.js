import { shallowMount } from "@vue/test-utils";
import Index from 'components/web/Index';
import About from 'components/web/About';

describe('Test Web', () => {
    it('should render Web/Index', () => {
        const wrapper = shallowMount(Index);
        expect(wrapper).not.toBeNull();
    });

    it('should render Web/About', () => {
        const wrapper = shallowMount(About);
        expect(wrapper).not.toBeNull();
    });
});